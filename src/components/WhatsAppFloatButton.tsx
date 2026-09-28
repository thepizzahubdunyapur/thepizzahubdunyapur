import { whatsappGeneralUrl } from '@/data/config'
import { WhatsAppIcon } from './Icons'

export function WhatsAppFloatButton() {
  return (
    <a
      href={whatsappGeneralUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-200 hover:scale-110 sm:right-7 sm:bottom-7"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
      <WhatsAppIcon className="relative h-8 w-8" />
    </a>
  )
}
