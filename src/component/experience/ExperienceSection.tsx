import React from 'react'
import SkillCounter from '../counter/SkillCounter'
import ExperienceAndEducation from './ExperienceAndEducation';
type Props = {
    style : string;
    showHeader: boolean;
}
const ExperienceSection = ({style, showHeader} : Props) => {
  return (
    <section className={`${style} nk-section-spacing`}>
            <div className="container">
                {showHeader && (
                <div className="nk-section__heading">
                    <h6 className="nk-section__sub-title text-animate">Skills and Technologies</h6>
                    <h2 className="nk-section__title text-animate">I craft wonderful digital experiences for brands</h2>
                </div>
                )}

                <SkillCounter />

                <ExperienceAndEducation />
            </div>
        </section>
  )
}

export default ExperienceSection