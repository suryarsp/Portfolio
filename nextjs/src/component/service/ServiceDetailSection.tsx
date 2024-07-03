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
    }
}
const ServiceDetailSection = ({serviceInfo} : Props) => {
  return (
      <div className="nk-section-spacing">
        <div className="container">
          <div className="nk-service-details-container row justify-content-center gy-5">
            <ServiceSidebar slug={serviceInfo.slug}/>
            <ServiceDetails img={serviceInfo.imgSrc} title={serviceInfo.title}/>
          </div>
        </div>
      </div>
  )
}

export default ServiceDetailSection