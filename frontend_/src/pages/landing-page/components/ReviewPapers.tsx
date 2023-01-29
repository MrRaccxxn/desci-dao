//import { review } from '../types/types'
//import { layout } from './style'
import ActionBTN from '../types/ActionBTN'
import useMediaQuery from "../../../hooks/useMediaQuery";
import { SelectedPage } from "../../landing-page/types/types";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };


const ReviewPapers = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
        <section className="py-20 md:pb-0 bg-primary">
        <motion.div className="mx-auto w-5/6 items-center py-20 justify-center md:flex md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.ReviewPaper)}>
            Review
        </motion.div >
        </section>
    )
}

export default ReviewPapers;