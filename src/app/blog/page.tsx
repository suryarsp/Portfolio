import ContactSection from '@/component/contact/ContactSection'
import React from 'react'
import type { Metadata } from 'next'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import AllBlogSection from '@/component/blog/AllBlogSection'

export const metadata: Metadata = {
  title: 'Blog | Surya Prakash Portfolio',
  description: 'Read the latest articles and posts from Surya Prakash on web development, technology, and more.',
  openGraph: {
    title: 'Blog | Surya Prakash Portfolio',
    description: 'Read the latest articles and posts from Surya Prakash on web development, technology, and more.',
  },
  twitter: {
    title: 'Blog | Surya Prakash Portfolio',
    description: 'Read the latest articles and posts from Surya Prakash on web development, technology, and more.',
  }
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