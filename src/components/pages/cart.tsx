import CartLayout from "../layouts/cartLayout"
import CartItem from "../molecules/carts/cartItem"
const cart = () => {
  return (
    <div className="mainCartContianer">
        <CartLayout>
        <CartItem/>
        </CartLayout>
    </div>
  )
}

export default cart