import React from "react";
import "./Footer.css";
import Footer_Pic from "../../Assets/Images/footer_Pic.png";

function Footer() {
  return (
    <div className="footer_bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xl-12">
            <div className="row mb-4 ">
              <div className="col-xl-3 col-lg-3 col-md-12 mt-5">
                <div className="">
                  <img src={Footer_Pic} className="img-fluid" />
                </div>
                <div className="footer-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </div>
              </div>
              <div className="col-xl-3  col-lg-3  col-md-4 col-sm-4 text-about">
                <ul className="mt-3">
                  <h3 className="text-about-h3">About</h3>
                  <li className="p-1">CONTACT</li>
                  <li className="p-1">Brand</li>
                  <li className="p-1">Blog</li>
                  <li className="p-1">Community</li>
                  <li className="p-1">Litepaper</li>
                  <li className="p-1">Online Store</li>
                </ul>
              </div>
              <div className="col-xl-3  col-lg-3   col-md-4 col-sm-4 text-about">
                <ul className="mt-3">
                  <h3 className="text-about-h3">Help</h3>
                  <li className="p-1">Customer</li>
                  <li className="p-1"> Support</li>
                  <li className="p-1">Troubleshooting</li>
                  <li className="p-1">Guides</li>
                </ul>
              </div>
              <div className=" col-xl-3  col-lg-3   col-md-4 col-sm-4 text-about">
                <ul className="mt-3">
                  <h3 className="text-about-h3">dEVELOPERS</h3>
                  <li className="p-1">Github</li>
                  <li className="p-1">Documentation</li>
                  <li className="p-1">Bug Bounty</li>
                  <li className="p-1">aUDITS</li>
                  <li className="p-1">CAREERS</li>
                </ul>
              </div>
            </div>
          </div>
          <hr/>
          <div className="text-center mb-3 text-copyright">
          Copyright © 2022 Company Name S.L. All rights reserved.

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
