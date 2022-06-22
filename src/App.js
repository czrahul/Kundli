import './App.css';
import Banner from './Component/Banner/Banner';
import Card from './Component/Card/Card';
import Header from './Component/Header/Header';
import Element2 from './Component/Element2/Element2';
import Element3 from './Component/Element3/Element3';
import Element4 from './Component/Element4/Element4';
import Element5 from './Component/Element5/Element5';
import Bottom from './Component/Bottom/Bottom';
import Footer from './Component/Footer/Footer';

function App() {
  
  return (
    <div className="App">
      <div className='head'>
        <Header />  
      </div>
      <div className='body'>
        <div className='card_elem'>
          <div className='elem1'>
            <Banner/>
          </div>
         <div className='card'>
             <Card/>
          </div>
          
        </div>
        <div className='element2'>
          <Element2  />
        </div>
        <div className='element3'>
          <Element3  />
        </div>
        <div className='element4'>
          <Element4  />
        </div>
        <div className='element5'>
          <Element5  />
        </div>
        <div className='element7'>
          <Bottom  />
        </div>
        <div className='foot'>
          <Footer />
        </div>
        </div>
    </div>
  );
}

export default App;
