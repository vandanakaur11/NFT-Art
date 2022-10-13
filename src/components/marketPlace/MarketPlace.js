import React from "react";
import classes from "./MarketPlace.module.css";

function MarketPlace() {
    return (
        <div className={classes.wrapper}>
            <div>
                <h1>Marketplaces Ready</h1>
                <h3>
                    Uniqmynft exports metadata compatible with leading markplaces for Ethereum, Polygon & Solana, including rich attributes.
                </h3>
            </div>
            <div className={classes.logo}>
                <img src="https://storage.googleapis.com/uniqmynftimg/magic-eden.png" />
                <img src="https://storage.googleapis.com/uniqmynftimg/rarible.png" />
                <img src="https://storage.googleapis.com/uniqmynftimg/solsea.png" />
                <img src="https://storage.googleapis.com/uniqmynftimg/opensea.png" />
            </div>
        </div>
    );
}

export default MarketPlace;
