"use client";
import { faqItems } from "@/data/Data";
import React, { useState } from "react";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import CustomGsapDescAnimate from "../utils/CustomGsapDescAnimate";

const FaqSection = () => {
  const [activeItem, setActiveItem] = useState<number | null>(1);

  const toggleAccordion = (itemId: number) => {
    if (activeItem === itemId) {
      return;
    } else {
      setActiveItem(itemId);
    }
  };
  return (
    <div className="nk-service-details__faq">
      <h4 className="nk-service-details__title text-animate">
        <CustomGsapHeaderAnimate>
          Questions? You're Covered
        </CustomGsapHeaderAnimate>
      </h4>
      <div className="nk-accordion">
        {faqItems.map((item) => (
          <div
            className={`nk-single-accordion-item ${
              activeItem === item.id && "open"
            }`}
            key={item.id}
          >
            <div
              className="nk-single-accordion-item__header"
              role="button"
              onClick={() => toggleAccordion(item.id)}
            >
              <h3 className="nk-single-accordion-item__title">
                <CustomGsapHeaderAnimate>{item.title}</CustomGsapHeaderAnimate>
              </h3>
              <i className="fa-regular fa-arrow-down"></i>
            </div>

            <div className="nk-single-accordion-item__body">
              <CustomGsapDescAnimate>{item.content}</CustomGsapDescAnimate>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
