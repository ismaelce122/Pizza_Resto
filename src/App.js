import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './componentes/nav_bar/nav_bar';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import NotFound from './pages/not_found/not_found';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element= { <Home /> } />
        <Route path='/about' element= { <About /> } />
        <Route path='/contact' element= { <Contact /> } />
        <Route path='*' element= { <NotFound /> } />
      </Routes>
    </Router>
  );
}

export default App;