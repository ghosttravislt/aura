import "./ProdDetail.css"
import Title from "../../atoms/texts/title/Title"
import ButtonIcon from "../../atoms/buttons/button-icon/ButtonIcon"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addCart } from "../../../hook/usecart"


interface Productdetail{
  id:string
  title:string
  price:number
  image:string
}


const ProdDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Productdetail | null >(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        // setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading product...</p>;
  }


  return (
    <section className="mainproductDetailContainer container">
      <div className="productDetailContainer">
          <img className="detailImage" src={product.image}alt="hi" />
          <div className="detail">
            <Title text={product.title}/>
            <p className="price">$ {product.price}</p>
            <ButtonIcon text="Add to Cart" icon="fa-circle-plus" btnwidth="100%" bgcolor="#000" btncolor="#fff" onClick={()=>{
                  addCart({
                        id:product.id,
                        title:product.title,
                        price: product.price,
                        image: product.image || ""
                      })
                }}/>
          </div>
        </div>  
    </section>
  )
}

export default ProdDetail
