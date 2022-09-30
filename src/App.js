import Home from './Components/Home/Home';
import MenuBar from './Components/MenuBar/MenuBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ContactUs from './Components/ContactUs/ContactUs';
import Gallery from './Components/Gallery/Gallery';
import Review from './Components/Review/Review';
import './App.css';
import Footer from './Components/Footer/Footer';
import QualityPlan from './Components/QualityPlan/QualityPlan';

function App() {
    return (
        <div>
            <BrowserRouter>
                <MenuBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    {/* <Route path="/contact-us" element={<ContactUs />} /> */}
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/qualityPlan" element={<QualityPlan />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
