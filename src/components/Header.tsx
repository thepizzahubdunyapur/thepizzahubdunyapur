import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { business, navLinks, whatsappGeneralUrl } from '@/data/config'
import { cdnImage } from '@/lib/image'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal/95 shadow-lift backdrop-blur-sm'
          : 'bg-gradient-to-b from-charcoal/90 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex shrink-0 items-center gap-2.5">
          <img
            src={cdnImage('/img/logo.png', { w: 160 })}
            alt={`${business.name} logo`}
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-display text-sm tracking-wider text-cream/90 uppercase transition-colors hover:text-yellow"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-yellow transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappGeneralUrl()}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-red px-5 py-2.5 font-display text-sm tracking-wider text-cream uppercase shadow-lift transition-transform duration-200 hover:scale-105 hover:bg-red-dark sm:flex"
          >
            Order Now
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-cream/10 bg-charcoal px-4 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 font-display text-base tracking-wide text-cream/90 uppercase transition-colors hover:bg-charcoal-2 hover:text-yellow"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={whatsappGeneralUrl()}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-red px-5 py-3.5 font-display text-base tracking-wider text-cream uppercase shadow-lift"
          >
            Order Now on WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
