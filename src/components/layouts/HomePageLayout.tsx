import type { ReactNode } from "react"
import Header from "../molecules/header/Header"
import Footer from "../molecules/footer/Footer"
interface layout{
  children:ReactNode,
}


const HomePageLayout = ({children}:layout) => {
  return (
    <main className="homepage_layout">
       <Header/>
       {children}
       <Footer/>
    </main>
  )
}

export default HomePageLayout