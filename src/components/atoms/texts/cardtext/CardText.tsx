import "./cardtext.css"

interface textprops{
    text:string
    textcolor?:string
    size?:string 
    fontweight?:number
    width?:string
    mt?:string
    ml?:string
    lh?:string
}
const CardText = ({textcolor = "#000", size = "1rem" ,fontweight = 200,text,width = "20ch",mt = "0px",ml="0px", lh = "20px"}:textprops) => {
  return (
    <p className="cardtext" style={{color:`${textcolor}`,fontSize:`${size}`,fontWeight:`${fontweight}`,width:`${width}`,marginTop:`${mt}`,marginLeft:`${ml}`,lineHeight:`${lh}`}}>
      {text}
    </p>
  )
}

export default CardText
