import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'


function App() {
  return (
    <Router>
      <main className='bg-white text-zinc-900'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
