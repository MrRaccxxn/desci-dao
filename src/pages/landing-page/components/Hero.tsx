/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
import React from 'react';
import useMediaQuery from "../../../../src/hooks/useMediaQuery";
import { SelectedPage } from "../../landing-page/types/types";
import { motion } from "framer-motion";
import TrySoulSci from "./TrySoulSci";
import robot from "../../../assets/robot_art.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const Hero = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return(
        <section className="py-20 md:pb-0 bg-primaryColor">
        <motion.div className="mx-auto w-5/6 items-center py-20 justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden"/>
            {" "}  <span className="text-gradient">Generation</span>{" "}
           
            </h1>
            <div className="ss:flex md:mr-80 mr-0">
                <TrySoulSci />
            </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Research Tool.
        </h1>
        <p className="max-w-[470px] mt-5 font-poppins font-normal text-white text-[18px] leading-[30.8px]">
        Elevate your research to new heights with SoulSci.
        </p>
        </div>
        <div className="md:my-0 my-10 relative flex justify-center items-center">
            <img src={robot} className="w-[100%] h-[100%] relative z-[5]"/>
            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
        </div>
        </motion.div>
        </section>
    )
}

export default Hero;



