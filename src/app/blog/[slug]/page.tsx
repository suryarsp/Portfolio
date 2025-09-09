import { blogData } from '@/data/Data'
import React from 'react'
import type { Metadata } from 'next'
import ContactSection from '@/component/contact/ContactSection'
import BlogDetailSection from '@/component/blog/BlogDetailSection'

import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = blogData.find((item) => item.slug === params.slug);

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
      description: 'This blog post could not be found.',
    };
  }

  return {
    title: `${blog.title} | Blog`,
    description: blog.desc.substring(0, 160),
    openGraph: {
      title: `${blog.title} | Blog`,
      description: blog.desc.substring(0, 160),
      images: [
        {
          url: blog.img,
          width: 800,
          height: 600,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      title: `${blog.title} | Blog`,
      description: blog.desc.substring(0, 160),
      images: [blog.img],
    },
  };
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