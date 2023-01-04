import React from 'react'
import bnbcoin from "../../../Assets/Images/bnb-logo.png";
import blueGraph from "../../../Assets/Images/FrameG.png";
import arrowDown from "../../../Assets/Images/arrowDown2.png";
import CoinIcon from "../../../Assets/Images/Group26.png";
import arrowUp from "../../../Assets/Images/arrowUp.png";
import Info_Navbar from '../Info_Navbar';
import "./info_stable.css"

function Info_stable() {
    const data = [
        {
          no: "1",
          name: "Lil Bulls",
          price: "$0.084",
          PriceChange: "14.80%",
          volume: "$0.084",
          liquidity: "90.1K",
          tokenamount: "0.0052 AFP",
          tokenamount2: "0.66 BUSD",
          account: "0xdd...529d",
        },
        {
          no: "1",
          name: "Lil Bulls",
          price: "$0.084",
          PriceChange: "14.80%",
          volume: "$0.084",
          liquidity: "90.1K",
          tokenamount: "0.0052 AFP",
          tokenamount2: "0.66 BUSD",
          account: "0xdd...529d",
        },
        {
          no: "1",
          name: "Lil Bulls",
          price: "$0.084",
          PriceChange: "14.80%",
          volume: "$0.084",
          liquidity: "90.1K",
          tokenamount: "0.0052 AFP",
          tokenamount2: "0.66 BUSD",
          account: "0xdd...529d",
        },
        {
          no: "1",
          name: "Lil Bulls",
          price: "$0.084",
          PriceChange: "14.80%",
          volume: "$0.084",
          liquidity: "90.1K",
          tokenamount: "0.0052 AFP",
          tokenamount2: "0.66 BUSD",
          account: "0xdd...529d",
        },
        {
          no: "1",
          name: "Lil Bulls",
          price: "$0.084",
          PriceChange: "14.80%",
          volume: "$0.084",
          liquidity: "90.1K",
          tokenamount: "0.0052 AFP",
          tokenamount2: "0.66 BUSD",
          account: "0xdd...529d",
        },
        {
          no: "1",
          name: "Lil Bulls",
          price: "$0.084",
          PriceChange: "14.80%",
          volume: "$0.084",
          liquidity: "90.1K",
          tokenamount: "0.0052 AFP",
          tokenamount2: "0.66 BUSD",
          account: "0xdd...529d",
        },
        {
          no: "1",
          name: "Lil Bulls",
          price: "$0.084",
          PriceChange: "14.80%",
          volume: "$0.084",
          liquidity: "90.1K",
          tokenamount: "0.0052 AFP",
          tokenamount2: "0.66 BUSD",
          account: "0xdd...529d",
        },
      ];
      return (
        <div className="container">
          <Info_Navbar/>
          <div className="row">
            <div className="col-md-12">
              <div className="row d-flex justify-content-center mt-5">
                <div className="col-md-6   d-flex justify-content-around">
                  <div>
                    <button className="btn-modified">Modified</button>
                  </div>
                  <div>
                    <button className="btn-nft-bnb d-flex justify-content-around  align-items-center">
                      <div className="Nft-bnb-bg">
                        <img
                          src={bnbcoin}
                          className="img-fluid mt-2"
                          width={"30px"}
                        />
                      </div>
                      <div className="me-2">BNB Smart Chain</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-5">
                <div className="col-lg-6 col-md-6   mt-5">
                  <div className="nS-graph">
                    <div className="row d-flex justify-content-center">
                      <div className="col-10   ">
                        <div className=" row ms-4 mt-3">
                          <div className="t-nft-liquidity">Liquidity</div>
                          <div className="t-nft-price">$72.74</div>
                          <div className="t-nft-date">Dec 10, 2022</div>
                        </div>
                        <div className="row mt-4">
                          <img src={blueGraph} className="img-fluid blue-graph" />
                        </div>
                      </div>
                      <div className="col-2  ">
                        <div className="d-flex flex-column  mt-4 gap-4 t-nft-y">
                          <div className=" bd-highlight">$0.00</div>
                          <div className=" bd-highlight">$1.00B</div>
                          <div className=" bd-highlight">$2.00B</div>
                          <div className="  bd-highlight">$3.00B</div>
                          <div className="  bd-highlight">$4.00B</div>
                          <div className="  bd-highlight">$5.00B</div>
                          <div className="  bd-highlight">$6.00B</div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12  ">
                        <div className="d-flex justify-content-evenly t-nft-x mt-4">
                          <div className=" bd-highlight">12</div>
                          <div className="bd-highlight">11</div>
                          <div className=" bd-highlight">11</div>
                          <div className="  bd-highlight">12</div>
                          <div className="  bd-highlight">11</div>
                          <div className="  bd-highlight">11</div>
                          <div className="  bd-highlight">12</div>
                          <div className="  bd-highlight">12</div>
                          <div className="  bd-highlight">11</div>
                          <div className="  bd-highlight">11</div>
                          <div className="  bd-highlight">12</div>
                          <div className="  bd-highlight">11</div>
                          <div className="  bd-highlight">11</div>
                          <div className="  bd-highlight">12</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6   mt-5">
                  <div className="nS-graph">
                    <div className="row d-flex justify-content-center">
                      <div className="col-10   ">
                        <div className=" row ms-4 mt-3">
                          <div className="t-nft-liquidity">Liquidity</div>
                          <div className="t-nft-price">$72.74</div>
                          <div className="t-nft-date">Dec 10, 2022</div>
                        </div>
                        <div className="row mt-4">
                          <img src={blueGraph} className="img-fluid blue-graph" />
                        </div>
                      </div>
                      <div className="col-2  ">
                        <div className="d-flex flex-column  mt-4 gap-4 t-nft-y">
                          <div className=" bd-highlight">$0.00</div>
                          <div className=" bd-highlight">$1.00B</div>
                          <div className=" bd-highlight">$2.00B</div>
                          <div className="  bd-highlight">$3.00B</div>
                          <div className="  bd-highlight">$4.00B</div>
                          <div className="  bd-highlight">$5.00B</div>
                          <div className="  bd-highlight">$6.00B</div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12  ">
                        <div className="d-flex justify-content-evenly t-nft-x mt-4">
                          <div className=" bd-highlight">12</div>
                          <div className="bd-highlight">11</div>
                          <div className=" bd-highlight">11</div>
                          <div className="  bd-highlight">12</div>
                          <div className="  bd-highlight">11</div>
                          <div className="  bd-highlight">11</div>
                          <div className="  bd-highlight">12</div>
                          <div className="  bd-highlight">12</div>
                          <div className="  bd-highlight">11</div>
                          <div className="  bd-highlight">11</div>
                          <div className="  bd-highlight">12</div>
                          <div className="  bd-highlight">11</div>
                          <div className="  bd-highlight">11</div>
                          <div className="  bd-highlight">12</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mt-5">
                  <div className="t-top-tokens">Top Tokens</div>
                  <table className="table">
                    <tr className="tnft-table">
                      <th>#</th>
                      <th>Name</th>
                      <th>PRICE</th>
                      <th>PRICE CHANGE</th>
                      <th>
                        VOLUME{" "}
                        <img src={arrowDown} className="img-fluid" width={"30px"} />
                      </th>
                      <th>LIQUIDITY</th>
                    </tr>
                    {data.map((data) => {
                      return (
                        <>
                          <tr className="t-nft-data">
                            <td>{data.no}</td>
                            <td>
                              <img
                                src={CoinIcon}
                                className="img-fluid"
                                width={"56px"}
                              />
                              {data.name}
                            </td>
                            <td>{data.price}</td>
                            <td>
                              <img
                                src={arrowUp}
                                className="img-fluid"
                                width={"26px"}
                              />
                              {data.PriceChange}
                            </td>
                            <td>{data.volume}</td>
                            <td>{data.liquidity}</td>
                          </tr>
                        </>
                      );
                    })}
                  </table>
                </div>
              </div>
              {/* ***********************************Top Pairs***************************************** */}
              <div className="row">
                <div className="col-md-12 mt-5">
                  <div className="t-top-tokens">Top Pairs</div>
                  <table className="table">
                    <tr className="tnft-table">
                      <th>#</th>
                      <th>PAIRS</th>
                      <th>
                        VOLUME 24H{" "}
                        <img src={arrowDown} className="img-fluid" width={"30px"} />
                      </th>
                      <th>VOLUME 7D</th>
                      <th>
                        LP REWARD FEES{" "}
                        <img src={arrowDown} className="img-fluid" width={"30px"} />
                      </th>
                      <th>LP REWARD APR</th>
                      <th>LIQUIDITY</th>
                    </tr>
                    {data.map((data) => {
                      return (
                        <>
                          <tr className="t-nft-data">
                            <td>{data.no}</td>
                            <td>
                              <img
                                src={CoinIcon}
                                className="img-fluid"
                                width={"56px"}
                              />
                              {data.name}
                            </td>
                            <td>{data.price}</td>
                            <td>
                              {/* <img src={arrowUp} className="img-fluid" width={"26px"}/> */}
                              {data.PriceChange}
                            </td>
                            <td>{data.volume}</td>
                            <td>{data.liquidity}</td>
                            <td>{data.liquidity}</td>
                          </tr>
                        </>
                      );
                    })}
                  </table>
                </div>
              </div>
              {/* ***********************************Transaction***************************************** */}
              <div className="row mb-5">
                <div className="col-md-12 mt-5">
                  <div className="row d-flex ">
                    <div className="col-md-12  d-flex justify-content-start align-items-center">
                      <div className="t-top-tokens">Transactions</div>
                      <div>
                        <div className="form-check form-check-inline ms-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            defaultValue="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            ALL
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            defaultValue="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            SWAP
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            defaultValue="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            ADDS
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            defaultValue="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            Remove
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <table className="table">
                    <tr className="tnft-table">
                      <th>#</th>
                      <th>PAIRS</th>
                      <th>
                        TOTAL VALUE{" "}
                        <img src={arrowDown} className="img-fluid" width={"30px"} />
                      </th>
                      <th>TOKEN AMOUNT</th>
                      <th>TOKEN AMOUNT</th>
                      <th>ACCOUNT</th>
                      <th>TIME</th>
                    </tr>
                    {data.map((data) => {
                      return (
                        <>
                          <tr className="t-nft-data">
                            <td>{data.no}</td>
                            <td>
                              <img
                                src={CoinIcon}
                                className="img-fluid"
                                width={"56px"}
                              />
                              {data.name}
                            </td>
                            <td>{data.price}</td>
                            <td>
                              {/* <img src={arrowUp} className="img-fluid" width={"26px"}/> */}
                              {data.tokenamount}
                            </td>
                            <td>{data.tokenamount2}</td>
                            <td>{data.account}</td>
                            <td>{data.liquidity}</td>
                          </tr>
                        </>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Info_stable