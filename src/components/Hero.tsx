import { ArrowRight, Flame, UtensilsCrossed } from 'lucide-react'
import { business, deals, formatPrice, whatsappGeneralUrl } from '@/data/config'
import { cdnImage } from '@/lib/image'
import { PromoBanner } from './PromoBanner'

const featuredDeal = deals.find((d) => d.id === 'deal-family-feast') ?? deals[0]

export function Hero() {
  return (
    <section id="home" className="section-anchor relative overflow-hidden bg-charcoal">
      <div
        className="absolute inset-0 bg-cover bg-right sm:bg-center"
        style={{ backgroundImage: `url(${cdnImage('/img/hero-bg.png', { w: 1920, q: 82 })})` }}
        role="img"
        aria-label="Pepperoni pizza, burgers, fries and cold drinks arranged on a table at The Pizza Hub Dunyapur"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40" />
      <div className="bg-noise absolute inset-0 opacity-40" />

      <div className="relative pt-20">
        <PromoBanner />

        <div className="mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:min-h-[80vh] lg:px-8">
          <div className="max-w-2xl animate-fade-up">
            <span className="font-accent text-3xl text-yellow sm:text-4xl">{business.slogan}</span>

            <h1 className="mt-3 font-display text-5xl leading-[0.95] text-cream uppercase sm:text-6xl lg:text-7xl">
              Good Food.
              <br />
              <span className="text-yellow">Good Times.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/80 sm:text-lg">
              {business.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="group inline-flex items-center gap-2 rounded-full bg-yellow px-7 py-4 font-display text-base tracking-wide text-charcoal uppercase shadow-lift transition-transform duration-200 hover:scale-105"
              >
                <UtensilsCrossed size={20} />
                View Menu
              </a>
              <a
                href={whatsappGeneralUrl()}
                target="_blank"
                rel="noreferrer"
                className="animate-pulse-ring inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 font-display text-base tracking-wide text-cream uppercase shadow-lift transition-transform duration-200 hover:scale-105 hover:bg-red-dark"
              >
                Order Now
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Promotional deal banner */}
          <a
            href="#deals"
            className="animate-fade-up group relative mt-14 flex max-w-xl flex-col gap-4 rounded-2xl border border-yellow/25 bg-charcoal-2/90 p-5 shadow-lift backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 sm:flex-row sm:items-center"
            style={{ animationDelay: '150ms' }}
          >
            <div className="h-24 w-full shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-28">
              <img
                src={cdnImage(featuredDeal.image, { w: 280, h: 200, fit: 'cover' })}
                alt={featuredDeal.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-red">
                <Flame size={16} className="fill-red" />
                <span className="font-display text-xs tracking-widest uppercase">Deal of the week</span>
              </div>
              <p className="mt-1 font-display text-lg text-cream uppercase">{featuredDeal.name}</p>
              <p className="text-sm text-cream/70">{featuredDeal.description}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end">
              {featuredDeal.originalPrice && (
                <span className="text-sm text-cream/50 line-through">{formatPrice(featuredDeal.originalPrice)}</span>
              )}
              <span className="font-display text-2xl text-yellow">{formatPrice(featuredDeal.price)}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
