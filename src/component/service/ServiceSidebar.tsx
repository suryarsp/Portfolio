import { serviceData } from "@/data/Data";
import Link from "next/link";
import React from "react";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
type Props = {
  slug: string;
};
const ServiceSidebar = ({ slug }: Props) => {
  return (
    <div className="col-lg-4 order-1 order-lg-0">
      <div className="nk-service-details-sidebar">
        <div className="nk-service-details-widget overflow-hidden">
          <h4 className="nk-service-details-widget__title text-animate">
            <CustomGsapHeaderAnimate>Service List</CustomGsapHeaderAnimate>
          </h4>
          <ul className="service-list">
            {serviceData.map((item) => (
              <li key={item.id}>
                {" "}
                <Link
                  href={`/service/${item.slug}`}
                  className={slug === item.slug ? "current" : ""}
                >
                  <CustomGsapHeaderAnimate>
                    {item.title}
                  </CustomGsapHeaderAnimate>{" "}
                  <i className="fa-light fa-angle-right"></i>
                </Link>
              </li>
            ))}
          </ul>{" "}
        </div>

        {/* <div className="nk-service-details-widget">
          <div className="nk-service-details__cta bg-defaults">
            <a href="#contact" className="nk-def-btn">
              Let's Talk
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ServiceSidebar;
