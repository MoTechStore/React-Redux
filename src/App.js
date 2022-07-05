import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import Index from './components/Index';
import Register from './components/Register';
import {useSelector,useDispatch} from 'react-redux';



function App() {



  return (
    
    <div className="App">

<BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
