import { blogData } from '@/data/Data'
import React from 'react'
import type { Metadata } from 'next'
import ContactSection from '@/component/contact/ContactSection'
import BlogDetailSection from '@/component/blog/BlogDetailSection'

export const metadata: Metadata = {
  title: 'Surya Blog Details',
  description: 'Developed By Surya Prakash',
}
const Page = ({ params }: { params: { slug: string } }) => {
    const blogInfo = blogData.find((item) => item.slug === params.slug)
  return (
    <main>
       {blogInfo &&( 
        <>
            <BlogDetailSection blogInfo={blogInfo}/>
            <ContactSection style=''/>
        </>
       )}
    </main>
  )
}

export default Page