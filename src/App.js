import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Pages/Home/Navbar';
import Footer from './Pages/Footer/Footer';
import SectionOne from './Pages/sectionOne/SectionOne';
import SectionTwo from './Pages/sectiontwo/SectionTwo';
import SectionThree from './Pages/sectionThree/SectionThree';
import SectionFour from './Pages/sectionfour/SectionFour';
import SectionFive from './Pages/sectionFive/SectionFive';

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
    <Footer/>
    </div>
    </>
  );
}

export default App;
