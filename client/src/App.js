import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import SelectedMovie from './pages/SelectedMovie';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import NewSubmit from './pages/NewSubmit';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Home /> }  />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/otp' element={<NewSubmit />} />
        <Route path="/movies/:name" element={<SelectedMovie />} /> 
      </Routes>
    </div>
  );
}

export default App;
