import "./feature.css"
import Title from "../../atoms/texts/title/Title"
import ProdCard from "../../molecules/cards/productcard/ProdCard"
import { useEffect , useState } from "react"
interface product{
  id:string
  title:string
  price:string
  image:string
}
const Feature = () => {
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
    <div className="mainFeatureContianer container">
        <Title text="Featured Products"/>
        <section className="featurecardcontiner">
          {
            productData.map((products:product)=>(
              <ProdCard key={products.id} titletext={products.title} pricetext={products.price} imageSource={products.image} id={products.id}/>
            ))
          }
        </section>
    </div>
  )
}

export default Feature