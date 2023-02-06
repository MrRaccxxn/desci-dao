import { ContainerX } from "@/common/layout/Container";
import _ from "lodash";
import { Hero } from "./sections/Hero";
import { ProductDescription } from "./sections/ProductDescription";
import { Team } from "./sections/Team";
import { CreateCredential } from "./sections/CreateCredential";
import { ViewProposals } from "./sections/ViewProposals";
import { FrequentAskedQuestions } from "./sections/FrequentAskedQuestions";

export const Home = () => {
    return <ContainerX>
        <CreateCredential />
        <Hero />
        <ViewProposals />
        <ProductDescription />
        <Team />
        <FrequentAskedQuestions />
    </ContainerX>
}
