import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[70vh] grid md:grid-cols-12 items-center">
            <div className="md:col-span-7 lg:col-span-6 py-16">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-3 py-1 rounded-full text-emerald-200 text-xs font-semibold mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Fresh • School‑friendly • Since 2010
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Healthy Nutrition. Fresh Ingredients. Trusted by Schools Since 2010.
              </h1>
              <p className="mt-4 text-lg text-emerald-100 max-w-xl">
                The Yard Kitchen Group brings you vibrant salads, wholesome bagels, and cold‑pressed juices crafted for students and school communities.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="bg-emerald-400 text-emerald-950 font-bold px-5 py-3 rounded-full shadow hover:shadow-md hover:bg-emerald-300 transition">Partner with TYK</a>
                <a href="#programs" className="bg-white/10 text-white font-semibold px-5 py-3 rounded-full border border-white/20 hover:bg-white/20 transition">See Special Programs</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 text-emerald-100 bg-white/10 border border-white/10 px-3 py-1 rounded-full text-sm">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span> 100% fresh
                </span>
                <span className="inline-flex items-center gap-2 text-emerald-100 bg-white/10 border border-white/10 px-3 py-1 rounded-full text-sm">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span> No preservatives
                </span>
                <span className="inline-flex items-center gap-2 text-emerald-100 bg-white/10 border border-white/10 px-3 py-1 rounded-full text-sm">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span> School‑friendly packaging
                </span>
              </div>
            </div>
            <div className="hidden md:block md:col-span-5 lg:col-span-6" />
          </div>
        </div>
      </div>
    </section>
  )
}
