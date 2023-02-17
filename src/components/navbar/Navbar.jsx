import NavbarStyle from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={NavbarStyle.navDiv}>
        <a href="">Home</a>
        <a href="">Standings</a>
        <a href="">Video</a>
        <a href="">Fixture</a>
        <a href="">Statistics</a>
      
    </nav>
  )
}

export default Navbar
