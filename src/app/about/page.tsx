import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import React from 'react'
import type { Metadata } from 'next'
import AboutSection from '@/component/about/AboutSection'
import ExperienceSection from '@/component/experience/ExperienceSection'
import ContactSection from '@/component/contact/ContactSection'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'Developed By Surya Prakash',
}
const Page = () => {
  return (
    <main>
        <BreadcrumbSection currentPage='About' />
        <AboutSection 
        style='nk-about--inner'
        showHeader={false}
        />
        <ExperienceSection 
        style='nk-inner-experiences'
        showHeader={false}
        />
        <ContactSection style='nk-inner-contact'/>
    </main>
  )
}

export default Page