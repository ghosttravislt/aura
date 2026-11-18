import "./title.css"

interface titleProps{
    text:string
    fontweight?:number
    fontsize?:string
    fontwidth?:string
}

const Title = ({text,fontweight = 500,fontsize,fontwidth}:titleProps) => {
  return (
    <p className="titleStyles" style={{fontWeight:`${fontweight}`,fontSize:`${fontsize}`,width:`${fontwidth}`}}>
        {text}
    </p>
  )
}

export default Title