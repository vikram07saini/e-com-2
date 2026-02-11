import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import SHOP from "@/app/Shop/page.jsx";
import MainBgWrapper from "@/components/MainBgWrapper";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://e-com-2-cyan.vercel.app/"),
  title: {
    default: "E-Commerce Store | HartCopy Site",
    template: "%s | HartCopy Site",
  },

  description:
    "Shop premium products online at best prices. Fast delivery and secure checkout.",

  keywords: [
    "online shopping",
    "ecommerce store",
    "buy products online",
    "fashion store",
  ],
  icons: {
    icon:"/logo.svg",
  },
  metadataBase: new URL("https://e-com-2-cyan.vercel.app/"),

  openGraph: {
    title: "E-Commerce Store | HartCopy Site",
    description:
      "Discover premium products with secure checkout and fast delivery.",
    url: "https://e-com-2-cyan.vercel.app/",
    siteName: "HartCopy Site",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary", 
    title: "Your Brand Name",
    description:
      "Shop premium products online at best prices.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 h-screen bg-[#F5F5F5]">
          <aside className="lg:col-span-3 overflow-y-auto bg-[#F5F5F5]">
            <Sidebar />
          </aside>

          <div className=" lg:col-span-9  lg:rounded-2xl lg:fixed lg:right-0 lg:left-97 ">
            <div className="lg:col-span-9 lg:fixed lg:right-0 lg:left-100 lg:mr-4 lg:top-4 lg:bottom-4 bg-white rounded-2xl overflow-hidden">
              <MainBgWrapper>
                <main
                  id="main-scroll"
                  className="h-full overflow-y-auto flex justify-center lg:justify-start"
                >
                  <div className="w-full max-w-5xl lg:max-w-none">
                    <SHOP />
                  </div>
                </main>
              </MainBgWrapper>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
