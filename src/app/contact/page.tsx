import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/component/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Me | Surya Prakash Portfolio",
  description: "Get in touch with Surya Prakash. Contact me for project inquiries, collaborations, or any other questions.",
  openGraph: {
    title: "Contact Me | Surya Prakash Portfolio",
    description: "Get in touch with Surya Prakash. Contact me for project inquiries, collaborations, or any other questions.",
  },
  twitter: {
    title: "Contact Me | Surya Prakash Portfolio",
    description: "Get in touch with Surya Prakash. Contact me for project inquiries, collaborations, or any other questions.",
  }
};
const Page = () => {
  return (
    <main>
      <BreadcrumbSection currentPage="Contact" />
      <ContactSection style="" innerPage />
    </main>
  );
};

export default Page;
