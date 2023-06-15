import '../../styles/styles.css'
import { Inter } from 'next/font/google'
import Header from "@/app/header";
import Navigator from "@/app/components/navigator/Navigator";
import Contents from "@/app/components/contents";
import Ads from "@/app/components/ads/Ads";
import Footer from "@/app/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Physio Hub',
  description: 'Physio Hub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        {/*<meta property="og:image" content="/images/opengraph.png" />*/}
        <meta property="og:title" content="커뮤니트 사이트 샘플" />
        <meta property="og:description" content="프로토타입 사이트" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7943148960429460" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <Header />
        <Navigator />
        <Ads />
        {/* eslint-disable-next-line react/no-children-prop */}
        <Contents children={children} />
        <Footer />
      </body>
    </html>
  )
}
