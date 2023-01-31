/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
//import React from 'react'
import { useState } from 'react'
  import HeaderText from '../types/HeaderText';
  import { SelectedPage } from "../../landing-page/types/types";
  import useMediaQuery from "../../../../src/hooks/useMediaQuery";
  import { motion } from "framer-motion";
  
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };


  const data = [
    {
      title: 'What is SBT?',
      description: 'lorem some text here, lorem some text here, lorem some text here, lorem some text here, lorem some text here, lorem some text here.',
    },
    {
       title: 'How can I create an SBT?',
       description: 'lorem some text here, lorem some text here, lorem some text here, lorem some text here, lorem some text here, lorem some text here.',
      },
    {
      title: 'How can I submit my research paper?',
      description: 'lorem some text here, lorem some text here, lorem some text here, lorem some text here, lorem some text here, lorem some text here.',
    },
    {
      title: 'How to peer review papers',
      description: 'lorem some text here, lorem some text here, lorem some text here, lorem some text here, lorem some text here, lorem some text here.',
    },
  ]
  
  const Accordian = ({ setSelectedPage }: Props) =>  {
    const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
        return setSelected(null)
    }
    setSelected(i)
 }
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
      <div className="wrapper md:pb-0 bg-primary ">
        <section id="accordian" className=" justify-center items-center flex md:flex-col flex-col py-20">
        <motion.div className="mx-auto items-center"
        onViewportEnter={() => setSelectedPage(SelectedPage.FAQ)}>
          {/* HEADER */}
          <div className="flex justify-center mx-90 mb-10 ">
            <HeaderText>Frequently Asked Questions</HeaderText>
          </div>
  
          {/* FEATURES */}
          <div className='w-90'>
          {data.map((item, i) => (
            <div className="item bg-secondaryColor_orange w-90 ">
            <div className="title flex justify-between items-center cursor-pointer" onClick={() => toggle(i)}>
                <h2>{item.title}</h2>
                <span>{selected == i ? '-' : '+'}</span>
            </div>
            <div className={selected == i ? 'content show' : 'content'}>{item.description}</div>
          </div>
          ))}
          </div>
          </motion.div>
        </section>
      </div>
    )
  }
  export default Accordian;
