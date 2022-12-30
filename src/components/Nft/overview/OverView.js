import React from "react";
import Nft_Navbar from "../Nft_Navbar";
import "./OverView.css";
import searchIcon from "../../../Assets/Images/searchBar.png";
import Newest from "./Newest";
import HotCollection from "./HotCollection";
import NewestArrival from "./NewestArrival";
import Nft_Faq from "./Nft_Faq";

function OverView() {
  return (
    <>
      <div className="Over_bg">
        <Nft_Navbar />
        <div className="row">
          <div className="col-md-12">
            <div className="tNft mt-5">NFT Marketplace</div>
            <div className="t-nft-Buy">
              Buy and Sell NFTs on BNB Smart Chain
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 mt-2">
                <div className="input-group  mb-3 mt-5">
                  <span className="input-group-text search_icon_bg">
                    <img
                      src={searchIcon}
                      className="img-fluid"
                      width={"50px"}
                    />
                  </span>
                  <input
                    type="text"
                    className="form-control search_bar"
                    placeholder="Username"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newest />
      <HotCollection/>
      <NewestArrival/>
      <Nft_Faq/>
    </>
  );
}

export default OverView;
