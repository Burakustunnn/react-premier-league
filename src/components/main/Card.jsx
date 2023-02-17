import { useState } from "react";
import MainStyle from "./Main.module.scss";
import ImgKupa from "../helper/kupa.png"

const Card = (e) => {
  const { title, img, stadyum, capacity, id, imgstadium } = e;
  const [showImg, setShowImg] = useState(true);

  return (
    <div
      key={id}
      className={MainStyle["card-div"]}
      onClick={() => setShowImg(!showImg)}
    >
      <img src={ImgKupa} alt="" className={MainStyle.kupa} />
      <h2 className={MainStyle.titles}>{title}</h2>

      {showImg && <img className={MainStyle.logo} src={img} alt="a" />}
      {!showImg && <img className={MainStyle.imglogo} src={imgstadium} alt="a" />}

      <h4 className={MainStyle.stadyum}>Stadium:{stadyum}</h4>

      <p className={MainStyle.cap}>Capacity:{capacity}</p>
    </div>
  );
};

export default Card;
