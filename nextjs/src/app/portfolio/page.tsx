import ContactSection from '@/component/contact/ContactSection'
import PortfolioSection from '@/component/portfolio/PortfolioSection'
import React from 'react'
import type { Metadata } from 'next'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'

export const metadata: Metadata = {
  title: 'Niko Portfolio Page',
  description: 'Developed By Azizur Rahman',
}
const Page = () => {
  return (
    <main>
        <BreadcrumbSection currentPage='Portfolio' />
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