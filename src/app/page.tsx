import AboutSection from '@/component/about/AboutSection'
import BannerSection from '@/component/banner/BannerSection'
import BlogSection from '@/component/blog/BlogSection'
import ContactSection from '@/component/contact/ContactSection'
import CtaSection from '@/component/cta/CtaSection'
import ExperienceSection from '@/component/experience/ExperienceSection'
import PortfolioSection from '@/component/portfolio/PortfolioSection'
import PricingSection from '@/component/pricing/PricingSection'
import ServiceSection from '@/component/service/ServiceSection'
import TestimonialSection from '@/component/testimonial/TestimonialSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Surya Prakash',
  description: 'Developed using Next JS',
}

export default function Home() {
  return (
      <main>
        <BannerSection />
        <AboutSection 
        style=''
        showHeader={true}
        />
        <ServiceSection 
        style=''
        showHeader={true}
        listStyle=''
        />
        <ExperienceSection 
        style='nk-experiences'
        showHeader={true}
        />
        {/* <PortfolioSection 
        innerPage={false}
        /> */}
        {/* <TestimonialSection /> */}
        {/* <PricingSection /> */}
        <CtaSection />
        {/* <BlogSection /> */}
        <ContactSection 
        style=''
        />
      </main>
  )
}
