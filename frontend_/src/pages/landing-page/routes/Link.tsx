/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '../types/types'
type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink 
    href={`#${lowerCasePage}`}
    className={`${selectedPage === lowerCasePage} ? "text-primaryColor" : ""
      transition duration-500 hover:text-secondaryColor_green
    `}

    onClick={() => setSelectedPage(lowerCasePage)}>
      {page}
    </AnchorLink>
  )
}

export default Link;

