import React from 'react'
import ServiceSidebar from './ServiceSidebar'
import ServiceDetails from './ServiceDetails'
import { ServiceDetail } from '@/models'
interface Props {
  serviceInfo: ServiceDetail
}
const ServiceDetailSection = ({ serviceInfo }: Props) => {
  const { bestPractices, description, imgSrc, slug, title } = serviceInfo;
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