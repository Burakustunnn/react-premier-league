import MainStyle from "./Main.module.scss";
import Card from "./Card.jsx";


const Main = ({ veri }) => {
  // const handleOnclic=(e)=>{
  //         setShowImg(!showImg);
  //         showImg
  //         ?(e.target.src={img})
  //         :(e.target.src={imgstadium}) }
  return (
    <div className={MainStyle["main-div"]}>
      
      {veri.map((e) => {
        return <Card {...e} />;
      })}
    </div>
  );
};

export default Main;
