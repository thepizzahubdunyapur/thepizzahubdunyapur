import { Users2 } from 'lucide-react'
import { halls, whatsappHallBookingUrl } from '@/data/config'
import { cdnImage } from '@/lib/image'
import { SectionHeading } from './MenuSection'

export function HallsSection() {
  return (
    <section id="halls" className="section-anchor bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Family &amp; Event Halls"
          title="Space for Every Occasion"
          description="From weekend family dinners to birthday parties and business meetings — reserve the hall that fits your gathering."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {halls.map((hall, i) => (
            <article
              key={hall.id}
              className="animate-fade-up group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-charcoal/5 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lift"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cdnImage(hall.image, { w: 640, h: 420, fit: 'cover' })}
                  alt={hall.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                <span className="absolute bottom-3 left-4 font-display text-2xl text-cream uppercase">
                  {hall.name}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-red">
                  <Users2 size={16} />
                  <span className="text-xs font-medium tracking-wide uppercase">{hall.capacity}</span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65">{hall.description}</p>
                <a
                  href={whatsappHallBookingUrl(hall.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3 font-display text-sm tracking-wide text-cream uppercase transition-colors duration-200 hover:bg-red"
                >
                  Book / Contact Us
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
