"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const ExperienceCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetElement = document.querySelector(".counter-box");

    if (targetElement) {
      intersectionObserverRef.current = new IntersectionObserver(
        onVisibilityChange,
        {
          threshold: 0.5,
        }
      );

      intersectionObserverRef.current.observe(targetElement);
    }

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, []);
  return (
    <div className="nk-about-highlight counter-box">
      <h3 className="number">
            {isVisible && (
              <>
            <CountUp end={6} duration={5} /> 
            <span>+</span>
            </>
            )}
      </h3>
      <h4 className="title text-animate">Years of Experiance</h4>
    </div>
  );
};

export default ExperienceCounter;
