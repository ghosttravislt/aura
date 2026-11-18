import "./shop.css"
import Title from "../../atoms/texts/title/Title"
import ProdCard from "../../molecules/cards/productcard/ProdCard"
import { useEffect , useState } from "react"
interface product{
  id:string
  title:string
  price:string
  image:string
}
const Shop = () => {

    const [productData , setProductData] = useState([]) 
      
       useEffect(()=>{
         const fetchProducts = async()=>{
          const result = await fetch("https://fakestoreapi.com/products")
          const productsData = await result.json()
          setProductData(productsData)
         }
         fetchProducts()
       },[])


  return (
    <section className="shopContainer container">
        <Title text="Shop Page" fontweight={700}  fontsize="2rem"/>
        <div className="shopcards_container">
        {
            productData.map((products:product)=>(
              <ProdCard key={products.id} titletext={products.title} pricetext={products.price} imageSource={products.image} id={products.id}/>
            ))
          }    
        </div>
    </section>
  )
}

export default Shop