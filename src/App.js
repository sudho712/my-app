import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
/* import TextForm from './components/TextForm'; */
import About from './components/About';

let name="raj";
function App() {
  return (
    <>
    
<Navbar></Navbar>

<div className="container my-3">

{/* <TextForm heading="Enter the text to analyze"></TextForm> */}

<About/>
</div>

    
    
    </>
  );
}

export default App;
