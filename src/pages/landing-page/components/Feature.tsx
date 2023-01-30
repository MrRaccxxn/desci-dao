/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
import React from 'react'

type Props = {
  icon: JSX.Element
  name: string
  details: string
}

const Feature = ({
  icon,
  name,
  details,
}: Props) => {
  return (
    <div className="h-84 w-80 mt-5 rounded-md border-2 border-gray px-2 py-5 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray bg-secondaryColor_green p-4">
          {icon}
        </div>
      </div>
      <div className="font-bold text-white">
        <h4>{name}</h4>
      </div>
      <p className=" text-white">{details}</p>
    </div>
  )
}

export default Feature;