/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
import React from 'react'

type Props = {
  logo: JSX.Element
}

const Feature = ({
  logo,
}: Props) => {
  return (
    <div className="h-84 w-80 mt-5 px-2 py-5 text-center">
       <div className="mb-4 flex justify-center border-gray p-4 ">
          {logo}
        </div>
    </div>
  )
}

export default Feature;