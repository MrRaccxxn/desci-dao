/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
import { StarIcon } from '@heroicons/react/24/solid';
import { ReviewType } from '../types/types';
import  Review  from './Review'
import  ActionBTN3 from '../types/ActionBTN3';
import useMediaQuery from "../../../hooks/useMediaQuery";
import { SelectedPage } from "../../landing-page/types/types";
import { motion } from "framer-motion";

 
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

  const reviews: Array<ReviewType> = [
    {
      icon: <StarIcon className="h-6 w-6 secondaryColor_orange" />,
      step: 'STEP 1',
      description: 'hover your cursor here',
    },
    {
       icon: <StarIcon className="h-6 w-6" />,
       step: 'STEP 2',
       description: 'hover your cursor here',
      },
    {
      icon: <StarIcon className="h-6 w-6" />,
      step: 'STEP 3',
      description: 'hover your cursor here',
    },
  ]

const ReviewPapers = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
        <section className="md:pb-0 bg-primary flex md:flex-row flex-col py-4">
        <motion.div className=" items-center gap-8  justify-center md:flex md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.ReviewPaper)}>
          {/* LEFT */}
        <div className="ml-20 mr-20 flex-1 flex justify-center items-start flex-col">
            <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">You do the writing, <br className="sm:block hidden"/>SoulSci will handle the rest.
            </h2>
            <p className="font-poppins font-normal text-[18px] text-white leading-[30.8px] max-w-[470px] mt-5">Follow these few steps to get your paper peer-reviewed. Et natus molestiae qui temporibus deleniti ut numquam sapiente vel saepe pariatur ab internos error et perspiciatis animi ut minus atque.</p>
            <ActionBTN3 setSelectedPage={setSelectedPage}>LEARN MORE</ActionBTN3>
        </div>
        {/* RIGHT */}
        <div className="flex-col py-20 ml-40 items-center justify-between md:flex">
            {reviews.map((review: ReviewType) => (
              <Review
                key={review.step}
                icon={review.icon}
                step={review.step}
                description={review.description}
              />
            ))}
          </div>
        </motion.div >
        </section>
    )
}

export default ReviewPapers;