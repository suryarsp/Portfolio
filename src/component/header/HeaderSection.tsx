"use client";
import React, { useEffect, useState, useRef } from "react";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import NavigationMenu from "../navigation/NavigationMenu";
import ThemeToggler from "../utils/ThemeToggler";

const HeaderSection: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null); // Create a ref for the header container
  const isThemeDark = useAppSelector((state) => state.themeToggle.isThemeDark);
  const logo = isThemeDark
    ? "/assets/img/logo-light.png"
    : "/assets/img/logo.png";

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleOpenMenu = () => {
    setOpenMenu(true);
  };

  const toggleCloseMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click is outside the header container
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        toggleCloseMenu();
      }
    };

    // Attach the event listener to the document for outside click handling
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      // Remove the event listener when the component is unmounted
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [headerRef]);

  return (
    <header
      ref={headerRef} // Set the ref for the header container
      className={`nk-header to-be-fixed ${isHeaderFixed ? "fixed" : ""}`}
    >
      <div className="container">
        <div className="nk-header__row align-items-center">
          <div className="nk-header__logo-container">
            <Link href="/">
              <img src={logo} alt="logo" className="logo omg-thumbnail" />
            </Link>
          </div>

          <div className={`nk-header-offcanvas ${openMenu ? "active" : ""}`}>
            <div className="nk-header-offcanvas__heading d-flex d-lg-none">
              <Link href="/">
                <img src={logo} alt="logo" className="logo" />
              </Link>
              <button
                className="nk-def-btn nk-mobile-menu close"
                onClick={toggleCloseMenu}
              >
                <i className="fa-regular fa-xmark p-0"></i>
              </button>
            </div>

            <NavigationMenu />
          </div>

          <div className="nk-header__btns">
            <Link
              href="/contact"
              className="nk-def-btn d-none d-lg-inline-block"
            >
              contact me
            </Link>
            <ThemeToggler />
            <button
              className="nk-def-btn nk-mobile-menu open d-inline-block d-lg-none"
              onClick={toggleOpenMenu}
            >
              <i className="fa-regular fa-bars p-0"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
