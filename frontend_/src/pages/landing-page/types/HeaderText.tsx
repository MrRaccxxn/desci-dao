import React from 'react'

type Props = {
  children: React.ReactNode
}

const HeaderText = ({ children }: Props) => {
  return <h1 className="font-poppins text-4xl text-white font-bold">{children}</h1>
}

export default HeaderText;