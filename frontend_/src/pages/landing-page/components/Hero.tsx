import React from 'react';
import useMediaQuery from "../../../hooks/useMediaQuery";
import { SelectedPage } from "../../landing-page/types/types";
import { motion } from "framer-motion";
import GetStarted from "../components/GetStarted";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const Hero = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return(
        <section className="py-10 md:h-full md:pb-0 bg-primaryColor ">
                  <motion.div className="e Next
Generation PDF Upload Method. mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row justify-between itemscenter w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden"/>
            {" "}  <span className="text-gradient">Generation</span>{" "}
            <br className="sm:block hidden"/>PDF Upload Method.
            </h1>
        </div>
        </div>
        <div className="ss:flex md:mr-4 mr-0">
                <GetStarted />
            </div>
        </motion.div>
        </section>
    )
}

export default Hero;



