import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Philosophy, Brands, Programs, WhyUs, Contact } from './components/Sections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <Philosophy />
      <Brands />
      <Programs />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
