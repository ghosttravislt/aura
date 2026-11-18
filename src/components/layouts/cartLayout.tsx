import type { ReactNode } from "react"
import Header from "../molecules/header/Header";
interface cartlayout{
    children?:ReactNode;
}

const cartLayout = ({children}:cartlayout) => {
  return (
    <main>
        <Header/>
        {children}
    </main>
  )
}

export default cartLayout