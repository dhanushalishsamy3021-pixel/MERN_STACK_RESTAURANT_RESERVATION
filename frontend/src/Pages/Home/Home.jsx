import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import HeroSection from '../../components/HeroSection'
import About from '../../components/About'
import Qualities from '../../components/Qualities'
import Menu from '../../components/Menu'
import WhoAreWe from '../../components/WhoAreWe'
import Team from '../../components/Team'
import Reservation from '../../components/Reservation'
import Footer from '../../components/Footer'

const Home = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const scrollSection = searchParams.get("scroll");
    if (scrollSection) {
      const element = document.getElementById(scrollSection);
      if (element) {
        const timer = setTimeout(() => {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [searchParams]);

  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <Team/>
      <Reservation/>
      <Footer/>
    </>
  )
}

export default Home
