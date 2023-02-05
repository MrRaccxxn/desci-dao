import { ContainerX } from "@/common/layout/Container";
import _ from "lodash";
import { Hero } from "./sections/Hero";
import { ProductDescription } from "./sections/ProductDescription";
import { Team } from "./sections/Team";
import { CreateCredential } from "./sections/CreateCredential";
import { AcceptPDFs } from "./sections/AcceptPDFs";
import { ViewProposals } from "./sections/ViewProposals";
import { Teams } from "./sections/Teams";
import { Footer } from "./sections/Footer";

export const Home = () => {
    return <ContainerX>
        <Hero />
        <ProductDescription />
        <Team />

        <CreateCredential />
        <AcceptPDFs />
        <ViewProposals />
        <Teams />
        <Footer />
    </ContainerX>
}
