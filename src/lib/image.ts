/**
 * Small helper around Netlify Image CDN so components don't repeat query
 * strings. Always request WebP/AVIF-negotiated, width-capped images instead
 * of shipping full-resolution source PNGs to the browser.
 */
export function cdnImage(
  src: string,
  opts: { w?: number; h?: number; fit?: 'contain' | 'cover' | 'fill'; q?: number } = {},
): string {
  const params = new URLSearchParams({ url: src })
  if (opts.w) params.set('w', String(opts.w))
  if (opts.h) params.set('h', String(opts.h))
  if (opts.fit) params.set('fit', opts.fit)
  params.set('q', String(opts.q ?? 80))
  return `/.netlify/images?${params.toString()}`
}
