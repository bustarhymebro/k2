import MobileHero from '../components/mobile/MobileHero.jsx'
import MobileAbout from '../components/mobile/MobileAbout.jsx'
import Disciplines from '../components/Disciplines.jsx'
import Programs from '../components/Programs.jsx'
import PhotoStrip from '../components/PhotoStrip.jsx'
import Coach from '../components/Coach.jsx'
import Schedule from '../components/Schedule.jsx'
import Marquee from '../components/Marquee.jsx'
import FreeClass from '../components/FreeClass.jsx'
import Location from '../components/Location.jsx'

export default function MobileHome() {
  return (
    <>
      <MobileHero />
      <MobileAbout />
      <Disciplines />
      <Programs />
      <PhotoStrip variant="light" />
      <Coach />
      <Schedule />
      <Marquee variant="dark" />
      <FreeClass />
      <Location />
    </>
  )
}
