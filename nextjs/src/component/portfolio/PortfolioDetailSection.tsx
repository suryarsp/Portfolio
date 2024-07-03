import React from "react";
import PortfolioDetailsInnerImage from "./PortfolioDetailsInnerImage";
import PortfolioDetailsNav from "./PortfolioDetailsNav";
import PortfolioDetailsImgContainer from "./PortfolioDetailsImgContainer";
import CustomGsapDescAnimate from "../utils/CustomGsapDescAnimate";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
interface Props {
  portfolioInfo: {
    id: number;
    category: string;
    mainSrc: string;
    title: string;
    slug: string;
  };
}
const PortfolioDetailSection = ({ portfolioInfo }: Props) => {
  return (
    <section className="nk-portfolio-details nk-section-spacing">
      <div className="container">
        <PortfolioDetailsImgContainer
          category={portfolioInfo.category}
          imgSrc={portfolioInfo.mainSrc}
        />

        <CustomGsapDescAnimate className="nk-service-details__descr">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable.{" "}
        </CustomGsapDescAnimate>

        <CustomGsapDescAnimate className="nk-service-details__descr">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam,
        </CustomGsapDescAnimate>

        <h4 className="nk-service-details__title text-animate">
          <CustomGsapHeaderAnimate>
            Professional translation scaled by experts
          </CustomGsapHeaderAnimate>
        </h4>

        <CustomGsapDescAnimate className="nk-service-details__descr">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </CustomGsapDescAnimate>

        <PortfolioDetailsInnerImage />

        <PortfolioDetailsNav id={portfolioInfo.id} />
      </div>
    </section>
  );
};

export default PortfolioDetailSection;
