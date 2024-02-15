import React from "react";
import {
  FAQ_IMG01,
  FAQ_IMG02,
  FAQ_SHAPE02,
  FAQ_SHAPE03,
} from "../../lib/assets";

export const FaqAreaOne = () => {
  return (
    <section className="faq-area" >
      <div className="faq-bg-shape"></div>

      <div className="faq-shape-wrap">
        <img src={FAQ_SHAPE02} alt="" />
        <img src={FAQ_SHAPE03} alt="" />
      </div>

      <div className="container" >
        <div className="row align-items-end justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="faq-img-wrap" style={{marginTop: '100px'}}>
              <img src={FAQ_IMG01} alt="" />
              <img src={FAQ_IMG02} alt="" data-parallax='{"y" : 100 }' />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="faq-content" style={{marginTop: '100px'}}>
              <div className="section-title mb-30 tg-heading-subheading animation-style2">
                <span className="sub-title tg-element-title">
                  Our Service Benefits
                </span>
                <h2 className="title tg-element-title">
                 Stay Ahead on Innovations & Speedy Delivery
                </h2>
              </div>
              <p>
              we take a keen interest in maximizing the capacity of each team member to deliver results. Our strategy is:
              </p>

              <div className="accordion-wrap">
                <div className="accordion" id="accordionExample">
                  {/* excellence  */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Excellence
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          We go the extra mile to deliver excellent results.  We take pride in the quality 
                          delivery of each service we render, this sets us apart. 
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* integrity  */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Integrity
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                        As a community, we adhere strictly to the industry codes of ethical conduct.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* client-centric  */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Client-centric
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                        Our customers are always  at the center of all business decisions, 
                        processes, and interactions.  Our emphasis is on understanding and meeting the needs, preferences, and expectations of each client. 
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* teamwork  */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Teamwork
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          we understand the importance of networking and maximizing the 
                          competence of professionals in a team. Hence, carefully select the most 
                          competent and skilled man for each project delivery. 
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
