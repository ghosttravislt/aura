import { useState } from "react"
import "./cartItem.css"
import Title from "../../atoms/texts/title/Title"
import ButtonIcon from "../../atoms/buttons/button-icon/ButtonIcon"
interface CartItems {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}




const CartItem = () => {
      const [carts, setCart] = useState<CartItems[]>(() => {
    const savedCart = localStorage.getItem("shoppingCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  if(carts.length === 0){
    return <div className="container" style={{textAlign:"center",marginTop:"100px"}}><h1>No product Added to Cart</h1></div>
  }

  return (
    <div className="mainCartItemContainer container">
        <section className="cartItemContianer">
          {
          carts.map((item)=>(<div className="cartItem" key={item.id}>
                <img className="cartimage" src={item.image} alt="" />
                <div className="details">
                    <Title text={item.title} fontwidth="300px"/>
                    <p className="price">$ {item.price}</p>
                    <p className="quantity">Quantity :{item.quantity}</p>
                    <ButtonIcon text="Remove" icon="fa-trash-can" btncolor="#f00" bgcolor="#000" onClick={() => {
                  const updatedCart = carts.filter(
                    (product) => product.id !== item.id
                  );
                  setCart(updatedCart);
                  localStorage.setItem(
                    "shoppingCart",
                    JSON.stringify(updatedCart)
                  );
                }} />
                </div>
            </div>))
        }
        
        </section>
    </div>
  )
}

export default CartItem