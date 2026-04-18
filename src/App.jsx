import React, {useEffect} from 'react'
import gsap from "gsap";
import { ScrollTrigger, SplitText, ScrollSmoother } from "gsap/all";

import Warp from './components/Warp/Warp'
import Cursor from './ui/cursor/Cursor'
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero'
import WhoAmI from './components/WhoAmI/WhoAmI';
import Experience from './components/Experience/Experience'
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

const App = () => {

  useEffect(()=>{
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
      normalizeScroll: true,
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <Warp/>
      <Cursor/>
      <div id="smooth-wrapper">
        <NavBar/>
        <div id="smooth-content">
            <Hero/>
            <WhoAmI/>
            <Experience/>
            <TechStack/>
            <Projects/>
            <Certifications/>
            <Contact/>
        </div>
      </div>
    </>
  )
}

export default App
