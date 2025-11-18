import { useMemo } from 'react'
import { Salad, Sandwich, CupSoda, Star } from 'lucide-react'

const brandContent = {
  'juice-yard': {
    icon: CupSoda,
    title: 'Juice Yard',
    description: 'Cold‑pressed juices with seasonal blends, nutrient‑packed and school‑friendly packaging.',
    tags: ['Cold‑pressed', 'Seasonal', 'No preservatives'],
    items: [
      { name: 'Green Boost', desc: 'Spinach, apple, cucumber, mint', badge: '100% fresh' },
      { name: 'Sunshine Citrus', desc: 'Orange, carrot, ginger', badge: 'Vitamin C' },
      { name: 'Berry Bright', desc: 'Strawberry, blueberry, apple', badge: 'Antioxidants' },
    ],
  },
  'bagel-yard': {
    icon: Sandwich,
    title: 'Bagel Yard',
    description: 'Freshly baked bagels with whole‑grain options and protein‑rich fillings, sweet & savory.',
    tags: ['Whole‑grain', 'Protein‑rich', 'Baked fresh'],
    items: [
      { name: 'Classic Whole‑grain', desc: 'Cream cheese or labneh', badge: 'Wholesome' },
      { name: 'Chicken Protein', desc: 'Grilled chicken, lettuce, yogurt sauce', badge: 'Protein' },
      { name: 'PB & Banana', desc: 'Peanut butter, banana, honey', badge: 'Energy' },
    ],
  },
  'salad-yard': {
    icon: Salad,
    title: 'Salad Yard',
    description: 'Seasonal, vibrant salads — build your own with vegetarian & vegan options.',
    tags: ['Build‑your‑own', 'Vegetarian', 'Vegan'],
    items: [
      { name: 'Mediterranean Bowl', desc: 'Cucumber, tomato, olives, feta, quinoa', badge: 'Balanced' },
      { name: 'Rainbow Veg', desc: 'Carrot, beetroot, sweet corn, greens', badge: 'Colorful' },
      { name: 'Protein Power', desc: 'Chickpeas, lentils, roasted veg', badge: 'Plant protein' },
    ],
  },
  'catering': {
    icon: Star,
    title: 'TYK Catering',
    description: 'Full‑service school catering, events, healthy snack stations, allergen‑friendly menus.',
    tags: ['Allergen‑friendly', 'Customizable', 'Events'],
    items: [
      { name: 'Healthy Snack Station', desc: 'Fruit cups, veggie sticks, dips', badge: 'Kids love it' },
      { name: 'Balanced Lunch', desc: 'Main + sides + drink', badge: 'Complete' },
      { name: 'Event Catering', desc: 'Assemblies, sports days, fairs', badge: 'Turn‑key' },
    ],
  },
}

export default function SubBrand({ slug }) {
  const data = useMemo(() => brandContent[slug] || brandContent['juice-yard'], [slug])
  const Icon = data.icon

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
            <Icon className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{data.title}</h1>
        </div>
        <p className="mt-3 text-emerald-100 max-w-2xl">{data.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {data.tags.map((t) => (
            <span key={t} className="inline-flex items-center gap-2 text-emerald-100 bg-white/10 border border-white/10 px-3 py-1 rounded-full text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>{t}
            </span>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {data.items.map((it) => (
            <div key={it.name} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="inline-flex items-center gap-2 text-emerald-300 text-sm font-semibold">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>{it.badge}
              </div>
              <h3 className="mt-3 text-xl font-bold">{it.name}</h3>
              <p className="mt-2 text-emerald-100/90">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
