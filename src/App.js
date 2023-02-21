import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Clubs from './pages/Clubs'
import About from './pages/About'
import Store from './pages/Store'
import Tastings from './pages/Tastings'
import LocalEats from './pages/LocalEats'

function App() {
  return (
    <div className="App">


        <Router>
        <Navbar />
        <div className="App-body">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/home' element={<Dashboard />} />
            <Route path='/clubs' element={<Clubs />} />
            <Route path='/about' element={<About />} />
            <Route path='/store' element={<Store />} />
            <Route path='/tastings' element={<Tastings />} />
            <Route path='/Local Eats' element={<LocalEats />} />
          </Routes>
        </div>
        </Router>

    </div>
  );
}

export default App;
