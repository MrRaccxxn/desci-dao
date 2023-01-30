/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';
type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionBTN = ({children, setSelectedPage}: Props)=> {
    return(
        <AnchorLink
            className="rounded-md bg-secondaryColor_green font-bold px-6 py-2 hover:bg-yellow-400 hover:text-green-400"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    )
}

export default ActionBTN;