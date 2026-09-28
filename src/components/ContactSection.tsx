import type { ComponentType, ReactNode } from 'react'
import { Clock, Facebook, Instagram, MapPin, Navigation, Phone } from 'lucide-react'
import {
  business,
  contact,
  hours,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  social,
  whatsappGeneralUrl,
} from '@/data/config'
import { TikTokIcon, WhatsAppIcon } from './Icons'
import { SectionHeading } from './MenuSection'

const socialLinks = [
  { key: 'facebook', href: social.facebook, label: 'Facebook', Icon: Facebook },
  { key: 'instagram', href: social.instagram, label: 'Instagram', Icon: Instagram },
  { key: 'tiktok', href: social.tiktok, label: 'TikTok', Icon: TikTokIcon },
].filter((s) => s.href)

export function ContactSection() {
  return (
    <section id="contact" className="section-anchor bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Contact"
          title="Visit Us or Order In"
          description="We're in Dunyapur and ready to serve you — call, message us on WhatsApp, or drop by."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <InfoCard icon={MapPin} title="Address">
              {business.name}
              <br />
              {business.address}
            </InfoCard>

            <InfoCard icon={Phone} title="Call Us">
              <a href={contact.phoneHref} className="transition-colors hover:text-yellow">
                {contact.phoneDisplay}
              </a>
            </InfoCard>

            <InfoCard icon={WhatsAppIcon} title="WhatsApp Ordering">
              <a
                href={whatsappGeneralUrl()}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-yellow"
              >
                Message us to order
              </a>
            </InfoCard>

            <InfoCard icon={Clock} title="Opening Hours">
              <ul className="space-y-1">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 text-sm">
                    <span className="text-cream/60">{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            {socialLinks.length > 0 && (
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map(({ key, href, label, Icon }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal-2 text-cream ring-1 ring-cream/10 transition-colors duration-200 hover:bg-yellow hover:text-charcoal"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-5 lg:col-span-3">
            <div className="h-80 overflow-hidden rounded-3xl shadow-lift ring-1 ring-cream/10 sm:h-full sm:min-h-96">
              <iframe
                title={`Map location of ${business.name}`}
                src={mapsEmbedUrl}
                className="h-full w-full grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-yellow px-8 py-5 font-display text-lg tracking-wide text-charcoal uppercase shadow-lift transition-transform duration-200 hover:scale-[1.02]"
            >
              <Navigation size={22} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: ComponentType<{ size?: number; className?: string }>
  title: string
  children: ReactNode
}) {
  return (
    <div className="flex gap-4 rounded-2xl bg-charcoal-2 p-5 ring-1 ring-cream/10">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow/15 text-yellow">
        <Icon size={20} />
      </div>
      <div className="text-cream/85">
        <p className="font-display text-sm tracking-wider text-cream uppercase">{title}</p>
        <div className="mt-1 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
