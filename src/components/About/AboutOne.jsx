import React from "react";
import {
  ABOUT_IMG01,
  ABOUT_IMG_SHAPE01,
  ABOUT_IMG_SHAPE02,
} from "../../lib/assets";

export const AboutOne = () => {
  return (
    <section className="about-area about-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="about-img-wrap">
              <img src={ABOUT_IMG01} alt="" className="main-img" />
              <img src={ABOUT_IMG_SHAPE01} alt="" />
              <img src={ABOUT_IMG_SHAPE02} alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-content">
              <div className="section-title mb-25 tg-heading-subheading animation-style2">
                <span className="sub-title tg-element-title">
                  What We are Doing
                </span>
                <h2 className="title tg-element-title">
                  Changing The Narrative Through Collaborations.
                </h2>
              </div>
              <p>
                As a community-based IT firm, our highly experienced professionals work on both internal and external
                projects accross diverse technical spectrums. <br/>
                All hands are always on deck to achive cutting-edge results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
