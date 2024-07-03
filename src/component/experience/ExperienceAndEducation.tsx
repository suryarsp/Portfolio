import React from "react";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import { educationData, experienceData } from "@/data/Data";
import CustomGsapDescAnimate from "../utils/CustomGsapDescAnimate";

const ExperienceAndEducation = () => {
  return (
    <div className="row gy-4 nk-experiences-row">
      <div className="col-sm-6">
        <div className="nk-infos">
          <h4 className="nk-infos__title text-animate">
            <CustomGsapHeaderAnimate>My Education</CustomGsapHeaderAnimate>
          </h4>
          {educationData.map((item) => (
            <div className="nk-info nk-skill" key={item.id}>
              <CustomGsapDescAnimate className="nk-info__timespan">{item.timespan}</CustomGsapDescAnimate>
              <div className="nk-info__details">
                <CustomGsapHeaderAnimate>
                  <h5 className="nk-info__title">{item.degree}</h5>
                </CustomGsapHeaderAnimate>
                <h6 className="nk-info__sub-title">
                  <CustomGsapHeaderAnimate>
                    {item.school}
                  </CustomGsapHeaderAnimate>
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-sm-6">
        <div className="nk-infos">
          <h4 className="nk-infos__title text-animate">
            <CustomGsapHeaderAnimate>My Experiance</CustomGsapHeaderAnimate>
          </h4>

          {experienceData.map((item) => (
            <div className="nk-info nk-skill" key={item.id}>
              <CustomGsapDescAnimate className="nk-info__timespan">{item.timespan}</CustomGsapDescAnimate>
              <div className="nk-info__details">
                <CustomGsapHeaderAnimate>
                  <h5 className="nk-info__title">{item.position}</h5>
                </CustomGsapHeaderAnimate>
                <h6 className="nk-info__sub-title">
                  <CustomGsapHeaderAnimate>
                    {item.company}
                  </CustomGsapHeaderAnimate>
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceAndEducation;
