import "./buttonicon.css"
interface buttonWithIconProps{
    icon:string
    text:string
    bgcolor?:string
    btnwidth?:string
    btncolor?:string
    onClick?:()=>void;
}
const ButtonIcon = ({icon,text,bgcolor = "#fff",btnwidth,btncolor = "#000",onClick}:buttonWithIconProps) => {
  return (
    <button className="buttonWithIconsStyles" style={{background:`${bgcolor}`,width:`${btnwidth}`,color:`${btncolor}`}} onClick={onClick} >
        {text}    
        <i className={`fa-solid ${icon}`}></i>
    </button>
  )
}

export default ButtonIcon