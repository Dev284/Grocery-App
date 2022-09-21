import '/var/www/html/React_project/grocery/src/App.css';
import logo from './image/logo.png'
// import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <div className='Nav'>
        <h1>Store </h1> <img src={logo}/>

      </div>
    );
  }
  
  export default Navbar;
  