/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
import React from 'react'

type Props = {
  icon: JSX.Element
  step: string
  description: string
}

const Review = ({
  icon,
  step,
  description,
}: Props) => {
  return (
    <div className="flex p-6 rounded-[20px] feature-card mb-4">
    <div className="w-[34px] h-[34px] rounded-full flex justify-center items-center bg-secondaryColor_orange">
      <div className="w-6 h-6 relative">
        {icon}
     </div>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-gradient text-[18px] leading-[23.4px] mb-1">
        {step}
      </h4>
      <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
        {description}
      </p>
    </div>
  </div>
  )
}

export default Review;