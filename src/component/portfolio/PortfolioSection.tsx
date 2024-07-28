"use client";
import { portfolioData } from "@/data/Data";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";

type Props = {
  innerPage: boolean;
};

const PortfolioSection = ({ innerPage }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const imageContainersRef = useRef<Array<HTMLDivElement | null>>([]);
  // Updated filtering logic
  const filteredPortfolio = portfolioData.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const intersectionCallback: IntersectionObserverCallback = (
      entries,
      observer
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let image = entry.target.querySelector("img");
          let tl = gsap.timeline();
          tl.set(entry.target, { autoAlpha: 1 });
          tl.from(entry.target, 0.8, {
            xPercent: -100,
            ease: "power2.out",
          });

          tl.from(image, 0.8, {
            xPercent: 100,
            scale: 1.3,
            delay: -0.8,
            ease: "power2.out",
          });
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(intersectionCallback, options);

    // Filtered portfolio data based on the selected category
    const filteredImageContainers = imageContainersRef.current.filter(
      (_, index) =>
        selectedCategory === "all" ||
        filteredPortfolio[index]?.category === selectedCategory
    );

    // Observe filtered image containers
    filteredImageContainers.forEach((imageContainer) => {
      if (imageContainer) {
        observer.observe(imageContainer);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [selectedCategory, filteredPortfolio, imageContainersRef]);

  return (
    <section className="nk-portfolios nk-section-spacing">
      <div className="container">
        {!innerPage && (
          <div className="nk-section__heading">
            <h6 className="nk-section__sub-title text-animate">
              <CustomGsapHeaderAnimate>
                Complete portfolio
              </CustomGsapHeaderAnimate>
            </h6>
            <h2 className="nk-section__title text-animate">
              <CustomGsapHeaderAnimate>
                Look at my portfolio and give me your feedback
              </CustomGsapHeaderAnimate>
            </h2>
          </div>
        )}

        <div className="nk-portfolio__filter-navs">
          <button
            className={`nk-portfolio__nav ${
              selectedCategory === "all" && "active"
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            All Works
          </button>
          <button
            className={`nk-portfolio__nav ${
              selectedCategory === "branding-app" && "active"
            }`}
            onClick={() => setSelectedCategory("web-app")}
          >
            Web Apps
          </button>
          <button
            className={`nk-portfolio__nav ${
              selectedCategory === "ios-app" && "active"
            }`}
            onClick={() => setSelectedCategory("server-side")}
          >
            Web API
          </button>
          <button
            className={`nk-portfolio__nav ${
              selectedCategory === "website" && "active"
            }`}
            onClick={() => setSelectedCategory("mobile-app")}
          >
            Mobile Apps
          </button>
        </div>

        <div className="nk-portfolios-container">
          {filteredPortfolio.map((item, index) => (
            <div key={item.id} className={`nk-portfolio mix ${item.category}`}>
              <div
                className="nk-portfolio__img reveal"
                ref={(el) => (imageContainersRef.current[index] = el)}
              >
                {/* <Link href={`/portfolio/${item.slug}`}> */}
                  <img src={item.imgSrc} alt="Portfolio Image" />
                {/* </Link> */}
              </div>
              <div className="nk-portfolio__txt">
                <CustomGsapHeaderAnimate>
                  <h6 className="nk-portfolio__category text-animate">
                    {item.category}
                  </h6>
                </CustomGsapHeaderAnimate>
                <CustomGsapHeaderAnimate>
                  <h4 className="nk-portfolio__title text-animate">
                    {/* <Link href={`/portfolio/${item.slug}`}> */}
                    {item.title}
                    {/* </Link> */}
                  </h4>
                </CustomGsapHeaderAnimate>
              </div>
            </div>
          ))}
        </div>

        {!innerPage && (
          <div className="text-center">
            <Link href="/portfolio" className="nk-def-btn">
              see all portfolios{" "}
              <i className="fa-regular fa-arrow-up-right"></i>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
