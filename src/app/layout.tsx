import { Caveat, Kanit } from "next/font/google";
import "../../public/assets/css/fontawesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/dark.css";
import CustomCursor from "@/component/utils/CustomCursor";
import HeaderSection from "@/component/header/HeaderSection";
import FooterSection from "@/component/footer/FooterSection";
import { ToastContainer } from "react-toastify";
import { Providers } from "@/redux/provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Surya Prakash | Portfolio",
    default: "Surya Prakash | Portfolio",
  },
  description: "The portfolio of Surya Prakash, a creative and dedicated web developer.",
  keywords: [
    "Surya Prakash",
    "Web Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Surya Prakash" }],
  openGraph: {
    title: "Surya Prakash | Portfolio",
    description: "The portfolio of Surya Prakash, a creative and dedicated web developer.",
    url: "https://your-domain.com",
    siteName: "Surya Prakash Portfolio",
    images: [
      {
        url: "https://your-domain.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya Prakash | Portfolio",
    description: "The portfolio of Surya Prakash, a creative and dedicated web developer.",
    creator: "@surya",
    images: ["https://your-domain.com/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--caveat",
});

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--kanit",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${caveat.variable} ${kanit.variable}`}>
          <CustomCursor />
          <HeaderSection />
          {children}
          <FooterSection />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </body>
      </html>
    </Providers>
  );
}
