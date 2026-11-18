import type { ReactNode } from "react"
import Header from "../molecules/header/Header";
// import Footer from "../molecules/footer/Footer"
interface productDetailLayout{
    children?:ReactNode;
}
const ProductDetailLayout = ({children}:productDetailLayout) => {
  return (
    <main>
        <Header/>
      {children}
     
    </main>
  )
}

export default ProductDetailLayout
