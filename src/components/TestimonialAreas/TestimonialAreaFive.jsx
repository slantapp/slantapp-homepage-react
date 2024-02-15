import React from "react";
import {
  H5_TESTIMONIAL_IMG,
  H5_TESTIMONIAL_SHAPE01,
  H5_TESTIMONIAL_SHAPE02,
  H5_TESTIMONIAL_SHAPE03,
  QUOTE,
  TESTI_AVATAR01,
  TESTI_AVATAR02,
} from "../../lib/assets";
import {
  SlickSlider,
  SlickSliderArrowNext,
  SlickSliderArrowPrev,
} from "../SlickSlider/SlickSlider";
import { useParticlesTestimonialFive } from "../../lib/hooks/useParticles";

export const TestimonialAreaFive = () => {
  // particles
  useParticlesTestimonialFive();

  const slick_settings_brands = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: true,
    prevArrow: (
      <SlickSliderArrowPrev classNameWrapper="testimonial-nav-five testimonial-nav-five-prev" />
    ),
    nextArrow: (
      <SlickSliderArrowNext classNameWrapper="testimonial-nav-five testimonial-nav-five-next" />
    ),
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-area-five">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="testimonial-img-five">
              <img src={H5_TESTIMONIAL_IMG} alt="" />
              <img src={H5_TESTIMONIAL_SHAPE01} alt="" className="shape-one" />
              <img src={H5_TESTIMONIAL_SHAPE02} alt="" className="shape-two" />
              <img
                src={H5_TESTIMONIAL_SHAPE03}
                alt=""
                className="shape-three"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="testimonial-content-five">
              <div className="section-title title-three mb-50 tg-heading-subheading animation-style1">
                <span className="sub-title tg-element-title">
                  Our Testimonials
                </span>
                <h2 className="title tg-element-title">
                  What our awesome customers say
                </h2>
              </div>

              <div className="testimonial-item-wrap-five">
                <div className="testimonial-active-five">
                  <SlickSlider settings={slick_settings_brands}>
                    <div className="testimonial-item">
                      <div className="testimonial-content">
                        <div className="content-top">
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="testimonial-quote">
                            <img src={QUOTE} alt="" />
                          </div>
                        </div>
                        <p>
                          “ From conceptualization to execution, Slant App has consistently delivered top-notch solutions tailored to our specific needs. Their team's professionalism, attention to detail, and dedication to excellence have earned our trust and respect.
                        </p>
                        <div className="testimonial-avatar">
                          <div className="avatar-thumb">
                            <img src={TESTI_AVATAR01} alt="" />
                          </div>
                          <div className="avatar-info">
                            <h2 className="title">Mr. Philip Etim</h2>
                            <span>CEO, Spendify Technologies limited</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-item">
                      <div className="testimonial-content">
                        <div className="content-top">
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <div className="testimonial-quote">
                            <img src={QUOTE} alt="" />
                          </div>
                        </div>
                        <p>
                          “ As a company deeply entrenched in the tech industry, finding a reliable partner for software development and IT consulting is crucial. Thankfully, we stumbled upon Slant App, and it's been a game-changer for our business. Their expertise in both software development and IT consulting has been invaluable
                        </p>
                        <div className="testimonial-avatar">
                          <div className="avatar-thumb">
                            <img src={TESTI_AVATAR02} alt="" />
                          </div>
                          <div className="avatar-info">
                            <h2 className="title">Mr. Aransiola Ayodele</h2>
                            <span>CEO, Leom Technologies ltd</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SlickSlider>
                </div>

                {/* <div className="testimonial-nav-five"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
