import './App.css';
import card1 from './images/card1.png';
import card2 from './images/card2.png';
import card3 from './images/card3.png';
import Navbar from './components/navbar';
import Section1 from './components/section1';
import Cards from './components/cards';
function App() {
  return (
    <>
      <Navbar/>
      <Section1/>
      <section className="cardsection">
        <Cards 
        cardimg={card2}
        title="Life Lessons with Katie Zaferes" 
        price="$136" 
        rating={5.0} 
        review={6} 
        country="USA" />
        <Cards 
        cardimg={card3}
        title="Life Lessons with Katie Zaferes" 
        price="$136" 
        rating={5.0} 
        review={6} 
        country="USA" />
        <Cards 
        cardimg={card1}
        title="Life Lessons with Katie Zaferes" 
        price="$136" 
        rating={5.0} 
        review={6} 
        country="USA" />
      </section>
    </>
  );
}

export default App;
