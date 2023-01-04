import React from "react";
import "./Navbar.css";
import virtual_swap_logo from "../../Assets/Images/VirtualSwap-01.png";
import lines from "../../Assets/Images/Group1.png";
import profile_icon from "../../Assets/Images/uu7.png";
import language_icon from "../../Assets/Images/Maskgroup.png";
import setting_icon from "../../Assets/Images/SettingIcon.png";
import BnbIcon from "../../Assets/Images/BnbIcon.png";
import connection_icon from "../../Assets/Images/connection_icon.png";
import Trade_Swap from "../../components/trade-swap/Trade_Swap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img
                  src={virtual_swap_logo}
                  className="img-fluid"
                  width={"200px"}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse text-font"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item">
                    <Link
                      className="nav-link text-font "
                      aria-current="page"
                      to="/Trade_Swap"
                    >
                      Trade
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-font" to="/farms">
                      Earn
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link text-font" to="/latest">
                      Win
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Nft">NFT</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                       <img src={lines} width={"20px"} className="img-fluid" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/info_stable">
                          Info
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          IFO
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                         Voting
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                        Leader Board
                        </Link>
                      </li>
                    </ul>
                  </li> 
                  <li className="nav-item">
                    <a className="nav-link">
                     
                    </a>
                  </li>
                </ul>
                <div className="d-flex">
                  {/* ************************************************************************************************** */}
                  <div className="circle mt-1">
                    <div className=" d-flex justify-content-center align-items-center text-center">
                      <img
                        src={profile_icon}
                        className="img-fluid"
                        width={"25px"}
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center text_amount ms-2">
                    <b>$3.922</b>
                  </div>
                  {/* ************************************************************************************************** */}
                  <div className="d-flex align-items-center text_amount ms-4">
                    <img
                      src={language_icon}
                      className="img-fluid"
                      width={"26px"}
                      height={"26px"}
                    />
                  </div>
                  {/* ************************************************************************************************** */}
                  <div className="d-flex align-items-center text_amount ms-4">
                    <img
                      src={setting_icon}
                      className="img-fluid"
                      width={"26px"}
                      height={"26px"}
                    />
                  </div>
                  {/* ************************************************************************************************** */}
                  <div className="d-flex  align-items-center text_amount ms-4">
                    <button className=" d-flex justify-content-start align-items-center btn_bg">
                      <div className="btn_icon_bg p-1 ">
                        <img src={BnbIcon} className="img-fluid " />
                      </div>
                      <div className=" btn_bnb_smart_chain">
                        BNB Smart Chain
                      </div>
                    </button>
                  </div>
                  {/* ************************************************************************************************** */}
                  <div className="d-flex  align-items-center text_amount ms-4">
                    <button className=" d-flex justify-content-start align-items-center btn_connect_bg">
                      <div className="btn_connect_icon_bg p-2">
                        <img src={connection_icon} className="img-fluid " />
                      </div>
                      <div className=" btn_connection_wallet">
                        Connect Wallet
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
