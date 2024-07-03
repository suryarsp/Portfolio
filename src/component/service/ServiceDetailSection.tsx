import React from 'react'
import ServiceSidebar from './ServiceSidebar'
import ServiceDetails from './ServiceDetails'
interface Props {
  serviceInfo: {
    id: number;
    title: string;
    slug: string;
    category: string;
    imgSrc: string;
    description: string[];
    bestPractices: string[];
  }
}
const ServiceDetailSection = ({ serviceInfo }: Props) => {
  const { bestPractices, category, description, id, imgSrc, slug, title } = serviceInfo;
  return (
    <div className="nk-section-spacing">
      <div className="container">
        <div className="nk-service-details-container row justify-content-center gy-5">
          <ServiceSidebar slug={slug} />
          <ServiceDetails
            img={imgSrc}
            title={title}
            bestPractices={bestPractices}
            description={description}
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceDetailSection