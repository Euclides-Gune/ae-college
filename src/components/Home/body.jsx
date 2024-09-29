import Section from "./BodyComponents/fisrtSection";
import { Fragment } from "react";
import CardSection from "./BodyComponents/cardSection";
import BodyFooter from "./BodyComponents/footer";

export default function Body() {
    return(
        <Fragment>
            <Section />
            <CardSection />
            <BodyFooter />
        </Fragment>  
    );
}