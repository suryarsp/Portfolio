import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import ServiceDetailSection from '@/component/service/ServiceDetailSection'
import { serviceData } from '@/data/Data'
import React from 'react'
import type { Metadata } from 'next'
import { ServiceDetail } from '@/models'

import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const service = serviceData.find((item) => item.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'This service could not be found.',
    };
  }

  return {
    title: `${service.title} | Services`,
    description: service.desc.substring(0, 160),
    openGraph: {
      title: `${service.title} | Services`,
      description: service.desc.substring(0, 160),
    },
    twitter: {
      title: `${service.title} | Services`,
      description: service.desc.substring(0, 160),
    },
  };
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