import { Award, PartyPopper, Sparkles, Timer, Users } from 'lucide-react'
import { halls } from '@/data/config'
import { SectionHeading } from './MenuSection'

const cards = [
  {
    title: 'Fresh & Tasty',
    description: 'Every order is prepared fresh in-house — no shortcuts, no sitting around under a heat lamp.',
    icon: Sparkles,
    theme: 'dark' as const,
  },
  {
    title: 'Quality Ingredients',
    description: 'We use quality meats, fresh vegetables and trusted ingredients in every recipe we serve.',
    icon: Award,
    theme: 'yellow' as const,
  },
  {
    title: 'Family Friendly',
    description: 'A clean, comfortable space designed for families, friends and everyday celebrations.',
    icon: Users,
    theme: 'dark' as const,
  },
  {
    title: 'Fast Service',
    description: 'Friendly staff and an efficient kitchen mean your food reaches you quickly, every time.',
    icon: Timer,
    theme: 'red' as const,
  },
]

const themeStyles = {
  dark: 'bg-charcoal text-cream',
  yellow: 'bg-yellow text-charcoal',
  red: 'bg-red text-cream',
}

export function WhyChooseUsSection() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Dunyapur Chooses The Pizza Hub"
          description="Four simple promises we keep on every visit and every order."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className={`animate-fade-up group relative overflow-hidden rounded-3xl p-7 shadow-card transition-transform duration-300 hover:-translate-y-2 ${themeStyles[card.theme]} ${
                  i % 2 === 1 ? 'sm:mt-8' : ''
                }`}
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-current opacity-10 transition-transform duration-500 group-hover:scale-150" />
                <Icon size={34} className="relative" strokeWidth={1.75} />
                <h3 className="relative mt-5 font-display text-xl tracking-wide uppercase">{card.title}</h3>
                <p className="relative mt-2.5 text-sm leading-relaxed opacity-80">{card.description}</p>
              </div>
            )
          })}
        </div>

        <div className="animate-fade-up mt-10 flex flex-col items-start gap-6 rounded-3xl bg-charcoal p-8 shadow-lift sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow text-charcoal">
              <PartyPopper size={26} />
            </div>
            <div>
              <p className="font-display text-xl text-cream uppercase">More Than Just a Meal</p>
              <p className="mt-1 text-sm text-cream/70">
                Ask us about our {halls.map((h) => h.name).join(', ')} — perfect for gatherings big and small.
              </p>
            </div>
          </div>
          <a
            href="#halls"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-yellow px-6 py-3 font-display text-sm tracking-wide text-charcoal uppercase transition-transform duration-200 hover:scale-105"
          >
            Explore Our Halls
          </a>
        </div>
      </div>
    </section>
  )
}
