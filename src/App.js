import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { ThemeContext } from '../src/context/ThemeContext';
import Form from './components/Form';

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`App ${theme==="light" ? "light":"dark"}`}>
      <Navbar></Navbar>
      <Form></Form>
    </div>
  );
}

export default App;
