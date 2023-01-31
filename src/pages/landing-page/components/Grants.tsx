/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
  import ETHGlobal from '../../../../src/assets/ethglobal_logo.png';
  import Filecoin from '../../../../src/assets/filecoin_logo.png';
  import Huddle01 from '../../../../src/assets/huddle01_logo.png';
  import Lighthouse from '../../../../src/assets/lighthouse_logo.jpeg';
  import HeaderText from '../types/HeaderText';
  import Grant from './Grant';
  import { GrantType } from '../types/types';
  import { SelectedPage } from "../../landing-page/types/types";
  import useMediaQuery from "../../../../src/hooks/useMediaQuery";
  import { motion } from "framer-motion";

  
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

  const grants: Array<GrantType> = [
    {
      logo: <img src={ETHGlobal}  className="h-84 w-80" />,

    },
    {
       logo: <img src={Filecoin}  className="h-20 w-80" />,
 
      },
    {
      logo: <img src={Huddle01}  className="h-84 w-80" />,

    },
    {
       logo: <img src={Lighthouse}  className="h-20 w-20" />,
  
      }
  ]
  
  const Grants = ({ setSelectedPage }: Props) =>  {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
      <div className="bg-yellow-50">
        <section id="grants" className="py-10 md:pb-0 bg-primaryColor min-h-ful">
        <motion.div className="mx-auto items-center"
        onViewportEnter={() => setSelectedPage(SelectedPage.Grants)}>
          {/* HEADER */}
          <div className="flex justify-center mx-90 -mb-10">
            <HeaderText>Grants Awarded by</HeaderText>
          </div>
  
          {/* GRANTS */}
          <div className="ml-20 py-10 mr-20 items-center justify-between md:flex">
          {grants.map((grant: GrantType) => (
              <Grant
                logo={grant.logo}
              />
            ))}
          </div>
          </motion.div>
        </section>
      </div>
    )
  }
  export default Grants;
