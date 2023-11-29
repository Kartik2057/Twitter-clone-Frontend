import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Home from './pages/Home';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={true?<Home/>:<Authentication/>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
