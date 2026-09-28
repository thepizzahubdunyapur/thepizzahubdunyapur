import { MessageCircle, Tag } from 'lucide-react'
import { deals, formatPrice, whatsappOrderUrl } from '@/data/config'
import { cdnImage } from '@/lib/image'
import { SectionHeading } from './MenuSection'

export function DealsSection() {
  return (
    <section id="deals" className="section-anchor bg-diagonal-stripes relative overflow-hidden bg-charcoal py-20 sm:py-28">
      <div className="bg-noise absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Deals &amp; Offers"
          title="Big Flavour. Bigger Savings."
          description="Combo deals designed for solo cravings, date nights and full family feasts. Prices and items are editable from one central file."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {deals.map((deal, i) => {
            const savings = deal.originalPrice ? deal.originalPrice - deal.price : 0
            return (
              <article
                key={deal.id}
                className="animate-fade-up group relative flex flex-col overflow-hidden rounded-3xl bg-charcoal-2 ring-1 ring-cream/10 transition-transform duration-300 hover:-translate-y-2 sm:flex-row"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative h-56 shrink-0 overflow-hidden sm:h-auto sm:w-48">
                  <img
                    src={cdnImage(deal.image, { w: 400, h: 400, fit: 'cover' })}
                    alt={deal.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {deal.badge && (
                    <span className="absolute top-3 left-3 rounded-full bg-yellow px-3 py-1 font-display text-xs tracking-wide text-charcoal uppercase shadow-lift">
                      {deal.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-yellow">
                    <Tag size={14} />
                    <span className="font-display text-xs tracking-widest uppercase">Combo Deal</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl text-cream uppercase">{deal.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/65">{deal.description}</p>

                  <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-3xl text-yellow">{formatPrice(deal.price)}</span>
                        {deal.originalPrice && (
                          <span className="text-sm text-cream/40 line-through">{formatPrice(deal.originalPrice)}</span>
                        )}
                      </div>
                      {savings > 0 && (
                        <span className="text-xs font-medium text-red">You save {formatPrice(savings)}</span>
                      )}
                    </div>
                    <a
                      href={whatsappOrderUrl(deal.name, deal.price)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-red px-5 py-3 font-display text-sm tracking-wide text-cream uppercase transition-colors duration-200 hover:bg-yellow hover:text-charcoal"
                    >
                      <MessageCircle size={16} />
                      Order Now
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
