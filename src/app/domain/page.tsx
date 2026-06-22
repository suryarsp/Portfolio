import ContactSection from '@/component/contact/ContactSection'
import PortfolioSection from '@/component/portfolio/PortfolioSection'
import React from 'react'
import type { Metadata } from 'next'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'

export const metadata: Metadata = {
  title: 'Domain Expertise | Surya Prakash',
  description: 'Industries and verticals I\'ve delivered in',
}

const Page = () => {
  return (
    <main>
      <BreadcrumbSection currentPage='Domains' />
      <PortfolioSection innerPage={true} />
      <ContactSection style='' />
    </main>
  )
}

export default Page
