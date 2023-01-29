/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
//import React from 'react'
import {
    CpuChipIcon,
    AcademicCapIcon,
    ClipboardDocumentIcon,
    ComputerDesktopIcon
  } from '@heroicons/react/24/solid';
  import HeaderText from '../types/HeaderText';
  import Feature from './Feature';
  import { FeatureType } from '../types/types';
  import { SelectedPage } from "../../landing-page/types/types";
  import useMediaQuery from "../../../hooks/useMediaQuery";
  import { motion } from "framer-motion";

  
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

  const features: Array<FeatureType> = [
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      name: 'FEATURE 1',
      details: 'lorem some text here',
    },
    {
       icon: <CpuChipIcon className="h-6 w-6" />,
       name: 'FEATURE 2',
       details: 'lorem some text here',
      },
    {
      icon: <ClipboardDocumentIcon className="h-6 w-6" />,
      name: 'FEATURE 3',
      details: 'lorem some text here',
    },
    {
      icon: <ComputerDesktopIcon className="h-6 w-6" />,
      name: 'FEATURE 4',
      details: 'lorem some text here',
    },
  ]
  
  const Features = ({ setSelectedPage }: Props) =>  {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
      <div className="bg-yellow-50">
        <section id="features" className="py-10 md:pb-0 bg-primaryColor min-h-ful">
        <motion.div className="mx-auto items-center"
        onViewportEnter={() => setSelectedPage(SelectedPage.Features)}>
          {/* HEADER */}
          <div className="flex justify-center mx-90 -mb-10">
            <HeaderText>Features</HeaderText>
          </div>
  
          {/* FEATURES */}
          <div className="ml-20 py-20 mr-20 items-center justify-between md:flex">
            {features.map((feature: FeatureType) => (
              <Feature
                key={feature.name}
                icon={feature.icon}
                name={feature.name}
                details={feature.details}
              />
            ))}
          </div>
          </motion.div>
        </section>
      </div>
    )
  }
  export default Features;
