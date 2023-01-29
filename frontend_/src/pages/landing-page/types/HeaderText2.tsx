/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
import React from 'react'

type Props = {
  children: React.ReactNode
}

const HeaderText2 = ({ children }: Props) => {
  return <h1 className="font-poppins text-md items-center md:flex text-white justify-center font-normal">{children}</h1>
}

export default HeaderText2;