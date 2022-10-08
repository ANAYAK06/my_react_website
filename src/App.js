
import './App.css';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav';
import Portfolio from './Components/Portfolio/Portfolio';
import Toggle from './Components/Toggle/Toggle';
import { useContext} from 'react'
import {ThemeContext} from './Components/Toggle/context'

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div style={{backgroundColor:darkMode ? "#222": "white" , color:darkMode && "white" }} >
      <Toggle />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />

      
    </div>
  );
}

export default App;
