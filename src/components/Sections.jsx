import { ShieldCheck, Truck, Sparkles, Salad, Sandwich, CupSoda, Calendar } from 'lucide-react'

export function Philosophy() {
  const items = [
    { icon: <Sparkles className="w-5 h-5" />, title: 'Purity First', desc: 'No preservatives, real ingredients, and balanced nutrition in every bite and sip.' },
    { icon: <ShieldCheck className="w-5 h-5" />, title: 'School-Focused', desc: 'Portions, packaging, and nutrition designed with students and schools in mind.' },
    { icon: <Truck className="w-5 h-5" />, title: 'Reliable Delivery', desc: 'On-time, every time — trusted by schools for over 15 years.' },
  ]
  return (
    <section className="py-20 bg-[#F9F5F0] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our Commitment to Health</h2>
            <p className="mt-4 text-slate-700">Born from Juice Yard and the legacy of El Koubasy Juices, The Yard Kitchen Group is committed to freshness, purity, and real food for growing minds.</p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {items.map((it) => (
              <div key={it.title} className="bg-white border border-black/5 rounded-2xl p-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#6CBF59]/15 text-[#6CBF59]">
                  {it.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold">{it.title}</h3>
                <p className="mt-2 text-slate-600">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Brands() {
  const cards = [
    { icon: <CupSoda className="w-6 h-6" />, title: 'Juice Yard', desc: 'Cold‑pressed juices with seasonal blends and school‑friendly packaging.' },
    { icon: <Sandwich className="w-6 h-6" />, title: 'Bagel Yard', desc: 'Freshly baked bagels, whole‑grain options, and protein‑rich fillings.' },
    { icon: <Salad className="w-6 h-6" />, title: 'Salad Yard', desc: 'Vibrant, build‑your‑own salads with vegetarian and vegan choices.' },
    { icon: <Calendar className="w-6 h-6" />, title: 'TYK Catering', desc: 'Full‑service school catering, allergen‑friendly and customizable.' },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center">Our Family of Brands</h2>
        <p className="text-slate-600 mt-3 text-center max-w-2xl mx-auto">Bright, playful, and rooted in real food. Explore our sub‑brands crafted for schools.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="group bg-[#F9F5F0] border border-black/5 rounded-2xl p-6 hover:bg-white transition">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#6CBF59]/15 text-[#6CBF59]">
                {c.icon}
              </div>
              <h3 className="mt-4 text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-slate-600">{c.desc}</p>
              <a href={`/${c.title.toLowerCase().replace(/\s+/g,'-')}`} className="mt-4 inline-block text-[#6CBF59] font-semibold">Explore →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Programs() {
  const items = [
    { title: 'Ramadan Collaboration Drinks', desc: 'Limited‑time blends crafted for the season — refreshing and mindful.' },
    { title: 'Seasonal Menus', desc: 'Rotating selections that celebrate fresh produce at its peak.' },
    { title: 'Custom School Nutrition Plans', desc: 'Tailored programs that meet school needs and student preferences.' },
  ]
  return (
    <section id="programs" className="py-20 bg-[#F9F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Special Programs</h2>
            <p className="mt-3 text-slate-700">We collaborate with schools to design engaging, healthy experiences — from seasonal drinks to full nutrition plans.</p>
          </div>
          <div className="lg:col-span-7 grid gap-4">
            {items.map((it) => (
              <div key={it.title} className="bg-white border border-black/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold">{it.title}</h3>
                <p className="mt-2 text-slate-600">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhyUs() {
  const points = [
    'Trusted by schools for 15+ years',
    'Fresh ingredients, balanced nutrition',
    'Reliable delivery and hygiene standards',
    'Allergen‑friendly options and clear labeling',
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center">Why Choose Us</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p} className="bg-[#F9F5F0] border border-black/5 rounded-2xl p-6">
              <p className="text-slate-700">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#F9F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Let’s collaborate</h2>
            <p className="mt-3 text-slate-700">Invite your school community to a healthier lifestyle. We offer customizable menus, reliable delivery, and friendly service.</p>
            <div className="mt-6 space-y-2 text-slate-700">
              <p><span className="font-semibold text-slate-900">Contact:</span> TYK Partnerships</p>
              <p><span className="font-semibold text-slate-900">Phone:</span> +20 100 000 0000</p>
              <p><span className="font-semibold text-slate-900">Email:</span> hello@tyk.group</p>
              <p><span className="font-semibold text-slate-900">Website:</span> www.tyk.group</p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <form className="bg-white border border-black/5 rounded-2xl p-6 grid gap-4">
              <input className="bg-[#F9F5F0] border border-black/5 rounded-xl px-4 py-3 placeholder:text-slate-400 text-slate-900" placeholder="Your Name" />
              <input className="bg-[#F9F5F0] border border-black/5 rounded-xl px-4 py-3 placeholder:text-slate-400 text-slate-900" placeholder="School / Organization" />
              <input className="bg-[#F9F5F0] border border-black/5 rounded-xl px-4 py-3 placeholder:text-slate-400 text-slate-900" placeholder="Email" />
              <textarea rows="4" className="bg-[#F9F5F0] border border-black/5 rounded-xl px-4 py-3 placeholder:text-slate-400 text-slate-900" placeholder="Tell us about your needs"></textarea>
              <button type="button" className="bg-[#FFA94D] text-slate-900 font-bold px-5 py-3 rounded-xl shadow hover:bg-[#FF8F1A] transition">Request a call</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
