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
import Limit from './components/limit/Limit';
import Liqudity from './components/liqudity/Liqudity';
import Farms from './components/Earn/farms/Farms';
import Fgird from './components/Earn/farms/Fgird';
import Pool from './components/Earn/pool/Pool';
import Latest from './components/win/latest/Latest';
import Pools from './components/win/pools/Pools';
import Prediction from './components/win/prediction/Prediction';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className="bg">
    <Routes>
    <Route path='/' element={<Pages/>}/>
    <Route path="/trade_swap" element={<Trade_Swap/>}/>
    <Route path="/swap" element={<Trade_Swap/>}/>
    <Route path="/limit" element={<Limit/>}/>
    <Route path="/liqudity" element={<Liqudity/>}/>
    <Route path='/farms' element={<Farms/>}/>
    <Route path='/farmGrid' element={<Fgird/>}/>
    <Route path='/pool' element={<Pool/>}/>
    <Route path='/latest' element={<Latest/>}/>
    <Route path='/pools' element={<Pools/>}/>
    <Route path='/prediction' element={<Prediction/>}/>
    </Routes>

    
    <Footer/>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
