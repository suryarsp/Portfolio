import React from "react";
import FaqSection from "../faq/FaqSection";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import CustomGsapDescAnimate from "../utils/CustomGsapDescAnimate";
type Props = {
  img: string;
  title: string;
};
const ServiceDetails = ({ img, title }: Props) => {
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
        <CustomGsapDescAnimate className="nk-service-details__descr">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam voluptatem. Ut
          enim ad minima veniam
        </CustomGsapDescAnimate>
        <CustomGsapDescAnimate className="nk-service-details__descr">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam voluptatem. Ut
          enim ad minima veniam
        </CustomGsapDescAnimate>

        <h4 className="nk-service-details__title text-animate">
          <CustomGsapHeaderAnimate>
            Design process based on best practices and methodologies that
            deliver
          </CustomGsapHeaderAnimate>
        </h4>
        <CustomGsapDescAnimate className="nk-service-details__descr">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the generators on the Internet tend to repeat predefined chunks as
          necessary,
        </CustomGsapDescAnimate>
        <CustomGsapDescAnimate className="nk-service-details__descr">
          Making this the first true generator on the Internet. It uses a
          dictionary of over combined with a handful of structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from injected humour, or non-characteristic
          words etc.
        </CustomGsapDescAnimate>

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
