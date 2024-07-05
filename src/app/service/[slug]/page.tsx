import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import ServiceDetailSection from '@/component/service/ServiceDetailSection'
import { serviceData } from '@/data/Data'
import React from 'react'
import type { Metadata } from 'next'
import { ServiceDetail } from '@/models'

export const metadata: Metadata = {
  title: 'Niko Service Details',
  description: 'Developed By Azizur Rahman',
}
const Page = ({ params }: { params: { slug: string } }) => {
    const serviceInfo = serviceData.find((item) => item.slug === params.slug)
  return (
    <main>
        <BreadcrumbSection currentPage='Service Details' />
        {serviceInfo && <ServiceDetailSection serviceInfo={serviceInfo}/>}
    </main>
  )
}

export default Page