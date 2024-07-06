import ContactSection from '@/component/contact/ContactSection'
import React from 'react'
import type { Metadata } from 'next'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import AllBlogSection from '@/component/blog/AllBlogSection'

export const metadata: Metadata = {
  title: 'Surya Blog Page',
  description: 'Developed By Surya Prakash',
}
const Page = () => {
  return (
    <main>
        <BreadcrumbSection currentPage='Blog' />
        <AllBlogSection />
        <ContactSection 
        style=''
        />
    </main>
  )
}

export default Page