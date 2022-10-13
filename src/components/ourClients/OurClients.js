import React from "react";
import classes from "./OurClients.module.css";

function OurClients() {
    return (
        <div className={classes.wrapper}>
            <div>
                <h3>Our Clients</h3>
                <h1>Trusted by the community</h1>
            </div>
            <div className={classes.card}>
                <div className={classes.cardInner}>
                    <div>
                        <img src="https://i.pinimg.com/originals/8b/d6/b8/8bd6b815b7fad253c9b4d23fab437a1c.png" />
                    </div>
                    <div>
                        <h3>Crypto Ape</h3>
                        <h4>
                            I used the UniqmyNFT and was surprised by the processing speed. Everything was great! Got my NFT collection
                            ready to sell.
                        </h4>
                    </div>
                </div>
                <div className={classes.cardInner}>
                    <div>
                        <img src="https://pbs.twimg.com/profile_images/1432109108702949379/KSzff2YF_400x400.jpg" />
                    </div>
                    <div>
                        <h3>Doodle LLC</h3>
                        <h4>
                            It's a great company! UniqmyNFT is a Lifesaver and the best NFS art software. Supper useful setting for rarity
                            attributes. Many pricing plans for different needs.
                        </h4>
                    </div>
                </div>
                <div className={classes.cardInner}>
                    <div>
                        <img src="http://www.artrights.me/wp-content/uploads/2021/09/unnamed-4.png" />
                    </div>
                    <div>
                        <h3>Crypto Puncks</h3>
                        <h4>
                            Thanks a lot. Quickly, qualitatively, without unnecessary questions. The service is excellent. Generate a
                            complete Nft art collection in an hour. I will recommend UniqMyNFT to friends and acquaintances. Thank you!!!
                        </h4>
                    </div>
                </div>
                <div className={classes.cardInner}>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEMp0YQoQa_iVL3O4IMo9sFKS7EVLCsVbqICocGoKqkSaPTqbbrDIJowQogMMNfEU0j40&usqp=CAU" />
                    </div>
                    <div>
                        <h3>HOT Bunnies</h3>
                        <h4>Thanks uniqmynft We built a super cool NFT collection from our assets.</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurClients;
