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
