import "./navtext.css"
interface navtextprops{
    text:string;
}

const NavText = ({text}:navtextprops) => {
  return (
    <p className="navtext">
        {text}
    </p>
  )
}

export default NavText