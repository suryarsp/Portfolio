import ContactSection from '@/component/contact/ContactSection'
import PortfolioSection from '@/component/portfolio/PortfolioSection'
import React from 'react'
import type { Metadata } from 'next'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'

export const metadata: Metadata = {
  title: 'My Works | Surya Prakash Portfolio',
  description: 'Explore a collection of my best projects. See my skills in action and discover the work I’m most proud of.',
  openGraph: {
    title: 'My Works | Surya Prakash Portfolio',
    description: 'Explore a collection of my best projects. See my skills in action and discover the work I’m most proud of.',
  },
  twitter: {
    title: 'My Works | Surya Prakash Portfolio',
    description: 'Explore a collection of my best projects. See my skills in action and discover the work I’m most proud of.',
  }
}
const Page = () => {
  return (
    <main>
        <BreadcrumbSection currentPage='Works' />
        <PortfolioSection 
        innerPage={true}
        />
        <ContactSection 
        style=''
        />
    </main>
  )
}

export default Page