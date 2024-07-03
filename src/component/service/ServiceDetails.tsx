import React from "react";
import FaqSection from "../faq/FaqSection";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import CustomGsapDescAnimate from "../utils/CustomGsapDescAnimate";
type Props = {
  img: string;
  title: string;
  description: string[]
  bestPractices: string[];
};
const ServiceDetails = ({ img, title, description, bestPractices }: Props) => {
  return (
    <div className="col-lg-8 order-0 order-lg-1">
      <div className="nk-service-details-txt">
        <div className="nk-service-details__cover-img">
          <div className="nk-service-details-img-container">
            <img src={img} alt="cover image" />
          </div>
        </div>
        <h4 className="nk-service-details__title text-animate">
          <CustomGsapHeaderAnimate>{title}</CustomGsapHeaderAnimate>
        </h4>
        {
          description.map(desc => (
            <CustomGsapDescAnimate className="nk-service-details__descr">
              {desc}
            </CustomGsapDescAnimate>
          ))
        }


        <h4 className="nk-service-details__title text-animate">
          <CustomGsapHeaderAnimate>
            Services that are offered:
          </CustomGsapHeaderAnimate>
        </h4>
        {
          bestPractices.map(desc => (
            <li>
            <CustomGsapDescAnimate className="nk-service-details__descr">
              {desc}
            </CustomGsapDescAnimate>
            </li>
          ))
        }

        <div className="nk-service-details__inner-img">
          <div className="nk-service-details-img-container">
            <img
              src="/assets/img/service-details-inner-img.jpg"
              alt="inner image"
            />
          </div>
        </div>
      </div>

      <FaqSection />
    </div>
  );
};

export default ServiceDetails;
