import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { Navbar } from './components';
import { Home, Programs, Arts, Stores, Login } from './pages'
import './App.scss';
import PromoC2s from "./pages/PromoC2s/PromoC2s";

const App = () => {
    return (
        <div className='app'>
            <BrowserRouter>
            <Navbar />
                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/program" element={<Programs />} />
                    <Route path="/art" element={<Arts />} />
                    <Route path="/promoc2" element={<PromoC2s />} />
                    <Route path="/store" element={<Stores />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App