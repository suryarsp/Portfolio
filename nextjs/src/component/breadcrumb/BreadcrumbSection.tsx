import Link from "next/link";
import React from "react";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
type Props = {
  currentPage: string;
};
const BreadcrumbSection = ({ currentPage }: Props) => {
  return (
    <section className="nk-inner-banner">
      <div className="container">
        <h1 className="nk-inner-banner__title nk-section__title text-animate">
          <CustomGsapHeaderAnimate>{currentPage}</CustomGsapHeaderAnimate>
        </h1>

        <ul className="nk-breadcrumb">
          <CustomGsapHeaderAnimate>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span className="divider"> / </span>
            </li>
            <li className="current">{currentPage}</li>
          </CustomGsapHeaderAnimate>
        </ul>
      </div>
    </section>
  );
};

export default BreadcrumbSection;
