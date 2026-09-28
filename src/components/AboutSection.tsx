import { CheckCircle2 } from 'lucide-react'
import { business } from '@/data/config'
import { cdnImage } from '@/lib/image'

const highlights = [
  'Fresh food prepared daily with quality ingredients',
  'A warm, family-friendly dining atmosphere',
  'Bold, consistent flavour in every dish',
  'Comfortable seating for families and friends',
  'Fast, friendly service you can count on',
]

export function AboutSection() {
  return (
    <section id="about" className="section-anchor bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 hidden h-full w-full rounded-3xl border-4 border-yellow sm:block" />
            <div className="relative overflow-hidden rounded-3xl shadow-lift">
              <img
                src={cdnImage('/img/gallery-interior.png', { w: 900, h: 700, fit: 'cover' })}
                alt={`${business.name} restaurant interior with comfortable family seating`}
                loading="lazy"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />
            </div>
            <div className="animate-float-slow absolute -bottom-8 -right-4 hidden rounded-2xl bg-charcoal p-5 shadow-lift sm:block">
              <p className="font-display text-4xl text-yellow">100%</p>
              <p className="font-display text-xs tracking-wider text-cream/80 uppercase">Fresh, Made to Order</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="font-display text-sm tracking-[0.3em] text-red uppercase">About Us</span>
            <h2 className="mt-3 font-display text-4xl text-charcoal uppercase sm:text-5xl">
              Made Fresh. Served with Heart.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal/70 sm:text-lg">
              {business.name} is a modern fast-food restaurant serving the community of {business.city} with tasty
              food, quality ingredients and a genuinely welcoming atmosphere. From wood-fired pizza to juicy burgers,
              crispy broast and creamy pasta, every dish is prepared fresh to order in our kitchen — never rushed,
              never compromised.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70 sm:text-lg">
              We believe great food brings people together. That&apos;s why our dining space is designed for
              families, friends and celebrations alike — comfortable, clean and full of energy, with fast service
              that respects your time.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-charcoal/80 sm:text-base">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-red" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
