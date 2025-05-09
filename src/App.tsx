import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import { ThemeProvider } from './components/theme-provider'
import Home from './pages/home'
import About from './pages/about'
import Product from './pages/product'
import Contact from './pages/contact'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="adapt-theme">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App 