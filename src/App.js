
import './App.css';
import Intro from './components/intro/Intro';
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';
import Toggle from './components/Toggle/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './context';



function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor:darkMode ? "#222": "white" , color:darkMode && "white" }} >
     <Toggle/>
     <Intro/>
     <About/>
     <ProductList/>
     <Contact/>
    </div>
  );
}

export default App;
