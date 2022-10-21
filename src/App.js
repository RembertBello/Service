import './App.css';
import BodyMain from './components/BodyMain.jsx';
import ButtonWtpp from './components/ButtonWtpp';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Section from './components/Section.jsx';

function App() {


  return (
    <div className="App">
      <Header/>
      <BodyMain/>
      <Section/>
      <Footer/>
      <ButtonWtpp/>
    </div>
  );
}

export default App;
