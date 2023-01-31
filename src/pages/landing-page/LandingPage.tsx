/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MintPage from './components/MintPage';
import Features from './components/Features';
import ReviewPapers from './components/ReviewPapers';
import AboutUs from './components/AboutUs';
import FAQ from './components/Accordian';
import Grants from './components/Grants';
import { useState, useEffect } from 'react';
import { SelectedPage } from './types/types';

function LandingPage() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
    );
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY === 0){
          setIsTopOfPage(true);
          setSelectedPage(SelectedPage.Home);
        }
        if (window.scrollY !== 0) setIsTopOfPage(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll)
    }, []);
    return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Hero 
        setSelectedPage={setSelectedPage}
      />
      <MintPage 
        setSelectedPage={setSelectedPage}
      />
      <Features
        setSelectedPage={setSelectedPage}
      />
      <ReviewPapers
        setSelectedPage={setSelectedPage}
      />
       <AboutUs
        setSelectedPage={setSelectedPage}
      />
       <FAQ
        setSelectedPage={setSelectedPage}
      />
     <Grants
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export {LandingPage};
