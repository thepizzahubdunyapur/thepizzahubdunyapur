/**
 * CENTRAL CONFIGURATION — The Pizza Hub Dunyapur
 * ------------------------------------------------
 * Every editable business detail lives in this one file: contact numbers,
 * address, opening hours, social links, menu items, prices and deals.
 * Update values here and the whole website updates — no need to touch any
 * component or page.
 *
 * ⚠️ PLACEHOLDER VALUES — REPLACE BEFORE GOING LIVE
 * Fields marked "PLACEHOLDER" below use sample data (sequential/demo phone
 * numbers, illustrative prices, unlinked social profiles). Swap them for the
 * restaurant's real details before publishing.
 */

export const business = {
  name: 'The Pizza Hub Dunyapur',
  shortName: 'The Pizza Hub',
  slogan: 'Food For Life!',
  tagline: 'Good Food. Good Times.',
  type: 'Fast Food Restaurant',
  description:
    'A modern fast-food restaurant in Dunyapur serving fresh, flavour-packed pizza, burgers, broast and more — made with quality ingredients, served fast, and best enjoyed with family.',
  city: 'Dunyapur',
  region: 'Punjab',
  country: 'Pakistan',
  address: 'Dunyapur, Punjab, Pakistan', // PLACEHOLDER — add the exact street address for precise directions.
  founded: '2021',
}

export const contact = {
  // PLACEHOLDER — replace with the restaurant's real phone number.
  phoneDisplay: '0301-2345678',
  phoneHref: 'tel:+923012345678',
  // PLACEHOLDER — replace with the real WhatsApp number (international format, no + or spaces, used to build wa.me links).
  whatsappNumber: '923012345678',
  // PLACEHOLDER — replace with the verified business email.
  email: 'info@pizzahubdunyapur.com',
}

export const hours = [
  { day: 'Monday – Thursday', time: '12:00 PM – 12:00 AM' },
  { day: 'Friday', time: '2:00 PM – 1:00 AM' },
  { day: 'Saturday – Sunday', time: '12:00 PM – 1:00 AM' },
  // PLACEHOLDER — confirm and update actual opening hours.
]

export const social = {
  // PLACEHOLDER — set to '' to hide a network, or add the real profile URL.
  facebook: '',
  instagram: '',
  tiktok: '',
}

export const mapsQuery = `${business.name}, ${business.address}`
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export interface MenuCategory {
  id: string
  label: string
  image: string
  items: Array<MenuItem>
}

// PLACEHOLDER — all prices below are illustrative sample prices (PKR).
// Update names, descriptions and prices to match the real menu — this is
// the one place that needs editing to update the whole site's menu.
export const menu: Array<MenuCategory> = [
  {
    id: 'pizza',
    label: 'Pizza',
    image: '/img/menu-pizza.png',
    items: [
      {
        id: 'pizza-pepperoni',
        name: 'Pepperoni Feast Pizza',
        description: 'Loaded with double pepperoni and a generous layer of melted mozzarella on our signature hand-tossed base.',
        price: 1099,
        image: '/img/menu-pizza.png',
      },
      {
        id: 'pizza-chicken-tikka',
        name: 'Chicken Tikka Pizza',
        description: 'Spiced chicken tikka chunks, onions and bell peppers with a tangy tikka drizzle.',
        price: 1149,
        image: '/img/menu-pizza.png',
      },
      {
        id: 'pizza-supreme',
        name: 'Pizza Hub Supreme',
        description: 'Chicken, beef sausage, capsicum, olives and mushrooms on a cheesy crust — a house favourite.',
        price: 1349,
        image: '/img/menu-pizza.png',
      },
      {
        id: 'pizza-veggie',
        name: 'Garden Veggie Pizza',
        description: 'Mushrooms, capsicum, onions, sweet corn and jalapeños with mozzarella cheese.',
        price: 949,
        image: '/img/menu-pizza.png',
      },
    ],
  },
  {
    id: 'burgers',
    label: 'Burgers',
    image: '/img/menu-burger.png',
    items: [
      {
        id: 'burger-zinger',
        name: 'Zinger Burger',
        description: 'Crispy fried chicken fillet, fresh lettuce and mayo in a toasted sesame bun.',
        price: 449,
        image: '/img/menu-burger.png',
      },
      {
        id: 'burger-beef-deluxe',
        name: 'Beef Deluxe Burger',
        description: 'Grilled beef patty, melted cheddar, caramelised onions and our house sauce.',
        price: 499,
        image: '/img/menu-burger.png',
      },
      {
        id: 'burger-double-cheese',
        name: 'Double Cheese Burger',
        description: 'Two juicy beef patties stacked with double cheddar cheese and pickles.',
        price: 649,
        image: '/img/menu-burger.png',
      },
    ],
  },
  {
    id: 'broast',
    label: 'Broast',
    image: '/img/menu-broast.png',
    items: [
      {
        id: 'broast-half',
        name: 'Half Broast',
        description: 'Four crispy, juicy broast pieces served with fries, coleslaw and garlic sauce.',
        price: 799,
        image: '/img/menu-broast.png',
      },
      {
        id: 'broast-full',
        name: 'Full Broast',
        description: 'Eight golden broast pieces served with fries, coleslaw, garlic sauce and a bottle of drink.',
        price: 1499,
        image: '/img/menu-broast.png',
      },
    ],
  },
  {
    id: 'fried-chicken',
    label: 'Fried Chicken',
    image: '/img/menu-fried-chicken.png',
    items: [
      {
        id: 'fried-chicken-3pc',
        name: '3-Piece Fried Chicken',
        description: 'Three pieces of our signature crispy fried chicken, marinated and fried to order.',
        price: 549,
        image: '/img/menu-fried-chicken.png',
      },
      {
        id: 'fried-chicken-6pc',
        name: '6-Piece Fried Chicken Bucket',
        description: 'A shareable bucket of six crispy fried chicken pieces with dipping sauce.',
        price: 999,
        image: '/img/menu-fried-chicken.png',
      },
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta',
    image: '/img/menu-pasta.png',
    items: [
      {
        id: 'pasta-alfredo',
        name: 'Chicken Alfredo Pasta',
        description: 'Penne pasta tossed in a rich, creamy Alfredo sauce with grilled chicken strips.',
        price: 649,
        image: '/img/menu-pasta.png',
      },
      {
        id: 'pasta-arrabiata',
        name: 'Spicy Arrabiata Pasta',
        description: 'Penne in a bold tomato-chilli sauce, finished with fresh herbs.',
        price: 599,
        image: '/img/menu-pasta.png',
      },
    ],
  },
  {
    id: 'fries-sides',
    label: 'Fries & Sides',
    image: '/img/menu-fries.png',
    items: [
      {
        id: 'fries-regular',
        name: 'Crispy French Fries',
        description: 'Golden, crispy-on-the-outside fries seasoned with our house spice mix.',
        price: 249,
        image: '/img/menu-fries.png',
      },
      {
        id: 'fries-loaded',
        name: 'Loaded Cheese Fries',
        description: 'Crispy fries topped with melted cheese sauce and a sprinkle of paprika.',
        price: 399,
        image: '/img/menu-fries.png',
      },
      {
        id: 'nuggets',
        name: 'Chicken Nuggets (6 pcs)',
        description: 'Bite-sized crispy chicken nuggets served with your choice of dip.',
        price: 349,
        image: '/img/menu-fried-chicken.png',
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    image: '/img/menu-drinks.png',
    items: [
      {
        id: 'drink-cola-reg',
        name: 'Soft Drink (Regular)',
        description: 'Ice-cold soft drink of your choice — 345ml can.',
        price: 120,
        image: '/img/menu-drinks.png',
      },
      {
        id: 'drink-cola-1.5l',
        name: 'Soft Drink (1.5 Litre)',
        description: 'Family-size 1.5 litre bottle of your favourite soft drink.',
        price: 280,
        image: '/img/menu-drinks.png',
      },
      {
        id: 'drink-mineral-water',
        name: 'Mineral Water',
        description: 'Chilled, sealed 500ml mineral water bottle.',
        price: 80,
        image: '/img/menu-drinks.png',
      },
    ],
  },
]

export interface Deal {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  badge?: string
}

// PLACEHOLDER — sample deals and prices. Edit freely from this one place.
export const deals: Array<Deal> = [
  {
    id: 'deal-pizza-lover',
    name: 'Pizza Lover Deal',
    description: 'One large Pepperoni Feast Pizza + 6-piece garlic bread + 1.5L soft drink.',
    price: 1699,
    originalPrice: 2099,
    image: '/img/menu-pizza.png',
    badge: 'Best Seller',
  },
  {
    id: 'deal-chicken-combo',
    name: 'Chicken Combo',
    description: 'Half broast + 3-piece fried chicken + fries + 2 regular soft drinks.',
    price: 1449,
    originalPrice: 1799,
    image: '/img/menu-broast.png',
  },
  {
    id: 'deal-burger-feast',
    name: 'Burger Feast',
    description: '2 Beef Deluxe Burgers + loaded cheese fries + 2 regular soft drinks.',
    price: 1199,
    originalPrice: 1499,
    image: '/img/menu-burger.png',
  },
  {
    id: 'deal-family-feast',
    name: 'Family Feast',
    description: '2 large pizzas + half broast + fries + nuggets + 1.5L soft drink — perfect for the whole family.',
    price: 3299,
    originalPrice: 4199,
    image: '/img/deals-spread.png',
    badge: 'Family Favourite',
  },
  {
    id: 'deal-pizza-drink',
    name: 'Pizza + Drink Deal',
    description: 'Any medium pizza with a chilled 1.5L soft drink at a special combined price.',
    price: 1249,
    originalPrice: 1479,
    image: '/img/deal-pizza-drink.png',
  },
  {
    id: 'deal-kabab-fish',
    name: 'Kabab Pizza & Fish Feast',
    description: 'Signature seekh kabab pizza paired with crispy fried fish fillets and a dip.',
    price: 1899,
    originalPrice: 2299,
    image: '/img/deal-kabab-pizza.png',
    badge: 'Chef’s Special',
  },
]

export interface Hall {
  id: string
  name: string
  description: string
  image: string
  capacity: string
}

export const halls: Array<Hall> = [
  {
    id: 'family-hall',
    name: 'Family Hall',
    description:
      'A spacious, comfortable hall designed for family dining — perfect for weekend get-togethers and casual celebrations.',
    image: '/img/hall-family.png',
    capacity: 'Seats up to 40 guests',
  },
  {
    id: 'birthday-hall',
    name: 'Birthday Hall',
    description:
      'A festive, decoration-ready space for birthday parties and kids’ celebrations, with room for cake, games and fun.',
    image: '/img/hall-birthday.png',
    capacity: 'Seats up to 30 guests',
  },
  {
    id: 'meeting-hall',
    name: 'Meeting Hall',
    description:
      'A quiet, professional setting for business meetings, team lunches and corporate get-togethers.',
    image: '/img/hall-meeting.png',
    capacity: 'Seats up to 20 guests',
  },
]

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
}

export const gallery: Array<GalleryImage> = [
  { id: 'g-pizza', src: '/img/menu-pizza.png', alt: 'Freshly baked pepperoni pizza at The Pizza Hub Dunyapur', category: 'Pizza' },
  { id: 'g-burger', src: '/img/menu-burger.png', alt: 'Juicy beef burger with melted cheese', category: 'Burgers' },
  { id: 'g-broast', src: '/img/menu-broast.png', alt: 'Crispy golden broast chicken', category: 'Broast' },
  { id: 'g-interior', src: '/img/gallery-interior.png', alt: 'The Pizza Hub Dunyapur restaurant interior seating area', category: 'Interior' },
  { id: 'g-family-hall', src: '/img/hall-family.png', alt: 'Family Hall set up for a family dinner', category: 'Family Hall' },
  { id: 'g-birthday', src: '/img/hall-birthday.png', alt: 'Birthday Hall decorated for a birthday celebration', category: 'Birthday Events' },
  { id: 'g-deals', src: '/img/deals-spread.png', alt: 'A generous spread from our combo deals', category: 'Deals' },
  { id: 'g-fries', src: '/img/menu-fries.png', alt: 'Crispy golden french fries', category: 'Fries & Sides' },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Deals', href: '#deals' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Halls', href: '#halls' },
  { label: 'Contact', href: '#contact' },
]

export function formatPrice(price: number): string {
  return `Rs. ${price.toLocaleString('en-PK')}`
}

export function whatsappOrderUrl(itemName: string, price?: number): string {
  const priceText = typeof price === 'number' ? ` (${formatPrice(price)})` : ''
  const message = `Hi ${business.name}! I would like to order: ${itemName}${priceText}. Please confirm availability and delivery time.`
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function whatsappGeneralUrl(message?: string): string {
  const text = message ?? `Hi ${business.name}! I would like to place an order.`
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`
}

export function whatsappHallBookingUrl(hallName: string): string {
  const message = `Hi ${business.name}! I would like to book the ${hallName} for an event. Please share availability and details.`
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}
