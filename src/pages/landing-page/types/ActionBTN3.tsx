/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';
import React from 'react'
type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionBTN3 = ({children, setSelectedPage}: Props)=> {
    return(
        <AnchorLink
            className="rounded-md bg-green-gradient font-bold px-6 mt-5 py-2 hover:bg-primaryColor_green hover:text-white"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    )
}

export default ActionBTN3;