import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '../../../assets/logo.png';
import Link from '../routes/Link';
import { SelectedPage } from '../types/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import  ActionBTN from '../types/ActionBTN'

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return(  <nav>
       <div className={`${flexBetween} bg-secondaryColor_orange fixed top-0 z-30 w-full py-3`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
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
                        <div className={`${flexBetween} gap-8`}>
                        <p>My Dashboard</p>
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
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-secondaryColor_orange drop-shadow-xl">
                {/*CLOSE ICON*/}
                <div className="flex justify-end p-12">
                    <button  onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-primaryColor"/>
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