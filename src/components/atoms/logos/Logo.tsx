import "./logo.css"
 interface logoProp {
   logoText:string;
 }

const logo = ({logoText}:logoProp) => {
  return (
    <p className="logo">
       {logoText} 
    </p>
  )
}

export default logo