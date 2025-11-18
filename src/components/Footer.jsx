export default function Footer() {
  return (
    <footer className="bg-slate-950 text-emerald-100 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} The Yard Kitchen Group — Healthy, fresh, and school‑friendly.</p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <span className="opacity-40">•</span>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
