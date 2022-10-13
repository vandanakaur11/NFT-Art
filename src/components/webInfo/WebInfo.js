import React from "react";
import classes from "./WebInfo.module.css";

function WebInfo() {
    return (
        <div className={classes.webInfoWrapper}>
            <div className={classes.webInfoWrapperLeft}>
                <div>
                    <h1>
                        No Code <span> NFT Collection Generator </span>
                    </h1>
                    <h3>Generate 10,000+ NFT collection by uploading the layers. Get Ready to Sell collection.</h3>
                    <h2>With metadata for blockchains</h2>
                </div>
                <div className={classes.logoWrapper}>
                    <div>
                        <img src="https://storage.googleapis.com/uniqmynftimg/polygon-logo.webp" />
                        <img src="https://storage.googleapis.com/uniqmynftimg/eth.png" />
                    </div>
                    <div>
                        <img src="https://storage.googleapis.com/uniqmynftimg/Solana-logo.png" />
                        <img src="https://storage.googleapis.com/uniqmynftimg/binance.png" />
                    </div>
                </div>
                <div className={classes.Btn}>Create NFT Collection</div>
            </div>
            <div></div>
            <div className={classes.webInfoWrapperRight}>
                <div>
                    <img src="https://uniqmynft.com/monkey.webp" />
                </div>
            </div>
        </div>
    );
}

export default WebInfo;
