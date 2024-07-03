import React from "react";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import { pricingData } from "@/data/Data";

const PricingSection = () => {
  return (
    <section className="nk-pricing nk-section-spacing">
      <div className="container">
        <div className="nk-section__heading">
          <h6 className="nk-section__sub-title text-animate">
            <CustomGsapHeaderAnimate>
              Choose Your Personal Plan
            </CustomGsapHeaderAnimate>
          </h6>
          <h2 className="nk-section__title text-animate">
            <CustomGsapHeaderAnimate>
              The best pricing plans to get your best
            </CustomGsapHeaderAnimate>
          </h2>
        </div>

        <div className="row justify-content-center gx-0 gy-4">
          {pricingData.map((data, index) => (
            <div key={index} className="col-lg-4 col-sm-6 col-8 col-xxs-12">
              <div
                className={`nk-pricing-pack ${
                  index === 0 ? "nk-pricing-pack--first" : ""
                } ${index === 1 ? " nk-pricing-pack-pop" : ""}${
                  index === 2 ? " nk-pricing-pack--last" : ""
                }`}
              >
                <div className="nk-pricing-pack__heading">
                  <div className="nk-pricing-pack__icon">
                    <img src={data.iconSrc} alt="icon" />
                  </div>
                  <h5 className="nk-pricing-pack__title text-animate">
                    <CustomGsapHeaderAnimate>
                      {data.title}
                    </CustomGsapHeaderAnimate>
                  </h5>
                  <CustomGsapHeaderAnimate>
                    <p className="nk-pricing-pack__price text-animate">
                      <span className="number">{data.price}</span>/ Per Month
                    </p>
                  </CustomGsapHeaderAnimate>
                  {data.tag && (
                    <span className="nk-pricing-pack__tag">{data.tag}</span>
                  )}
                </div>

                <ul className="nk-pricing-pack__features">
                  {data.features.map((feature, i) => (
                    <li key={i}>
                      <CustomGsapHeaderAnimate>
                        {feature}
                      </CustomGsapHeaderAnimate>
                    </li>
                  ))}
                  {data.disabledFeatures &&
                    data.disabledFeatures.map((disabledFeature, i) => (
                      <li key={i} className="disabled-feature">
                        <CustomGsapHeaderAnimate>
                          {disabledFeature}
                        </CustomGsapHeaderAnimate>
                      </li>
                    ))}
                </ul>

                <a href="#contact" className="nk-def-btn">
                  {data.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
