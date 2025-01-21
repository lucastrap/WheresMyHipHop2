import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Footer from "./components/layout/Footer.jsx";
import Gallery from "./pages/Gallery.jsx";
import LegalNotice from "./pages/LegalNotice.jsx";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-black">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/legal-notice" element={<LegalNotice />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;