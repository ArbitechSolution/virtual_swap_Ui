import React from 'react';
import "./virtual.css"
import Blue from "../../Assets/Images/Group25.png";
import   Pink from "../../Assets/Images/Group26.png";
import Yellow from "../../Assets/Images/Group27.png";
import Picture from "../../Assets/Images/virtual_Card_pic.png";

function V_card() {
  return (
    <div className='container V-margin'>
    <div className='row'>
    <div className='col-md-12 '>

    <div className="row d-flex justify-content-between">
            <div className="col-md-4 border border-primary mt-3">
              <div className="v-card-1">
                <div className="v-innerCard">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={Blue} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon1">Moon pets</div>
                      <div className="t-v-date">
                          aug 20, 2022 - sep 20, 2022
                      </div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 border border-primary mt-3">
              <div className="  v-card-2">
                <div className="  v-innerCard2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={  Pink} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column justify-content-end p-3">
                      <div className="t-moon2 text-end">Moon pets</div>
                      <div className="t-v-date">
                          aug 20, 2022 - sep 20, 2022
                      </div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 border border-primary mt-3">
              <div className="  v-card-3">
                <div className="  v-innerCard3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={Yellow} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon3  text-end">Moon pets</div>
                      <div className="t-v-date">
                          aug 20, 2022 - sep 20, 2022
                      </div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 border border-primary mt-3">
              <div className="  v-card-1">
                <div className="  v-innerCard">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={  Blue} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon1  text-end">Moon pets</div>
                      <div className="t-v-date">
                          aug 20, 2022 - sep 20, 2022
                      </div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 border border-primary mt-3">
              <div className="  v-card-2">
                <div className="  v-innerCard2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={  Pink} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon2  text-end">Moon pets</div>
                      <div className="t-v-date">
                          aug 20, 2022 - sep 20, 2022
                      </div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 border border-primary mt-3">
              <div className="  v-card-3">
                <div className="  v-innerCard3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={Yellow} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon3  text-end">Moon pets</div>
                      <div className="t-v-date">
                          aug 20, 2022 - sep 20, 2022
                      </div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <img src={Picture}  className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>

    </div>

    </div>
    </div>
  )
}

export default V_card