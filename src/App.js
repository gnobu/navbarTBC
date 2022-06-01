import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

