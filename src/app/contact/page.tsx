import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/component/contact/ContactSection";

export const metadata: Metadata = {
  title: "Surya Contact Page",
  description: "Developed By Surya Prakash",
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
