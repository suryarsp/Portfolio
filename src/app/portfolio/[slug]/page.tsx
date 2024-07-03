import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import { portfolioData } from '@/data/Data'
import React from 'react'
import type { Metadata } from 'next'
import PortfolioDetailSection from '@/component/portfolio/PortfolioDetailSection'
import ContactSection from '@/component/contact/ContactSection'

export const metadata: Metadata = {
  title: 'Niko Portfolio Details',
  description: 'Developed By Azizur Rahman',
}
const Page = ({ params }: { params: { slug: string } }) => {
    const portfolioInfo = portfolioData.find((item) => item.slug === params.slug)
  return (
    <main>
       {portfolioInfo &&( 
        <>
            <BreadcrumbSection currentPage={portfolioInfo?.title} />
            <PortfolioDetailSection portfolioInfo={portfolioInfo} />
            <ContactSection style=''/>
        </>
       )}
    </main>
  )
}

export default Page