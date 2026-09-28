import { deals } from '@/data/config'

const highlights = deals.slice(0, 4).map((d) => `${d.name} — starting Rs. ${d.price.toLocaleString('en-PK')}`)
const trackContent = [...highlights, ...highlights]

export function PromoBanner() {
  return (
    <div className="relative z-10 flex h-11 items-center overflow-hidden bg-yellow">
      <div className="animate-marquee flex w-max shrink-0 items-center gap-10 whitespace-nowrap pr-10">
        {trackContent.map((text, i) => (
          <span key={i} className="flex items-center gap-3 font-display text-xs tracking-wider text-charcoal uppercase sm:text-sm">
            {text}
            <span className="h-1.5 w-1.5 rounded-full bg-red" />
          </span>
        ))}
      </div>
    </div>
  )
}
