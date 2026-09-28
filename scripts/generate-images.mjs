// One-off asset generation script for The Pizza Hub Dunyapur website.
// Run with: node scripts/generate-images.mjs
// Uses Netlify AI Gateway (Gemini image model) — no API key needed when run
// through the Netlify build/dev environment where AI Gateway env vars are injected.
import { GoogleGenAI } from '@google/genai'
import { writeFile } from 'node:fs/promises'
import path from 'node:path'

const ai = new GoogleGenAI({
  apiKey: process.env.NETLIFY_AI_GATEWAY_KEY,
  httpOptions: {
    baseUrl: process.env.NETLIFY_AI_GATEWAY_BASE_URL?.replace(/\/$/, ''),
  },
})

const MODEL = 'gemini-3.1-flash-image'
const OUT_DIR = path.resolve('public/img')

const STYLE_FOOD =
  'Photorealistic, high-end commercial fast-food photography, vibrant and appetizing, dramatic studio lighting, shallow depth of field, rich saturated colors, no text, no watermark, no logos.'

const jobs = [
  {
    file: 'logo.png',
    prompt:
      'A bold, modern flat vector logo for a fast-food restaurant brand called "The Pizza Hub Dunyapur". A stylized pizza slice icon integrated with bold condensed uppercase typography reading "THE PIZZA HUB". Color palette: golden yellow, deep red, and dark charcoal black. Clean, premium, energetic fast-food branding, sharp geometric shapes, subtle flame or steam accent. Transparent background, centered composition, no photorealism, no mockup, no other text, no slogans, crisp vector illustration style.',
  },
  {
    file: 'hero-bg.png',
    prompt: `A dramatic overhead flat-lay of a large pepperoni pizza, stacked burgers, crispy fries and cold drinks arranged on a dark slate table, moody dark background on the left side fading to shadow for text overlay, warm golden rim lighting, steam rising. ${STYLE_FOOD} Wide 16:9 cinematic composition.`,
  },
  {
    file: 'menu-pizza.png',
    prompt: `A loaded pepperoni and cheese pizza fresh out of the oven, melted bubbling cheese, overhead angle, on a dark rustic wood board, steam rising. ${STYLE_FOOD}`,
  },
  {
    file: 'menu-burger.png',
    prompt: `A tall juicy double beef burger with melted cheddar, fresh lettuce, tomato and sauce dripping down the side, on a dark slate plate, 45-degree angle shot. ${STYLE_FOOD}`,
  },
  {
    file: 'menu-broast.png',
    prompt: `Crispy golden-brown broast chicken pieces stacked on a plate with a side of dipping sauce, extreme close-up on the crispy skin texture. ${STYLE_FOOD}`,
  },
  {
    file: 'menu-fried-chicken.png',
    prompt: `A basket of crispy fried chicken pieces lined with parchment paper, golden brown crust, steam rising, rustic wooden table. ${STYLE_FOOD}`,
  },
  {
    file: 'menu-pasta.png',
    prompt: `A plate of creamy pasta twirled elegantly with a rich tomato-cream sauce, fresh basil garnish, overhead shot on a dark ceramic plate. ${STYLE_FOOD}`,
  },
  {
    file: 'menu-fries.png',
    prompt: `A generous pile of crispy golden french fries served in a red and white paper cone, close-up, dark background. ${STYLE_FOOD}`,
  },
  {
    file: 'menu-drinks.png',
    prompt: `Two chilled cola glasses filled with ice and condensation droplets, bubbles rising, dark moody background with warm highlights. ${STYLE_FOOD}`,
  },
  {
    file: 'deals-spread.png',
    prompt: `An abundant family feast spread across a dark wooden table: whole pizza, stacked burgers, fried chicken, fries and drinks, top-down angle, generous portions, festive and celebratory mood. ${STYLE_FOOD}`,
  },
  {
    file: 'deal-pizza-drink.png',
    prompt: `A fresh pizza slice being lifted with melted cheese stretching, paired beside a chilled cola glass with ice, on a red checkered tablecloth, close-up. ${STYLE_FOOD}`,
  },
  {
    file: 'deal-kabab-pizza.png',
    prompt: `A specialty pizza topped with seared seekh kabab pieces and herbs, served alongside crispy golden fried fish fillets on the same rustic wooden board, overhead angle. ${STYLE_FOOD}`,
  },
  {
    file: 'gallery-interior.png',
    prompt: `Modern fast-food restaurant interior with vibrant yellow and red booth seating, dark charcoal walls, warm pendant lighting, clean contemporary design, wide-angle photograph, no visible people.`,
  },
  {
    file: 'hall-family.png',
    prompt: `A spacious, elegant family dining hall inside a modern restaurant with large round tables, comfortable red and yellow upholstered seating, warm ambient lighting, wide-angle photograph, no visible people.`,
  },
  {
    file: 'hall-birthday.png',
    prompt: `A festive birthday party hall set up inside a restaurant with balloons in yellow and red, a decorated cake table, string lights, cheerful colorful decorations, wide-angle photograph, no visible people.`,
  },
  {
    file: 'hall-meeting.png',
    prompt: `A professional meeting hall inside a restaurant with a long conference table, modern chairs, a presentation screen on the wall, clean corporate atmosphere with warm accent lighting, wide-angle photograph, no visible people.`,
  },
]

async function generateOne(job) {
  const response = await ai.models.generateContent({
    model: MODEL,
    contents: job.prompt,
  })

  const parts = response.candidates?.[0]?.content?.parts ?? []
  const imagePart = parts.find((p) => p.inlineData)

  if (!imagePart?.inlineData?.data) {
    throw new Error(`No image data returned for ${job.file}`)
  }

  const buffer = Buffer.from(imagePart.inlineData.data, 'base64')
  await writeFile(path.join(OUT_DIR, job.file), buffer)
  console.log(`✓ ${job.file} (${(buffer.length / 1024).toFixed(0)} KB)`)
}

async function main() {
  console.log(`Generating ${jobs.length} images into ${OUT_DIR}...`)

  // Small batches to avoid tokens-per-minute rate limits.
  const BATCH_SIZE = 4
  for (let i = 0; i < jobs.length; i += BATCH_SIZE) {
    const batch = jobs.slice(i, i + BATCH_SIZE)
    await Promise.all(
      batch.map((job) =>
        generateOne(job).catch((err) => {
          console.error(`✗ ${job.file}: ${err.message}`)
        }),
      ),
    )
  }

  console.log('Done.')
}

main()
