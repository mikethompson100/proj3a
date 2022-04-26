import './App.css';
import axios from 'axios';
import { BASE_URL, API_KEY } from './components/Global'
import DisplayButtons from './components/DisplayButtons'

function App() {

  async function getData(e) {
      const country = e.target.getAttribute("index");      
      const res = await axios.get(`${BASE_URL}/${API_KEY}/latest/${country}`)
      console.log(res)
    } 



  return (
    <div>
    <button index="AUD" onClick={getData}>AUD</button>
    <button index="AED" onClick={getData}>AED</button>
      <DisplayButtons />
    </div>
  );
}

export default App;
