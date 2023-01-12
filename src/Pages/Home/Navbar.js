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
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
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
                  width={"170px"}
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
{/*  */}
                <div className="dropdown">
      <span tabIndex={0} >
      <Link className="nav-link"  to="/Trade_Swap">
      Trade
      </Link>
      </span>
      <div className="dropdown-content">
        <Link  className="nav-link" to="/Trade_Swap">
          Swap
        </Link>
        <Link className="nav-link" to="/trade_limit">
         Limit
        </Link>
        <Link  className="nav-link" to="/trade_liqudity">
          Liqudity 
        </Link>
      </div>
    </div>

    <div className="dropdown">
      <span tabIndex={0} >
      <Link className="nav-link"  to="/farms">
     Earn
      </Link>
      </span>
      <div className="dropdown-content">
      <Link  className="nav-link" to="/farms">
        Farms
        </Link>
        <Link  className="nav-link" to="/pool">
         Pool
        </Link>
      </div>
    </div>
    <div className="dropdown">
      <span tabIndex={0} >
      <Link className="nav-link"  to="/Win_latest">
    Win
      </Link>
      </span>
      <div className="dropdown-content">
      <Link  className="nav-link" to="/Win_latest">
        Trading Competition
        </Link>
        <Link  className="nav-link" to="/Win_prediction">
       Prediction
        </Link>
        <Link  className="nav-link" to="/Win_lottery">
         Lottery
        </Link>
        <Link  className="nav-link" to="/Win_pottery">
        Pottery
        </Link>
      </div>
    </div>
    <div className="dropdown">
      <span tabIndex={0} >
      <Link className="nav-link" to="/Nft_overview">
    Nft
      </Link>
      </span>
      <div className="dropdown-content">
        <Link  className="nav-link" to="/Nft_overview">
         OverView
        </Link>
        <Link className="nav-link" to="/" >
         Collection
 
        </Link>
        <Link className="nav-link" href="#">
         Activity
        </Link>
      </div>
    </div>
    <div className="dropdown">
      <span tabIndex={0} >
      <Link className="nav-link">
      <img src={lines} width={"20px"} className="img-fluid" />
      </Link>
      </span>
      <div className="dropdown-content">
      <Link  className="nav-link" to="/info_stable">
      Info
        </Link>
        <Link  className="nav-link" to="/">
       IFO
        </Link>
        <Link className="nav-link" to="/" >
       Voting
        </Link>
        <Link className="nav-link" href="#">
       Referral
        </Link>
      </div>
    </div>
    <div className="dropdown">
      <span tabIndex={0} >
      <Link className="nav-link"  to="/Trade_Swap">
    More
      </Link>
      </span>
      <div className="dropdown-content">
      <Link  className="nav-link" to="/">
      Virtual Event
        </Link>
        <Link  className="nav-link" to="/">
        Legend User
        </Link>
        <Link className="nav-link" to="/" >
        Jackpot
        </Link>
        <Link className="nav-link" href="#">
        Leader Board
        </Link>
      </div>
    </div>
{/*  */}

                  {/* <li className="nav-item">
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
                    <Link className="nav-link" to="/Nft">
                      NFT
                    </Link>
                  </li> */}
                  {/* ****************************** */}
                  {/* <Dropdown
                    onMouseLeave={() => setShowDropdown(false)}
                    onMouseOver={() => setShowDropdown(true)}
                    // style={{ width: "166px" }}
                  >
                    <Dropdown.Toggle className="drop-down" id="dropdown-basic">
                      <img src={lines} width={"20px"} className="img-fluid" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu show={showDropdown}>
                      <Dropdown.Item className="drop-down">
                        <HashLink className="drop-down" to="/info_stable">
                          Info
                        </HashLink>
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-down">
                        <HashLink className="drop-down" to="#">
                          IFO
                        </HashLink>
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-down">
                        <HashLink className="drop-down" to="#">
                          Voting
                        </HashLink>
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-down">
                        <HashLink className="drop-down" to="#">
                          Leader Board
                        </HashLink>
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-down">
                        <HashLink className="drop-down" to="#">
                          Virtual Event
                        </HashLink>
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-down">
                        <HashLink className="drop-down" to="#">
                          Legend User
                        </HashLink>
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-down">
                        <HashLink className="drop-down" to="#">
                          Jackpot
                        </HashLink>
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-down">
                        <HashLink className="drop-down" to="#">
                          Referral
                        </HashLink>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}

                  {/* ******************** */}
                  {/* ****************************************New******************************************* */}
                  
                  {/* ****************************************New******************************************* */}
                  <li className="nav-item">
                    <a className="nav-link"></a>
                  </li>
                </ul>
                <div className="d-flex nav_mbl-responsive">
                  {/* ************************************************************************************************** */}
                  <div className="mt-2 nav-margin-responsive">
                    <div className=" d-flex justify-content-center align-items-center text-center">
                      <img
                        src={profile_icon}
                        className="img-fluid circle"
                        width={"22px"}
                      />
                      <b className=" text_amount ms-2">$3.922</b>
                    </div>
                  </div>

                  {/* ************************************************************************************************** */}
                  <div className="d-flex align-items-center text_amount ms-4 gap-3 nav-margin-responsive">
                    <img
                      src={language_icon}
                      className="img-fluid"
                      width={"26px"}
                      height={"26px"}
                    />
                    <img
                      src={setting_icon}
                      className="img-fluid"
                      width={"26px"}
                      height={"26px"}
                    />
                  </div>
                  {/* ************************************************************************************************** */}
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
