"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "../utils/NavLink";

const NavigationMenu = () => {
  const [tabMode, setTabMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTabMode(window.innerWidth < 992);
    }
  }, []);
  return (
    <div className="nk-header__nav">
      <ul>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <a role="button">Service</a>
          <ul className="sub-menu">
            <li>
              <NavLink href="/service">Services</NavLink>
            </li>
            <li>
              <NavLink href="/service/front-end">
                Service Details
              </NavLink>
            </li>
          </ul>
        </li>
        {/* <li>
          <a role="button">Portfolio</a>
          <ul className="sub-menu">
            <li>
              <NavLink href="/portfolio">portfolios</NavLink>
            </li>
            <li>
              <NavLink href="/portfolio/ios-app-development">
                portfolios Details
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <a role="button">Blog</a>
          <ul className="sub-menu">
            <li>
              <NavLink href="/blog">Blogs</NavLink>
            </li>
            <li>
              <NavLink href="/blog/how-to-make-a-website-using-wordpress">
                Blog Details
              </NavLink>
            </li>
          </ul>
        </li> */}
        {tabMode && (
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavigationMenu;
