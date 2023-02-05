import { ContainerX } from "@/common/layout/Container";
import _ from "lodash";
import { Hero } from "./sections/Hero";
import { ProductDescription } from "./sections/ProductDescription";
import { Team } from "./sections/Team";
import { CreateCredential } from "./sections/CreateCredential";
import { AcceptPDFs } from "./sections/AcceptPDFs";
import { ViewProposals } from "./sections/ViewProposals";
import { Footer } from "./sections/Footer";
import { FrequentAskedQuestions } from "./sections/FrequentAskedQuestions";

export const Home = () => {
    return <ContainerX>
        <Hero />
        <ProductDescription />
        <Team />
        <FrequentAskedQuestions />

        <CreateCredential />
        <AcceptPDFs />
        <ViewProposals />
        <Footer />
    </ContainerX>
}
