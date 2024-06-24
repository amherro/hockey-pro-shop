import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'
import { useParams } from 'react-router-dom'

function App() {
  let urlParam = useParams()
  // console.log(urlParam)
  return (
    <CartProvider>
      <Router>
        <main className='bg-white text-zinc-900'>
          {urlParam !== ':/thankyou' && <Cart />}
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/thankyou' element={<ThankYou/>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  )
}

export default App
