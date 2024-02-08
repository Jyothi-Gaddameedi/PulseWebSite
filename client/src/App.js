
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Settings from './components/Settings';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/settings" element={<Settings/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
