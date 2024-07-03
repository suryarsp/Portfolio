import React from 'react'
import CustomGsapHeaderAnimate from '../utils/CustomGsapHeaderAnimate';
import CustomGsapDescAnimate from '../utils/CustomGsapDescAnimate';
import ExperienceCounter from '../counter/ExperienceCounter';
type Props = {
    style : string;
    showHeader: boolean;
}
const AboutSection = ({style, showHeader} : Props) => {
  return (
    <div className="container">
            <section className={`nk-about ${style}`} id="about">
                {showHeader && (
                <div className="nk-section__heading">
                    <h6 className="nk-section__sub-title text-animate">
                        <CustomGsapHeaderAnimate>
                            About Me
                        </CustomGsapHeaderAnimate>
                    </h6>
                    <h2 className="nk-section__title text-animate">
                        <CustomGsapHeaderAnimate>
                        Every great design begin with an even better story
                        </CustomGsapHeaderAnimate>
                    </h2>
                </div>
                )}

                <div className="nk-about-txt">
                    <div className="nk-about-txt__left">
                        <h3 className="nk-about-txt__title text-animate">
                            <CustomGsapHeaderAnimate>
                            Hello, I am Niko Jems
                            </CustomGsapHeaderAnimate>
                        </h3>
                        <CustomGsapDescAnimate className="nk-about-txt__descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias omnis aspernatur optio magni consequatur voluptate delectus illum, facere nostrum, libero alias, similique accusamus dolorem impedit quae consequuntur quasi eum odio unde doloribus quos possimus corporis. Earum, sint dolores! Nobis eum hic laborum reiciendis. Perferendis in repudiandae, iure voluptatem praesentium nihil.</CustomGsapDescAnimate>
                        <div className="nk-about-txt__actions">
                            <a href="#contact" className="nk-def-btn">Conatct Me</a>
                            <div className="nk-socials">
                                <a href="#">FB</a>
                                <a href="#">TW</a>
                                <a href="#">LI</a>
                                <a href="#">BE</a>
                            </div>
                        </div>
                    </div>

                    <div className="nk-about-txt__right">
                        <ExperienceCounter />
                    </div>
                </div>

                <div className="nk-about__infos">
                    <div className="row justify-content-center gy-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 row-cols-xxs-1">
                        <div className="col">
                            <div className="nk-about-info">
                                <h5 className="nk-about-info__title">Name :</h5>
                                <p className="nk-about-info__value">Niko Jems</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="nk-about-info">
                                <h5 className="nk-about-info__title">Email :</h5>
                                <p className="nk-about-info__value">nikojems@gmail.com</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="nk-about-info">
                                <h5 className="nk-about-info__title">Phone :</h5>
                                <p className="nk-about-info__value">(+1) 444 - 366 -210</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="nk-about-info">
                                <h5 className="nk-about-info__title">Skype :</h5>
                                <p className="nk-about-info__value">nikojems399</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="nk-about-info">
                                <h5 className="nk-about-info__title">Address :</h5>
                                <p className="nk-about-info__value">Saskatoon, SK, Canada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default AboutSection