import './App.css';
import axios from 'axios';
import { useState } from 'react'
import { BASE_URL, API_KEY } from './components/Global'
import DisplayButtons from './components/DisplayButtons'

function App() {
  const [currency1, setCurrency1] = useState("")  
  const [currency2, setCurrency2] = useState("")

  async function anyButtonClick(e) {  
      if ((currency1 !== "") && (currency2 !== "")) {
        alert("You already have both currencies. Please hit the CONVERT button to perform the conversion or the CLEAR VALUES button to start over.")
      }
      else if (currency1 === "") {
        setCurrency1(e.target.getAttribute("index"))
        const res = await axios.get(`${BASE_URL}/${API_KEY}/latest/${currency1}`)
      }
      else if (currency2 === "") {
        setCurrency2(e.target.getAttribute("index"))
        const res = await axios.get(`${BASE_URL}/${API_KEY}/latest/${currency2}`)
      }
      else alert("FALL THROUGH?")    
    } 

const clearValues = () => {
  setCurrency1("")
  setCurrency2("")

}

  return (
    <div>
      <DisplayButtons anyButtonClick={anyButtonClick} /><button onClick={clearValues}>CLEAR VALUES</button>
      <br/>
      <button>CONVERT</button>      
    </div>
  );
}

export default App;
