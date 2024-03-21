
import './App.css';
import Hero from './Components/Pages/Hero/Hero';
import Nav from './Components/Nav';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Table from './Components/Pages/Table/Table'
function App() {
  return (
    <div className="App">
      <Nav/>
<BrowserRouter>
<Routes>
<Route path="/" index element={<Hero/>} />
<Route path="/Hero" element={<Hero/>} />
<Route path="/Table" element={<Table/>} />
  </Routes>

</BrowserRouter>

     
     
    </div>
  );
}

export default App;
