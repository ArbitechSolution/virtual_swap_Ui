import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Pages/Home/Navbar';
import Footer from './Pages/Footer/Footer';
import SectionOne from './Pages/sectionOne/SectionOne';
import SectionTwo from './Pages/sectiontwo/SectionTwo';

function App() {
  return (
    <>
    <Navbar/>
    <div className="bg">
    <SectionOne/>
    <SectionTwo/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
