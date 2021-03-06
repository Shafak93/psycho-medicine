import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/RequireAuth/Login/Login';
import Signup from './Components/RequireAuth/Signup/Signup';
import Banner from './Components/Banner/Banner';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Checkout from './Components/Checkout/Checkout';
import Requireauth from './Components/RequireAuth/Requireauth/Requireauth';
import Notfound from './Components/NotFound/Notfound';
import Blog from './Components/Blog/Blog';
import Aboutme from './Components/Aboutme/Aboutme';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/aboutme' element={<Aboutme></Aboutme>}></Route>
        <Route path='/checkout' element={
          <Requireauth>
            <Checkout></Checkout>
          </Requireauth>
        }></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
