import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { MenuSection } from '@/components/MenuSection'
import { DealsSection } from '@/components/DealsSection'
import { AboutSection } from '@/components/AboutSection'
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection'
import { GallerySection } from '@/components/GallerySection'
import { HallsSection } from '@/components/HallsSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { WhatsAppFloatButton } from '@/components/WhatsAppFloatButton'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <DealsSection />
        <AboutSection />
        <WhyChooseUsSection />
        <GallerySection />
        <HallsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  )
}
