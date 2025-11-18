import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-white/0 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[70vh] grid md:grid-cols-12 items-center">
            <div className="md:col-span-7 lg:col-span-6 py-16">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-black/10 px-3 py-1 rounded-full text-slate-800 text-xs font-semibold mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-[#6CBF59] animate-pulse"></span>
                Fresh • School‑friendly • Since 2010
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                Healthy Nutrition. Fresh Ingredients. Trusted by Schools Since 2010.
              </h1>
              <p className="mt-4 text-lg text-slate-700 max-w-xl">
                The Yard Kitchen Group brings you vibrant salads, wholesome bagels, and cold‑pressed juices crafted for students and school communities.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="bg-[#6CBF59] text-white font-bold px-5 py-3 rounded-full shadow hover:shadow-md hover:bg-[#58A947] transition">Partner with TYK</a>
                <a href="#programs" className="bg-[#5AC8FA] text-white font-semibold px-5 py-3 rounded-full hover:bg-[#35B9F7] transition">See Special Programs</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 text-slate-700 bg-white/80 border border-black/5 px-3 py-1 rounded-full text-sm">
                  <span className="w-2 h-2 bg-[#6CBF59] rounded-full"></span> 100% fresh
                </span>
                <span className="inline-flex items-center gap-2 text-slate-700 bg-white/80 border border-black/5 px-3 py-1 rounded-full text-sm">
                  <span className="w-2 h-2 bg-[#FFA94D] rounded-full"></span> No preservatives
                </span>
                <span className="inline-flex items-center gap-2 text-slate-700 bg-white/80 border border-black/5 px-3 py-1 rounded-full text-sm">
                  <span className="w-2 h-2 bg-[#FF5A5F] rounded-full"></span> School‑friendly packaging
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
