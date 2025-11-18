import { Link, NavLink } from 'react-router-dom'
import { Menu, Leaf, Phone } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/juice-yard', label: 'Juice Yard' },
  { to: '/bagel-yard', label: 'Bagel Yard' },
  { to: '/salad-yard', label: 'Salad Yard' },
  { to: '/catering', label: 'TYK Catering' },
  { to: '/about', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-semibold rounded-full transition-colors ${
      isActive ? 'bg-[#F9F5F0] text-slate-900' : 'text-slate-700 hover:bg-[#FFD966] hover:text-slate-900'
    }`

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/70 border border-black/5 shadow-lg rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6CBF59] via-[#FFA94D] to-[#FF5A5F] flex items-center justify-center shadow ring-1 ring-black/10">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="text-slate-900">
                <p className="text-sm leading-4 opacity-70">The Yard Kitchen Group</p>
                <p className="text-lg font-extrabold tracking-tight">TYK</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={linkClass}>
                  {item.label}
                </NavLink>
              ))}
              <a href="#contact" className="ml-2 inline-flex items-center gap-2 bg-[#FFA94D] text-slate-900 px-4 py-2 rounded-full font-bold shadow hover:shadow-md hover:bg-[#FF8F1A] transition">
                <Phone className="w-4 h-4" /> Contact
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-black/5 text-slate-900">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={linkClass}>
                    {item.label}
                  </NavLink>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 bg-[#FFA94D] text-slate-900 px-4 py-2 rounded-full font-bold shadow">
                  <Phone className="w-4 h-4" /> Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
