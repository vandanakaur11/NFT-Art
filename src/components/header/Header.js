import React from "react";
import classes from "./Header.module.css";
import SideDrawer from "../drawer/Drawer";

function Header() {
    return (
        <div className={classes.headerWrap}>
            <div className={classes.Logo}>SoftApps</div>
            <div className={classes.Btn}>
                <div>Generate Art</div>
            </div>
            <div className={classes.drawerWrap}>
                <SideDrawer />
            </div>
            <div className={classes.optionWrap}>
                <div>Benefits</div>
                <div>Testimonials</div>
                <div>Pricing</div>
                <div>FAQ</div>
                <div>Contact</div>
            </div>
        </div>
    );
}

export default Header;
