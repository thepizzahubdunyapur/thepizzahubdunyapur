import { gallery } from '@/data/config'
import { cdnImage } from '@/lib/image'
import { SectionHeading } from './MenuSection'

export function GallerySection() {
  return (
    <section id="gallery" className="section-anchor bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Gallery"
          title="A Taste of The Pizza Hub"
          description="Pizza, burgers, broast, our dining halls and the moments people share here."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>div]:mb-5">
          {gallery.map((image, i) => (
            <div
              key={image.id}
              className="animate-fade-up group relative overflow-hidden rounded-2xl shadow-card"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={cdnImage(image.src, { w: 640, q: 78 })}
                alt={image.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/90 via-charcoal/0 to-charcoal/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-4 font-display text-sm tracking-wider text-yellow uppercase">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
