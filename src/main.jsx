import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import App from './App'
import Test from './Test'
import SubBrand from './pages/SubBrand'
import './index.css'

function SubBrandRoute() {
  const { slug } = useParams()
  return <SubBrand slug={slug} />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path=":slug" element={<SubBrandRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
