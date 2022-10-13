import React from "react";
import classes from "./WebContent.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import WebInfo from "../webInfo/WebInfo";
import PricingOption from "../pricingOption/PricingOption";
import MarketPlace from "../marketPlace/MarketPlace";
import OurClients from "../ourClients/OurClients";
import Faq from "../faq/Faq";

const WebContent = () => {
    return (
        <div className={classes.webContentWrapper}>
            <Header />
            <WebInfo />
            <MarketPlace />
            <PricingOption />
            <OurClients />
            <Faq />
            <Footer />
        </div>
    );
};

export default WebContent;
