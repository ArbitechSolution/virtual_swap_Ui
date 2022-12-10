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

function App() {
  return (
    <>
    <Navbar/>
    <div className="bg">
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <SectionFive/>
    <SectionSix/>
    <SectionSeven/>
    <SectionEight/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
