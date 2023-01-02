import React from "react";
import "./Activity.css";
import coin_icon from "../../../Assets/Images/Group28.png";
import bnbIcon from "../../../Assets/Images/bnb-logo.png";

function Act_table() {
  const data = [
    {
      coinIcon: coin_icon,
      coin: "Lil Bulls",
      coinD: "Lil Bulls #2680",
      event: "Modified",
      price: "20.21",
      priceD: "(-99.90)",
      from: "0xc0...d1ce",
      form1: "BossesCrosses",
      to: "-",
      date: "12/9/2022, 11:24 AM",
      bnbicon: bnbIcon,
    },
    {
      coinIcon: coin_icon,
      coin: "Lil Bulls",
      coinD: "Lil Bulls #2680",
      event: "Modified",
      price: "20.21",
      priceD: "(-99.90)",
      from: "0xc0...d1ce",
      form1: "BossesCrosses",
      to: "-",
      date: "12/9/2022, 11:24 AM",
      bnbicon: bnbIcon,
    },
    {
      coinIcon: coin_icon,
      coin: "Lil Bulls",
      coinD: "Lil Bulls #2680",
      event: "Modified",
      price: "20.21",
      priceD: "(-99.90)",
      from: "0xc0...d1ce",
      form1: "BossesCrosses",
      to: "-",
      date: "12/9/2022, 11:24 AM",
      bnbicon: bnbIcon,
    },
    {
      coinIcon: coin_icon,
      coin: "Lil Bulls",
      coinD: "Lil Bulls #2680",
      event: "Modified",
      price: "20.21",
      priceD: "(-99.90)",
      from: "0xc0...d1ce",
      form1: "BossesCrosses",
      to: "-",
      date: "12/9/2022, 11:24 AM",
      bnbicon: bnbIcon,
    },
    {
      coinIcon: coin_icon,
      coin: "Lil Bulls",
      coinD: "Lil Bulls #2680",
      event: "Modified",
      price: "20.21",
      priceD: "(-99.90)",
      from: "0xc0...d1ce",
      form1: "BossesCrosses",
      to: "-",
      date: "12/9/2022, 11:24 AM",
      bnbicon: bnbIcon,
    },
    {
      coinIcon: coin_icon,
      coin: "Lil Bulls",
      coinD: "Lil Bulls #2680",
      event: "Modified",
      price: "20.21",
      priceD: "(-99.90)",
      from: "0xc0...d1ce",
      form1: "BossesCrosses",
      to: "-",
      date: "12/9/2022, 11:24 AM",
      bnbicon: bnbIcon,
    },
    {
      coinIcon: coin_icon,
      coin: "Lil Bulls",
      coinD: "Lil Bulls #2680",
      event: "Modified",
      price: "20.21",
      priceD: "(-99.90)",
      from: "0xc0...d1ce",
      form1: "BossesCrosses",
      to: "-",
      date: "12/9/2022, 11:24 AM",
      bnbicon: bnbIcon,
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row mt-5">
            <div className="col-md-6 d-flex justify-content-around align-items-center act-btn-responsive">
              <div className="t-filtered">Filtered By:</div>
              <button type="button" class=" btn-act">
                Collection
              </button>
              <button type="button" class="btn-act">
                Listed
              </button>
              <button type="button" class=" btn-act">
                Sold
              </button>
              <button type="button" class=" btn-act">
                Modified
              </button>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center act-btn-responsive">
              <button type="button" class=" btn-ref">
                Refresh
              </button>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-10">
              <table className="table table-act">
                <tr>
                  <th></th>
                  <th>EVENT</th>
                  <th>PRICE</th>
                  <th>FROM </th>
                  <th>TO</th>
                  <th>DATE</th>
                </tr>
                {data.map((data) => {
                  return (
                    <>
                      <tr>
                        <td className="t-coin d-flex flex-row align-items-center  justify-content-center">
                          <div>
                            <img
                              src={data.coinIcon}
                              className="img-fluid"
                              width={"70px"}
                            />
                          </div>
                          <div className="text-left">
                            {data.coin}
                            <br />
                            <span className="t-coinD">{data.coinD}</span>
                          </div>
                        </td>
                        <td className="t-event">{data.event}</td>
                        <td className="t-price d-flex flex-row align-items-center  justify-content-center">
                          <div>
                            <img
                              src={data.bnbicon}
                              className="img-fluid"
                              width={"30px"}
                            />
                          </div>
                          <div className="text-left t-price">
                            {data.price}
                            <br />
                            <span className="t-coinD">{data.priceD}</span>
                          </div>
                        </td>

                        <td className="t-from">
                          <div className="d-flex justify-content-center align-items-center">
                            <div>
                              <img
                                src={data.coinIcon}
                                className="img-fluid"
                                width={"30px"}
                              />
                            </div>
                            <div className="text-left">
                              {data.from}
                              <br />
                              <span className="t-coinD">{data.form1}</span>
                            </div>
                          </div>
                        </td>
                        <td>-</td>

                        <td className="t-act-date">{data.date}</td>
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

export default Act_table;
