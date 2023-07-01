
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Search from './components/Pages/Search';
import './App.css';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
      <Navbar />
        <Routes >
          <Route exact path='/' element={<Home />} />
          <Route exact path='/search' element={<Search />} />
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
