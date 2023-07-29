import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

function App() {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
}

export default App;
