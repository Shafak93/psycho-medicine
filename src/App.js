import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/RequireAuth/Login/Login';
import Signup from './Components/RequireAuth/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route to='/' element={<Header></Header>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/banner'>Banner</Route>
      </Routes>
    </div>
  );
}

export default App;
