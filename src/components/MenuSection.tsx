import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { formatPrice, menu, whatsappOrderUrl } from '@/data/config'
import { cdnImage } from '@/lib/image'

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menu[0].id)
  const category = menu.find((c) => c.id === activeCategory) ?? menu[0]

  return (
    <section id="menu" className="section-anchor bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Menu"
          title="A Menu Built for Big Appetites"
          description="Freshly prepared pizza, burgers, broast and more — every item made to order with quality ingredients."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {menu.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCategory(c.id)}
              className={`rounded-full border-2 px-5 py-2.5 font-display text-sm tracking-wide uppercase transition-all duration-200 sm:px-6 sm:text-base ${
                c.id === activeCategory
                  ? 'border-red bg-red text-cream shadow-lift'
                  : 'border-charcoal/15 bg-transparent text-charcoal hover:border-red/60 hover:text-red'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item, i) => (
            <article
              key={item.id}
              className="animate-fade-up group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-charcoal/5 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cdnImage(item.image, { w: 500, h: 340, fit: 'cover' })}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-3 right-3 rounded-full bg-charcoal/85 px-3 py-1 font-display text-sm text-yellow">
                  {formatPrice(item.price)}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg tracking-wide text-charcoal uppercase">{item.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/65">{item.description}</p>
                <a
                  href={whatsappOrderUrl(item.name, item.price)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-4 py-2.5 font-display text-sm tracking-wide text-cream uppercase transition-colors duration-200 hover:bg-red"
                >
                  <MessageCircle size={16} />
                  Order Now
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-charcoal/50">
          Sample menu shown for illustration — item names, descriptions and prices are easy to edit from one file
          (<code className="rounded bg-charcoal/5 px-1.5 py-0.5">src/data/config.ts</code>).
        </p>
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light,
}: {
  eyebrow: string
  title: string
  description?: string
  light?: boolean
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className={`font-display text-sm tracking-[0.3em] uppercase ${light ? 'text-yellow' : 'text-red'}`}>
        {eyebrow}
      </span>
      <h2 className={`mt-3 font-display text-4xl uppercase sm:text-5xl ${light ? 'text-cream' : 'text-charcoal'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-cream/70' : 'text-charcoal/65'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
