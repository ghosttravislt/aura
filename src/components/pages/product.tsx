import ProductPageLayout from "../layouts/ProductPageLayout"
import Shop from "../organisms/shop/Shop"
const product = () => {
  return (
    <div className="producPage_contianer">
      <ProductPageLayout>
        <Shop/>
      </ProductPageLayout>
    </div>
  )
}

export default product
