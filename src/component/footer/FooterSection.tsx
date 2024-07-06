"use client";
import React, { useRef } from "react";

const FooterSection = () => {
  const backToTopButtonRef = useRef<HTMLButtonElement>(null);

  const handleBackToTopClick = () => {
    if (backToTopButtonRef.current) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }
  };
  return (
    <footer className="nk-footer">
      <div className="container">
        <div className="row gx-0 gy-3 align-items-center">
          <div className="col-lg-6">
            <p className="nk-footer__copyright-txt mb-0">
              Copyright &copy; {new Date().getFullYear()} Surya. All rights reserved.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="nk-footer__right">
              <div className="nk-footer__nav">
                <a href="#">Terms & Condition</a>
                <a href="#">Privacy Policy</a>
              </div>

              <button
                className="nk-back-to-top"
                ref={backToTopButtonRef}
                onClick={handleBackToTopClick}
              >
                <i className="fa-arrow-up fa-solid"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
