import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Pages/Home/Navbar';
import Footer from './Pages/Footer/Footer';
import SectionOne from './Pages/sectionOne/SectionOne';
import SectionTwo from './Pages/sectiontwo/SectionTwo';
import SectionThree from './Pages/sectionThree/SectionThree';
import SectionFour from './Pages/sectionfour/SectionFour';
import SectionFive from './Pages/sectionFive/SectionFive';
import SectionSix from './Pages/sectionSix/SectionSix';
import SectionSeven from './Pages/sectionSeven/SectionSeven';
import SectionEight from './Pages/sectionEight/SectionEight';
import Pages from './Pages/Pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trade_Swap from './components/trade-swap/Trade_Swap';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className="bg">
    <Routes>
    <Route path='/' element={<Pages/>}/>
    <Route path="/trade_swap" element={<Trade_Swap/>}/>
    </Routes>
    
    <Footer/>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
