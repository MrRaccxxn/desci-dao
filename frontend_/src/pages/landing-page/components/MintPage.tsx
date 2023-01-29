/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
import React from 'react';
import useMediaQuery from "../../../hooks/useMediaQuery";
import { SelectedPage } from "../types/types";
import { motion } from "framer-motion";
import ActionBTN from "../types/ActionBTN";
//import { DocumentPlusIcon }from "@heroicons/react/24/solid"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const MintPage = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return(
        <section className="py-18 md:pb-0 bg-primary ">
        <motion.div className="mx-auto w-5/6 items-center py-20 justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
        {/* LEFT */}
        <div className="flex flex-row justify-between ml-20 mt-20 items-center w-full">
        <div className="team_card bg-green-gradient">
            <h1 className="font-poppins font-semibold text-lg">Upload Research Paper</h1>
            <div className="team_btn"><ActionBTN setSelectedPage={setSelectedPage }>Mint Page</ActionBTN></div>
        </div>
        </div>

        </div>
        {/* RIGHT */}
        <div className="md:my-0 my-10 ml-40 relative justify-center items-center flex flex-row w-full">
        <div>
        <h1 className="vid_text font-poppins font-semibold text-x-lg text-white">How To Mint Page</h1>
        <div className="vid_container">
        <div className="vid_card" id="card-2"><iframe src="http://youtube.com"></iframe></div>
        </div>
        </div>
        </div>
        </motion.div>
        </section>
    )
}

export default MintPage;







