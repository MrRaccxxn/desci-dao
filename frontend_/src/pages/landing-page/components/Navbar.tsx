/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '../../../assets/images/logo.png';
import Link from '../routes/Link';
import { SelectedPage } from '../types/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import  ActionBTN from '../types/ActionBTN';
import  ActionBTN2 from '../types/ActionBTN2';

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, isTopOfPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? "" : "bg-primaryColor_orange drop-shadow"
  return(  <nav>
       <div className={`${flexBetween} bg-secondaryColor_orange fixed top-0 z-30 w-full py-3`}>
            <div className={`${navbarBackground} ${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-14`}>
                    {/*LEFT SIDE*/}
                    <img alt="logo" src={Logo} />
                    {/*RIGHT SIDE*/}
                    {isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-lg font-semibold`}>
                            <Link page ="Home" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link page ="About Us" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link page ="Upload Paper" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link page ="Features" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link page ="FQA" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link page ="Grants" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link page ="Contact Us" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                        <div className={`${flexBetween} gap-4`}>
                        <ActionBTN2 setSelectedPage={setSelectedPage} >My Dashboard</ActionBTN2>
                        <ActionBTN setSelectedPage={setSelectedPage} >Connect Wallet</ActionBTN>
                        </div>
                    </div>
                    ) : (
                            <button className="rounded-full bg-secondaryColor_green p-2"
                                onClick={()=> setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white"/>
                            </button>
                        )}
                </div>
            </div>
        </div>
        {/*MOBILE MENU MODAL*/}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primaryColor_orange drop-shadow-xl">
                {/*CLOSE ICON*/}
                <div className="flex justify-end p-12">
                    <button  onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-primaryColor hover:text-secondaryColor_green"/>
                    </button>
                </div>
                {/*MENU ITEMS*/}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl ">
                            <Link page ="Home" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link page ="About Us" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link page ="Upload Paper" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link page ="Features" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link page ="FQA" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link page ="Grants" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link page ="Contact Us" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
            </div>
        )}
    </nav>)
}

export default Navbar;