import React from "react";
import { BANNER_SHAPE } from "../../lib/assets";
import { Link } from "react-router-dom";
import { SlickSlider } from "../SlickSlider/SlickSlider";
import cn from "classnames";

export const SliderAreaOne = () => {
  const slick_settings_brands = {
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    fade: true,
    arrows: false,
    responsive: [{ breakpoint: 767, settings: { dots: false, arrows: false } }],
  };

  return (
    <section className="slider-area">
      <div className="slider-active">
        <SlickSlider settings={slick_settings_brands}>
          {["one", "two"].map((item) => (
            <div key={item} className={cn("single-slider slider-bg ", item)}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="slider-content">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".2s"
                      >
                        We Deliver Exceptional Results.
                      </span>
                      <h2
                        className="title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Get Top-Notch I.T Solutions
                      </h2>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        At SlantApp, there is no limit to the use of technology; <br/>
                        We explore, maximise and deploy.
                      </p>
                      <Link
                        to="/services"
                        className="btn"
                        data-animation="fadeInUp"
                        data-delay=".8s"
                      >
                        Our Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-shape">
                <img
                  src={BANNER_SHAPE}
                  alt=""
                  data-animation="zoomIn"
                  data-delay=".8s"
                />
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>
    </section>
  );
};
