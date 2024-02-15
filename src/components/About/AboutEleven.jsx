import React from "react";
import { Link } from "react-router-dom";
import {
  INNER_ABOUT_IMG05,
  INNER_ABOUT_SHAPE01,
  INNER_ABOUT_SHAPE02,
} from "../../lib/assets";

export const AboutEleven = () => {
  return (
    <section className="about-area-eleven">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 order-0 order-lg-2">
            <div className="about-img-wrap-eleven">
              <img src={INNER_ABOUT_IMG05} alt="" />
              <img src={INNER_ABOUT_SHAPE01} alt="" className="shape-one" />
              <img src={INNER_ABOUT_SHAPE02} alt="" className="shape-two" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content-eleven">
              <div className="section-title mb-30">
                <span className="sub-title">Who we are</span>
                <h2 className="title">
                  Best Digital Solution <br />
                  Provider Community
                </h2>
              </div>

              <p style={{textTransform: "initial"}}>
              SlantApp is a community-driven IT firm comprising seasoned professionals adept at handling a wide range of internal and external projects
              across diverse technical spectrums.
              </p>
              <p style={{textTransform: "initial"}}>
              At SlantApp, all hands are always on deck to achieve cutting-edge results as we believe strongly in teamwork over a one-man show. Our services include:
              </p>
              {/* <p>
                As a community, we give equal opportunities to our professionals. This is why we take a 
                keen interest in maximizing the capacity of each team member. This is one of the most important elements in building a successful and impactful organisation for societal development at large.
              </p> */}

              <div className="about-list-two">
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-arrow-right"></i>IT Management & Solutions
                  </li>
                  <li>
                    <i className="fas fa-arrow-right"></i>Mobile App Development
                  </li>
                  <li>
                    <i className="fas fa-arrow-right"></i>Web Design &
                    Development
                  </li>
                </ul>
              </div>

              <Link to="/services" className="btn btn-three">
                Take our Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
