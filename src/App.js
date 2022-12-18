import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Store from './Pages/Store/Store';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/store' element={<Store/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  );
}

export default App;
