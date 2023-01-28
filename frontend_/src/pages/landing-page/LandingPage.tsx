/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
//import React from 'react'
import Navbar from './components/Navbar';
import { useState } from 'react';
import { SelectedPage } from './types/types';

function LandingPage() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
    );
  return (
    <div className="app">
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export {LandingPage};
