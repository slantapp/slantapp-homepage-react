import React, { useState } from "react";
import { PRICING_SHAPE } from "../../lib/assets";
import { PRICING_LIST_TWO } from "../../mocks/Pricing";
import { PricingAreaTwoItem } from "./PricingAreaTwoItem";
import { PricingTab } from "./PricingTab";

export const PricingAreaTwo = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="pricing-area-two">
      <div className="pricing-shape">
        <img
          src={PRICING_SHAPE}
          alt=""
          data-aos="fade-left"
          data-aos-delay="200"
        />
      </div>

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="section-title-two mb-50 tg-heading-subheading animation-style3">
              <span className="sub-title">Flexible Pricing Plan</span>
              <h2 className="title tg-element-title">
                We’ve offered the best <br />
                pricing for you
              </h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="section-top-content mb-30">
              <p>
                Ever find yourself staring at your computer screen a good
                consulting slogan to come to mind? Oftentimes.
              </p>
            </div>
          </div>
        </div>

        <div className="pricing-item-wrap">
          <PricingTab
            isMonthly={isMonthly}
            onToggle={() => setIsMonthly((v) => !v)}
          />

          <div className="row justify-content-center">
            {PRICING_LIST_TWO.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 col-sm-10">
                <PricingAreaTwoItem item={item} isMonthly={isMonthly} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
