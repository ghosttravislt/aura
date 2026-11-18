import "./carticons.css"

interface iconProp {
    icon:string;
}

const Icons = ({icon}:iconProp) => {
  return (
    <div className="iconStyle">
      <i className={`fa-solid ${icon}`}></i>
    </div>
  )
}

export default Icons
