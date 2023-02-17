import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import data from './components/utils/data'


import "./components/scss/App.scss"

function App() {
  return (
    <div className="App">
      <Header/>
      <Main veri={data} />   
      <Footer/>
   
    </div>
  );
}

export default App;
