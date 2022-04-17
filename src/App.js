import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/RequireAuth/Login/Login';
import Signup from './Components/RequireAuth/Signup/Signup';
import Banner from './Components/Banner/Banner';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/banner' element={<Banner></Banner>}>Banner</Route>
      </Routes>
    </div>
  );
}

export default App;
