import ContactSection from '@/component/contact/ContactSection'
import PortfolioSection from '@/component/portfolio/PortfolioSection'
import React from 'react'
import type { Metadata } from 'next'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'

export const metadata: Metadata = {
  title: 'My Works',
  description: 'Developed By Surya Prakash',
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