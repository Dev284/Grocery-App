import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Navbar from './components/navbar';


function App() {
  return (
    <div>
      {/* <header className="App-header"> */}
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
        </BrowserRouter>
      {/* </header> */}
    </div>
  );
}

export default App;
