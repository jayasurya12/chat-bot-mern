import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Home";
import Chat from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from './components/Header';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Signup/>}/>
        <Route path='/' element={<Chat/>}/>
        <Route path='/' element={<NotFound/>}/>
      </Routes>
    </main>
  )
}

export default App
