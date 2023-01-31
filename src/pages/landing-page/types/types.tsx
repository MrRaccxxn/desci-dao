/*Designed by Sandra Ashipala 28.01.2023 for FVM Hackathon https://linkedin.com/in/sandraashipala */
export enum SelectedPage {
    Home = "home",
    AboutUs = "aboutus",
    ReviewPaper = "reviewpaper",
    Features = "features",
    FAQ = "faq",
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

  export interface AccordianType {
    title: string
    description: string
    index: number;
  }
