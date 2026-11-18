import "./hero.css"
import CardText from "../../../atoms/texts/cardtext/CardText"
import ButtonIcon from "../../../atoms/buttons/button-icon/ButtonIcon"
import {useNavigate} from "react-router-dom"

const HeroCard = () => {
   const redirect = useNavigate()
  return (
    <div className="mainheroContainer container ">
     <section className="heroSectionContianer">
         <CardText width="30ch" mt="40px" ml="30px" size="0.85rem" fontweight={100} text="We are dedicated to creating high-quality, trendy, and versatile apparel that fits your lifestyle."/>

     <div className="lowerCardSection">
         <ButtonIcon text="Shop Now" icon="fa-circle-arrow-right" bgcolor="#fff" btncolor="#000"  onClick={()=>{
          redirect("/product")
         }}/>
         <CardText text="Wear Your Confidence" fontweight={700} size="3.5rem" width="10ch" lh="80px" textcolor="#fff"/>
     </div>
     </section>
    </div>
  )
}

export default HeroCard
