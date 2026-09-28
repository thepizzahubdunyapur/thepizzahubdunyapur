import { Facebook, Instagram, MapPin, Phone } from 'lucide-react'
import { business, contact, navLinks, social, whatsappGeneralUrl } from '@/data/config'
import { cdnImage } from '@/lib/image'
import { TikTokIcon, WhatsAppIcon } from './Icons'

const socialLinks = [
  { key: 'facebook', href: social.facebook, label: 'Facebook', Icon: Facebook },
  { key: 'instagram', href: social.instagram, label: 'Instagram', Icon: Instagram },
  { key: 'tiktok', href: social.tiktok, label: 'TikTok', Icon: TikTokIcon },
].filter((s) => s.href)

export function Footer() {
  return (
    <footer className="bg-charcoal-2 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={cdnImage('/img/logo.png', { w: 180 })} alt={`${business.name} logo`} className="h-14 w-auto" />
            <p className="font-accent mt-4 text-2xl text-yellow">{business.slogan}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">{business.description}</p>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-widest text-cream uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-cream/60 transition-colors hover:text-yellow">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-widest text-cream uppercase">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/60">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-yellow" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-yellow" />
                <a href={contact.phoneHref} className="transition-colors hover:text-yellow">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-yellow" />
                <a href={whatsappGeneralUrl()} target="_blank" rel="noreferrer" className="transition-colors hover:text-yellow">
                  Order on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-widest text-cream uppercase">Follow Us</h3>
            {socialLinks.length > 0 ? (
              <div className="mt-4 flex gap-3">
                {socialLinks.map(({ key, href, label, Icon }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-cream ring-1 ring-cream/10 transition-colors duration-200 hover:bg-yellow hover:text-charcoal"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm text-cream/40">Social links coming soon.</p>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>{business.type} · {business.city}, {business.region}</p>
        </div>
      </div>
    </footer>
  )
}
