import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Available } from './components/Available'
import { Deals } from './components/Deals'
import { RecentlyViewed } from './components/RecentlyViewed'
import { Order } from './components/Orders'
import FAQ from './components/Faq'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Available />
      <Deals />
      <RecentlyViewed />
      <Order />
      <FAQ />
      <Footer />
    </main>
  )
}
