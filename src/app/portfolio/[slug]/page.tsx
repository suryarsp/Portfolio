import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import { portfolioData } from '@/data/Data'
import React from 'react'
import type { Metadata } from 'next'
import PortfolioDetailSection from '@/component/portfolio/PortfolioDetailSection'
import ContactSection from '@/component/contact/ContactSection'

import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const portfolio = portfolioData.find((item) => item.slug === params.slug);

  if (!portfolio) {
    return {
      title: 'Portfolio Item Not Found',
      description: 'This portfolio item could not be found.',
    };
  }

  return {
    title: `${portfolio.title} | Portfolio`,
    description: portfolio.desc.substring(0, 160),
    openGraph: {
      title: `${portfolio.title} | Portfolio`,
      description: portfolio.desc.substring(0, 160),
      images: [
        {
          url: portfolio.img,
          width: 800,
          height: 600,
          alt: portfolio.title,
        },
      ],
    },
    twitter: {
      title: `${portfolio.title} | Portfolio`,
      description: portfolio.desc.substring(0, 160),
      images: [portfolio.img],
    },
  };
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