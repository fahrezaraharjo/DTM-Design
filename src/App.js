import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { Navbar } from './components';
import { Home, Programs, Arts, Stores } from './pages'
import './App.scss';

const App = () => {
    return (
        <div className='app'>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/program" element={<Programs />} />
                    <Route path="/art" element={<Arts />} />
                    <Route path="/store" element={<Stores />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App