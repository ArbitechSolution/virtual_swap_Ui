import React from "react";
import successIcon from "../../Assets/Images/success22.png";
import graphCircle from "../../Assets/Images/Group29.png";
import circle1 from "../../Assets/Images/Ellipse 143.png";
import circle2 from "../../Assets/Images/Ellipse 144.png";
import circle3 from "../../Assets/Images/Ellipse 145.png";
import circle4 from "../../Assets/Images/Ellipse 146.png";
import circle5 from "../../Assets/Images/Ellipse 147.png";
import circle6 from "../../Assets/Images/Ellipse 148.png";

function Fsection1() {
  const graphData = [
    {
      title: "Used for raising funds for the project skhd kshdsk lshdsl ",
      pic: successIcon,
      circle1: circle1,
      circle2: circle2,
      circle3: circle3,
      circle4: circle4,
      circle5: circle5,
      circle6: circle6,
    },
  ];
  const data = [
    {
      title: "Used for raising funds for the project skhd kshdsk lshdsl ",
      pic: successIcon,
      circle1: circle1,
      circle2: circle2,
      circle3: circle3,
      circle4: circle4,
      circle5: circle5,
      circle6: circle6,
    },
    {
      title: "Used for raising funds for the project skhd kshdsk lshdsl ",
      pic: successIcon,
    },
    {
      title: "Used for raising funds for the project skhd kshdsk lshdsl ",
      pic: successIcon,
    },
    {
      title: "Used for raising funds for the project skhd kshdsk lshdsl ",
      pic: successIcon,
    },
    {
      title: "Used for raising funds for the project skhd kshdsk lshdsl ",
      pic: successIcon,
    },
    {
      title: "Used for raising funds for the project skhd kshdsk lshdsl ",
      pic: successIcon,
    },
    {
      title: "Used for raising funds for the project skhd kshdsk lshdsl ",
      pic: successIcon,
    },
    {
      title: "Used for raising funds for the project skhd kshdsk lshdsl ",
      pic: successIcon,
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <h2 className="t-finished-theNew text-center">
            The new standard of governance
          </h2>
          <p className="t-Governance">
            Governance, finance, and technology in one token - Pandora Spirit
            (PSR).
          </p>

          <div className="row">
            <div className="col-md-12">
              <div className="row d-flex justify-content-between">
                <div className="col-md-4 border border-primary">
                  <div className="FS-box1">
                    <div className="m-5">
                      <h2 className="text-center t-multifunctional">
                        Multifunctional Governance Token
                      </h2>
                      <p className="t-the-more">
                        The more hashrate-eligible swaps you conduct, the
                        greater your EXP.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 border border-primary">
                  <div className="FS-box2">
                    <div className="m-5">
                      <h2 className="text-center t-secure">
                        Secure Store of Value
                      </h2>
                      <p className="t-the-more">
                        The more hashrate-eligible swaps you conduct, the
                        greater your EXP.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 border border-primary">
                  <div className="FS-box3">
                    <div className="m-5">
                      <h2 className="text-center t-project">Project</h2>
                      <p className="t-the-more">
                        The more hashrate-eligible swaps you conduct, the
                        greater your EXP.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="t-diverse mt-5">Diverse Utility</div>
              <div className="row mt-5">
                <div className="col-md-6 border border-primary">
                  {data.map((data) => {
                    return (
                      <>
                        <div className="t-FS-title p-2">
                          <img
                            src={data.pic}
                            className="img-fluid"
                            width={"20px"}
                          />{" "}
                          &nbsp; &nbsp; {data.title}
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="col-md-6 border border-primary">
                  {data.map((data) => {
                    return (
                      <>
                        <div className="t-FS-title p-2">
                          <img
                            src={data.pic}
                            className="img-fluid"
                            width={"20px"}
                          />{" "}
                          &nbsp; &nbsp; {data.title}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex  justify-content-center align-items-center mt-5">
            <div className="col-md-6 border border-primary d-flex  justify-content-center">
              <img src={graphCircle} className="img-fluid" width={"422px"} />
            </div>
            <div className="col-md-6 border border-primary ">
              <div className="t-psr">PSR Tokenomics</div>
              {graphData.map((data) => {
                return (
                  <>
                    <div className="t-FS-title p-2">
                      <img
                        src={data.circle1}
                        className="img-fluid"
                        width={"18px"}
                      />{" "}
                      &nbsp; &nbsp; {data.title}
                    </div>
                    <div className="t-FS-title p-2">
                      <img
                        src={data.circle2}
                        className="img-fluid"
                        width={"18px"}
                      />{" "}
                      &nbsp; &nbsp; {data.title}
                    </div>
                    <div className="t-FS-title p-2">
                      <img
                        src={data.circle3}
                        className="img-fluid"
                        width={"18px"}
                      />{" "}
                      &nbsp; &nbsp; {data.title}
                    </div>
                    <div className="t-FS-title p-2">
                      <img
                        src={data.circle4}
                        className="img-fluid"
                        width={"18px"}
                      />{" "}
                      &nbsp; &nbsp; {data.title}
                    </div>
                    <div className="t-FS-title p-2">
                      <img
                        src={data.circle5}
                        className="img-fluid"
                        width={"18px"}
                      />{" "}
                      &nbsp; &nbsp; {data.title}
                    </div>
                    <div className="t-FS-title p-2">
                      <img
                        src={data.circle6}
                        className="img-fluid"
                        width={"18px"}
                      />{" "}
                      &nbsp; &nbsp; {data.title}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="row mt-5">
            <div className="t-psr text-center">PSR Token Tranches</div>
            <div className="col-md-6 border border-primary">
              <div className="t-heading-bg p-3">Tranche</div>
              {data.map((data) => {
                return (
                  <>
                    <div className="t-FS-title p-2">
                      <img
                        src={data.pic}
                        className="img-fluid"
                        width={"20px"}
                      />{" "}
                      &nbsp; &nbsp; {data.title}
                    </div>
                  </>
                );
              })}
            </div>
            <div className="col-md-6 border border-primary">
              <div className="t-heading-bg p-3">Vesting</div>
              {data.map((data) => {
                return (
                  <>
                    <div className="t-FS-title p-2">
                      <img
                        src={data.pic}
                        className="img-fluid"
                        width={"20px"}
                      />{" "}
                      &nbsp; &nbsp; {data.title}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fsection1;
