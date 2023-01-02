import Header from './script/Header' 
import './App.css';
import Card1 from './script/Card1'
import Card2 from './script/Card2'
import Card3 from './script/Card3'
import Card4 from './script/Card4'
import About1 from './script/About1'
import About2 from './script/About2';
import About3 from './script/About3';
import Footer1 from './script/Footer1';
import Footer2 from './script/Footer2';
import Footer3 from './script/Footer3';
import './script/Main.css'

function App() {
  return (
    <>
    <Header /> 
    <div class="card-cont">
    <Card1 />
    <Card2 />
    <Card3 />
    <Card4 />
    </div>
    <div class="about-cont">
    <About1 />
    <About2 />
    <About3 />
    </div>
    <div class="footer-cont">
    <Footer1 />
    <Footer2 />
    <Footer3 />
    </div>
    </>
  );
}

export default App;
