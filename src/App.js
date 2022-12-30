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
import Lottery from './components/win/lottery/Lottery';
import Pottery from './components/win/pottery/Pottery';
import OverView from './components/Nft/overview/OverView';
import Collection from './components/Nft/Collection/Collection';
import Activity from './components/Nft/activity/Activity';


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
    <Route path='/lottery' element={<Lottery/>} />
    <Route path='/pottery' element={<Pottery/>}/>
    <Route path='/Nft' element={<OverView/>}/>
    <Route path='/collection' element={<Collection/>} />
    <Route path='/activity' element={<Activity/>} />
    </Routes>

    
    <Footer/>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
