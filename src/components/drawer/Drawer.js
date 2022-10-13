import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import classes from "./Drawer.module.css";

const SideDrawer = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            {/* <Button type="primary" onClick={showDrawer}>
                Open
            </Button> */}
            <MenuOutlined onClick={showDrawer} />
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
                <div className={classes.optionWrap}>
                    <div>Benefits</div>
                    <div>Testimonials</div>
                    <div>Pricing</div>
                    <div>FAQ</div>
                    <div>Contact</div>
                </div>
            </Drawer>
        </>
    );
};

export default SideDrawer;
