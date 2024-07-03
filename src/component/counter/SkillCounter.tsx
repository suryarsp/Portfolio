"use client";
import { skillData } from "@/data/Data";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const SkillCounter = () => {
    const [isVisible, setIsVisible] = useState(false);
  const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetElement = document.querySelector(".nk-skills");

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
    <div className="nk-skills">
      <div className="row g-xl-4 g-3 row-cols-sm-4 row-cols-2">
        {skillData.map((item) => (
          <div className="col" key={item.id}>
            <div className="nk-skill">
              <div className="nk-skill__img">
                <img src={item.img} alt="skill logo" />
              </div>

              <div className="nk-skill__txt">
                <h5 className="nk-skill__title">{item.title}</h5>
                <h6 className="nk-skill__percent">
                 {isVisible && <CountUp
                    start={1}
                    end={item.mastery}
                    duration={5}
                    formattingFn={(value) => `${value}%`}
                  />}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCounter;
