/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
import StarIcon   from "../../../assets/icons/star.svg";
import ShieldIcon  from "../../../assets/icons/shield.svg";
import SendIcon  from "../../../assets/icons/send.svg";
export enum SelectedPage {
    Home = "home",
    AboutUs = "aboutus",
    ReviewPaper = "reviewpaper",
    Features = "features",
    FQA = "fqa",
    Grants = "grants",
    ContactUs = "contactus",
}

export interface FeatureType {
    icon: JSX.Element
    name: string
    details: string
  }

  export interface ReviewType {
    icon: JSX.Element
    step: string
    description: string
  }
