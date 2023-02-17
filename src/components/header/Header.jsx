import Navbar from "../navbar/Navbar"
import HeaderStyle from "./Header.module.scss"


const Header = () => {
  return (
    <header className={HeaderStyle.headerDiv}>     
     <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/800px-Premier_League_Logo.svg.png" alt="" />

      <Navbar/>      
    </header>
  )
}

export default Header
