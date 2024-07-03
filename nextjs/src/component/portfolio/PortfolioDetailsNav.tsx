import { portfolioData } from "@/data/Data";
import Link from "next/link";
import React from "react";

type Props = {
  id: number;
};

const PortfolioDetailsNav = ({ id }: Props) => {
  const nextProject = portfolioData.find((item) => item.id === id + 1);
  const prevProject = portfolioData.find((item) => item.id === id - 1);
  return (
    <div className="nk-portfolio-details__bottom-nav">
      {prevProject ? (
        <Link href={`/portfolio/${prevProject?.slug}`}>
          <i className="fa-light fa-arrow-left-long"></i>previous
        </Link>
      ) : (
        <a className="disabled">
          <i className="fa-light fa-arrow-left-long"></i>previous
        </a>
      )}
      {nextProject ? (
        <Link href={`/portfolio/${nextProject?.slug}`}>
          Next<i className="fa-light fa-arrow-right-long"></i>
        </Link>
      ) : (
        <a className="disabled">
          Next<i className="fa-light fa-arrow-right-long"></i>
        </a>
      )}
    </div>
  );
};

export default PortfolioDetailsNav;
