import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import AllProduct from './components/AllProduct/AllProduct';
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);
  const addCard = () => setCount(count + 1)
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Menubar count = {count}></Menubar>
      <AllProduct addCard = {addCard}></AllProduct>
    </div>
  );
}

export default App;
