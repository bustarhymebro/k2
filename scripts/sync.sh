#!/bin/bash
# Two-way sync between local k2-website and bustarhymebro/k2 on GitHub.
# Pulls remote changes (rebasing local on top), then auto-commits any
# working-tree changes and pushes them. Designed to be called every minute
# from launchd.

set -u
REPO="/Users/moneymachine/k2-website"
BRANCH="main"
LOG="$REPO/scripts/sync.log"

cd "$REPO" || { echo "[$(date '+%Y-%m-%d %H:%M:%S')] cannot cd to $REPO" >> "$LOG"; exit 1; }

# Ensure we're on the expected branch; bail loudly if not
CURRENT=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)
if [ "$CURRENT" != "$BRANCH" ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] not on $BRANCH (on $CURRENT), skipping" >> "$LOG"
  exit 0
fi

# Pull remote changes first, rebasing any local commits on top
git fetch origin "$BRANCH" --quiet 2>>"$LOG"
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse "origin/$BRANCH" 2>/dev/null || echo "$LOCAL")

if [ "$LOCAL" != "$REMOTE" ]; then
  # Stash any uncommitted work so rebase can succeed cleanly
  STASHED=0
  if [ -n "$(git status --porcelain)" ]; then
    git stash push -u -m "auto-sync-stash" --quiet 2>>"$LOG" && STASHED=1
  fi

  if ! git rebase "origin/$BRANCH" --quiet 2>>"$LOG"; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] rebase failed, aborting" >> "$LOG"
    git rebase --abort 2>>"$LOG" || true
    [ "$STASHED" = "1" ] && git stash pop --quiet 2>>"$LOG" || true
    exit 1
  fi

  if [ "$STASHED" = "1" ]; then
    git stash pop --quiet 2>>"$LOG" || true
  fi
fi

# Auto-commit any local changes
if [ -n "$(git status --porcelain)" ]; then
  git add -A 2>>"$LOG"
  git -c user.email="chleb@chlebholdings.com" \
      -c user.name="bustarhymebro" \
      commit -m "auto: sync $(date '+%Y-%m-%d %H:%M:%S')" --quiet 2>>"$LOG"
fi

# Push if we have anything ahead of origin
AHEAD=$(git rev-list --count "origin/$BRANCH..HEAD" 2>/dev/null || echo 0)
if [ "$AHEAD" -gt 0 ]; then
  if git push origin "$BRANCH" --quiet 2>>"$LOG"; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] pushed $AHEAD commit(s)" >> "$LOG"
  else
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] push failed" >> "$LOG"
    exit 1
  fi
fi

exit 0
