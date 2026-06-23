import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import ContactSection from '@/component/contact/ContactSection'
import PricingSection from '@/component/pricing/PricingSection'
import ServiceSection from '@/component/service/ServiceSection'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Surya Prakash Portfolio',
  description: 'Discover the web development services I offer, from custom website design to performance optimization and more.',
  openGraph: {
    title: 'Services | Surya Prakash Portfolio',
    description: 'Discover the web development services I offer, from custom website design to performance optimization and more.',
  },
  twitter: {
    title: 'Services | Surya Prakash Portfolio',
    description: 'Discover the web development services I offer, from custom website design to performance optimization and more.',
  }
}
const Page = () => {
  return (
    <main>
        <BreadcrumbSection currentPage='Service' />
        <ServiceSection
        style='nk-inner-services'
        showHeader={false}
        listStyle='nk-inner-service'
        />
        {/* <PricingSection /> */}
        <ContactSection style='nk-inner-contact'/>
    </main>
  )
}

export default Page