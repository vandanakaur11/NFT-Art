import React from "react";
import classes from "./PricingOption.module.css";
import { CheckCircleFilled } from "@ant-design/icons";

function PricingOption() {
    return (
        <div className={classes.pricingWrapper}>
            <div>
                <h1>Flexible pricing options</h1>
                <h3>For the artists and NFT content makers. Make up to 100 art for free.</h3>
            </div>
            <div className={classes.cardWrapper}>
                <div className={classes.cardWrapperInner}>
                    <h1>Up to 1,000 uniq art generation</h1>
                    <h3>cost per collection generated</h3>
                    <h1>
                        <span>$149</span>
                    </h1>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>1,000 unique art combination</div>
                    </div>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>Rarity for layers and attributes</div>
                    </div>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>ETH/SOL/BSC JSON Metadata</div>
                    </div>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>Unlimited Previews</div>
                    </div>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>No watermark</div>
                    </div>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>Priority Email Support</div>
                    </div>
                </div>
                <div className={classes.cardWrapperInner}>
                    <h1>Up to 5,000 uniq art generation</h1>
                    <h3>cost per collection generated</h3>
                    <h1>
                        <span>$299</span>
                    </h1>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>5,000 unique art combination</div>
                    </div>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>Rarity for layers and attributes</div>
                    </div>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>ETH/SOL/BSC JSON Metadata</div>
                    </div>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>Unlimited Previews</div>
                    </div>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>No watermark</div>
                    </div>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>Priority Email Support</div>
                    </div>
                </div>
                <div className={classes.cardWrapperInner}>
                    <h1>Up to 10,000 uniq art generation</h1>
                    <h3>cost per collection generated</h3>
                    <h1>
                        <span>$499</span>
                    </h1>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>10,000 unique art combination</div>
                    </div>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>Rarity for layers and attributes</div>
                    </div>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>ETH/SOL/BSC JSON Metadata</div>
                    </div>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>Unlimited Previews</div>
                    </div>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>No watermark</div>
                    </div>
                    <div className={classes.iconText}>
                        <CheckCircleFilled />
                        <div>Priority Email Support</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingOption;
