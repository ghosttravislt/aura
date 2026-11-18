import "./productcard.css"
import Title from "../../../atoms/texts/title/Title"
import ButtonIcon from "../../../atoms/buttons/button-icon/ButtonIcon"
import CardText from "../../../atoms/texts/cardtext/CardText"
import { useNavigate } from "react-router-dom"
import { addCart } from "../../../../hook/usecart"


interface productProps{
    imageSource?:string
    titletext:string
    pricetext:string
    alttext?:string
    id:string
}




const ProdCard = ({id,imageSource,titletext,pricetext,alttext}:productProps) => {



  const redirect = useNavigate()
  return (
    <div className="cardContainer">
        <img className="productImage" src={imageSource} alt={alttext}  onClick={()=>{
       redirect(`/product-detail/${id}`)
    }} />
    <Title text={titletext} fontsize="1.1rem" fontweight={700} />
    <p className="price">$<CardText text={pricetext}/></p>
    <ButtonIcon text="Add to Cart" icon="fa-circle-plus" btnwidth="100%" bgcolor="#000" btncolor="#fff" onClick={()=>{
      addCart({
            id,
            title: titletext,
            price: Number(pricetext),
            image: imageSource || ""
          })
    }} />
    </div>
  )
}

export default ProdCard