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

  
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

  const features: Array<FeatureType> = [
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      name: 'FEATURE 1',
      location: 'lorem some text here',
    },
    {
       icon: <CpuChipIcon className="h-6 w-6" />,
       name: 'FEATURE 2',
       location: 'lorem some text here',
      },
    {
      icon: <ClipboardDocumentIcon className="h-6 w-6" />,
      name: 'FEATURE 3',
      location: 'lorem some text here',
    },
    {
      icon: <ComputerDesktopIcon className="h-6 w-6" />,
      name: 'FEATURE 4',
      location: 'lorem some text here',
    },
  ]
  
  const Features = ({ setSelectedPage }: Props) =>  {
    return (
      <div className="bg-yellow-50">
        <section id="features" className="py-10 md:pb-0 bg-primaryColor min-h-ful">
          {/* HEADER */}
          <div className="flex justify-center mx-90 -mb-10">
            <HeaderText>Features</HeaderText>
          </div>
  
          {/* FEATURES */}
          <div className="ml-20 mb-5 py-20 mr-20 items-center justify-between md:flex">
            {features.map((feature: FeatureType) => (
              <Feature
                key={feature.name}
                icon={feature.icon}
                name={feature.name}
                location={feature.location}
              />
            ))}
          </div>
        </section>
      </div>
    )
  }
  export default Features;