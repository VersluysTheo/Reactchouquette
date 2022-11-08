import './App.css';
import Footer from './assets/component/Footer';
import ButtonAppBar from './assets/component/Header';
import LaCarte from './assets/component/Section';


function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <div className='cartedata'><LaCarte/></div>
      <Footer/>
    </div>
  );
}

export default App;
