import React, { useState } from "react";
import classes from "./Faq.module.css";
import { DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons";

function Faq() {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    return (
        <div className={classes.wrapper}>
            <h3>F.A.Q</h3>
            <h1>Have a question?</h1>
            <h3>Search our FAQ for answers to anything you might ask.</h3>
            <div className={classes.innerWrap}>
                <h2>Popular questions:</h2>
                <div className={classes.accordianWrap}>
                    <div onClick={() => setOpen(!open)} className={classes.accordianHeading}>
                        <span>{open === false ? <DownCircleOutlined /> : <UpCircleOutlined />}</span>
                        How tp start using UniqMyNFT?
                    </div>
                    {open && (
                        <div className={classes.accordianPara}>
                            When you’re making a generative NFT collection, each final image will be made out of different traits that can
                            be mixed and matched. First aff all you mast have basic assets for layers combination generation. Example: the
                            main background layer, body and few traits
                        </div>
                    )}
                </div>
                <div className={classes.accordianWrap}>
                    <div onClick={() => setOpen2(!open2)} className={classes.accordianHeading}>
                        <span>{open2 === false ? <DownCircleOutlined /> : <UpCircleOutlined />}</span>What are the requirements for assets?
                    </div>
                    {open2 && (
                        <div className={classes.accordianPara}>
                            Each layer in the image represents a trait (Hair, Outfit, etc), and each trait will have many variants (Short
                            Purple Hair, Long Purple Hair, etc). Draw each variant on a transparent .PNG file so all the layers will be
                            visible. Each image should be the same size. Before generation the full collection please use the preview tool.
                        </div>
                    )}
                </div>
                <div className={classes.accordianWrap}>
                    <div onClick={() => setOpen3(!open3)} className={classes.accordianHeading}>
                        <span>{open3 === false ? <DownCircleOutlined /> : <UpCircleOutlined />}</span>How i can pay for UniqMyNFT?
                    </div>
                    {open3 && (
                        <div className={classes.accordianPara}>We accept all major credit cards using payment provider - Paddle.com</div>
                    )}
                </div>
                <div className={classes.accordianWrap}>
                    <div onClick={() => setOpen4(!open4)} className={classes.accordianHeading}>
                        <span>{open4 === false ? <DownCircleOutlined /> : <UpCircleOutlined />}</span>How to sell NFT collection?
                    </div>
                    {open4 && (
                        <div className={classes.accordianPara}>
                            1) Pre-sale your collection on own website.
                            <br />
                            <br /> 2) Upload collection on marketplaces like: Solanart, SolSea end etc.
                        </div>
                    )}
                </div>
                <div className={classes.accordianWrap}>
                    <div onClick={() => setOpen5(!open5)} className={classes.accordianHeading}>
                        <span>{open5 === false ? <DownCircleOutlined /> : <UpCircleOutlined />}</span>How to promote NFT collection?
                    </div>
                    {open5 && (
                        <div className={classes.accordianPara}>
                            The key to the success of selling your NFT collection is a complex NFT promotion that includes: Twitter
                            promotion through airdrop posts, crypto giveaways, project shills, announcements. YouTube promotion project
                            review, announcement, airdrops, and mint event advertising. Discord promotion get the established and ready to
                            maintain Discord NFT community server.
                        </div>
                    )}
                </div>
                <div className={classes.accordianWrap}>
                    <div onClick={() => setOpen6(!open6)} className={classes.accordianHeading}>
                        <span>{open6 === false ? <DownCircleOutlined /> : <UpCircleOutlined />}</span>How tp start using UniqMyNFT?
                    </div>
                    {open6 && <div className={classes.accordianPara}>Drop me a line at david@uniqmynft.com</div>}
                </div>
            </div>
        </div>
    );
}

export default Faq;
