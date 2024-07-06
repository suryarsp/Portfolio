"use client";
import React, { useEffect, useRef, RefObject } from "react";
import { serviceData } from "@/data/Data";
import Link from "next/link";
import gsap from "gsap";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
type Props = {
  style: string;
  showHeader: boolean;
  listStyle: string;
};
const ServiceSection = ({ style, showHeader, listStyle }: Props) => {
  const servicesRef = useRef<Array<RefObject<HTMLDivElement>>>(
    serviceData.map(() => useRef(null))
  );

  useEffect(() => {
    const handleMouseEnter = (index: number) => {
      servicesRef.current[index].current?.classList.add("active");
    };

    const handleMouseLeave = (index: number) => {
      servicesRef.current[index].current?.classList.remove("active");
    };

    const handleMouseMove = (index: number, e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const img = servicesRef.current[index].current?.querySelector(
        ".nk-service__media img"
      ) as HTMLElement | null;
      const bounds =
        servicesRef.current[index].current?.getBoundingClientRect();

      const sensitivity = 1.14;

      if (img && bounds) {
        gsap.to(img, {
          x:
            (mouseX - (bounds.left || 0) - (bounds.width || 0) / 2) *
              sensitivity +
            "px",
          y:
            (mouseY - (bounds.top || 0) - (bounds.height || 0) / 2) *
              sensitivity +
            "px",
          ease: "power1.out",
          duration: 0.3,
        });
      }
    };

    serviceData.forEach((item, index) => {
      const serviceRef = servicesRef.current[index];

      const handleMouseEnterCurried = () => handleMouseEnter(index);
      const handleMouseLeaveCurried = () => handleMouseLeave(index);
      const handleMouseMoveCurried = (e: MouseEvent) =>
        handleMouseMove(index, e);

      serviceRef.current?.addEventListener(
        "mouseenter",
        handleMouseEnterCurried
      );
      serviceRef.current?.addEventListener(
        "mouseleave",
        handleMouseLeaveCurried
      );
      serviceRef.current?.addEventListener("mousemove", handleMouseMoveCurried);

      // Cleanup event listeners when component unmounts
      return () => {
        serviceRef.current?.removeEventListener(
          "mouseenter",
          handleMouseEnterCurried
        );
        serviceRef.current?.removeEventListener(
          "mouseleave",
          handleMouseLeaveCurried
        );
        serviceRef.current?.removeEventListener(
          "mousemove",
          handleMouseMoveCurried
        );
      };
    });
  }, []);

  return (
    <section className={`nk-services ${style} nk-section-spacing`}>
      <div className="container">
        {showHeader && (
          <div className="nk-section__heading nk-section__heading--2">
            <h6 className="nk-section__sub-title text-animate">
              <CustomGsapHeaderAnimate>
                Services That I Provide
              </CustomGsapHeaderAnimate>
            </h6>
            <h2 className="nk-section__title text-animate">
              <CustomGsapHeaderAnimate>
                How I can help to build your product
              </CustomGsapHeaderAnimate>
            </h2>
          </div>
        )}

        <div className="nk-services-list">
          {serviceData.map((item, index) => (
            <div
              key={index}
              ref={servicesRef.current[index]}
              className={`nk-service ${listStyle}`}
            >
              <div className="nk-service__txt">
                {" "}
                <CustomGsapHeaderAnimate>
                  <h3 className="nk-service__title text-animate">
                    <Link href={`/service/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <h6 className="nk-service__category text-animate">
                    / {item.category}
                  </h6>
                </CustomGsapHeaderAnimate>{" "}
              </div>

              <div className="nk-service__media">
                <img src={item.imgSrc} alt="Service Image" />
                <span className="icon">
                  <i className="fa-thin fa-arrow-right"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
