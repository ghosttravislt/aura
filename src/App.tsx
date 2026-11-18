import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Product from "./components/pages/product";
import ProductDetail from "./components/pages/ProductDetail";
import Cart from "./components/pages/cart";
const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/product" element={<Product/>}/>
         <Route path="/product-detail/:id" element={<ProductDetail/>}/>
         <Route path="/cart" element={<Cart/>}/>
       </Routes>
     </BrowserRouter>
    </>

  )
}

export default App
