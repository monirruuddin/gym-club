import './App.css';
import Footer from './Componenets/Footer/Footer';
import Hero from './Componenets/Hero/Hero';
import Join from './Componenets/Join/Join';
import Plans from './Componenets/Plans/Plans';
import Programs from './Componenets/Programs/Programs';
import Reoson from './Componenets/Reason/Reoson';
import Testimonials from './Componenets/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reoson/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
