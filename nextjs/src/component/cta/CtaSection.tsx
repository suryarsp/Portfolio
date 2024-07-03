import React from "react";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import CustomGsapDescAnimate from "../utils/CustomGsapDescAnimate";
import SubscribeForm from "../form/SubscribeForm";

const CtaSection = () => {
  return (
    <section className="nk-cta pt-120">
      <div className="nk-cta-top">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="nk-cta-top__txt">
                <div className="nk-section__heading nk-cta__heading">
                  <h6 className="nk-section__sub-title text-animate">
                    <CustomGsapHeaderAnimate>
                      What We Do?
                    </CustomGsapHeaderAnimate>
                  </h6>
                  <h2 className="nk-section__title text-animate">
                    <CustomGsapHeaderAnimate>
                      Hi, I am experts in every aspect lifecycle
                    </CustomGsapHeaderAnimate>{" "}
                  </h2>
                </div>
                <CustomGsapDescAnimate className="nk-about-txt__descr">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' web sites still in their infancy. Various
                  versions have evolved
                </CustomGsapDescAnimate>
                <div className="nk-about-txt__actions nk-cta-top__actions">
                  <a href="#contact" className="nk-def-btn">
                    Hire Me Now
                  </a>
                  <div className="nk-cta-top__achievement">
                    <h3 className="nk-section__title">1k+</h3>
                    <h5 className="title">Reviews</h5>
                  </div>
                </div>

                <div className="hand">
                  <img src="assets/img/cta-hand.png" alt="hand icon" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="nk-cta-top__img">
                <img src="assets/img/cta-img.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nk-cta-bottom">
        <div className="container">
          <div className="row gx-0 gy-3 gy-sm-4 justify-content-between align-items-center">
            <div className="col-xl-7 col-lg-6">
              <h2 className="nk-section__title text-animate">
                <CustomGsapHeaderAnimate>
                  Subscribe newsletter
                </CustomGsapHeaderAnimate>
              </h2>
            </div>
            <div className="col-xl-5 col-lg-6">
              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
