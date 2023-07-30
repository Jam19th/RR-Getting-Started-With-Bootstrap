// Import Dependencies
import './App.css';
import NavBar from './Components/NavBar';
import Buttons from './Components/Buttons';
import Form from './Components/Form';
import ControlledCarousel from './Components/Carosel';

function App() {


  return (
    <div className="App">
      <h1>Bootstrap Website</h1>
      <Buttons />
      <NavBar />
      <Form />
      <ControlledCarousel />
    </div>
  );
}

export default App;