import useIsMobile from '../hooks/useIsMobile.js'
import DesktopHome from './DesktopHome.jsx'
import MobileHome from './MobileHome.jsx'

export default function Home() {
  const isMobile = useIsMobile()
  return isMobile ? <MobileHome /> : <DesktopHome />
}
