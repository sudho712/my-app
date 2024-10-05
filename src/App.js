import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name="raj";
function App() {
  return (
    <>
    
<Navbar></Navbar>
<div className="container my-3">
<TextForm heading="Enter the text to analyze"></TextForm>
</div>

    
    
    </>
  );
}

export default App;
