import React from "react";
import classes from "./Footer.module.css";

function Footer() {
    return (
        <div className={classes.footerWrap}>
            <div className={classes.innerWrap}>
                <div className={classes.Logo}>
                    <div>SoftApps</div>
                </div>
                <div className={classes.optionWrap}>
                    <div>Terms and services</div>
                    <div>Privacy Policy</div>
                    <div>Affiliate</div>
                </div>
            </div>
            <div className={classes.innerWrapBottom}>
                <div className={classes.copyright}>© UniqMyNFT. 2022. All rights reserved</div>
                <div className={classes.text}>
                    When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for
                    storing information to help provide you with a better, faster and safer experience and for marketing purposes.
                </div>
            </div>
        </div>
    );
}

export default Footer;
