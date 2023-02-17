
import FooterStyle from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={FooterStyle.footerDiv}>
      <p>Copyright by Burak {new Date().getFullYear()}</p>

    </div>
  )
}

export default Footer