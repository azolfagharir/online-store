import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Products from './Pages/Products'
import PageNotFound from './Pages/PageNotFound'
import ShoppBox from './Pages/ShoppBox'
import ProductDatails from './Pages/ProductDatails'

function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Navigate to="/products" replace />}/>
        <Route path='/Products' element={<Products />} />
          <Route path="/Products/:id" element={<ProductDatails />}/>
        <Route path='*' element={<PageNotFound />}/>
        <Route path='/ShoppBox' element={<ShoppBox />}/>
      </Routes>
      
    </>
  )
}

export default App
