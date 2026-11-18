import type { ReactNode } from "react"
import Header from "../molecules/header/Header";
interface productlayout{
    children?:ReactNode;
}

const ProductPageLayout = ({children}:productlayout) => {
  return (
    <main>
        <Header/>
        {children}
    </main>
  )
}

export default ProductPageLayout