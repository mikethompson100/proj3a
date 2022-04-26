import './App.css';
import axios from 'axios';
import { useState } from 'react'
import { BASE_URL, API_KEY } from './components/Global'
import DisplayButtons from './components/DisplayButtons'
import ShowConversion from './components/ShowConversion'

function App() {
  const [currency1, setCurrency1] = useState("")  
  const [currency2, setCurrency2] = useState("")
  const [togglePage, setTogglePage] = useState(true)

  async function anyButtonClick(e) {  
      if ((currency1 !== "") && (currency2 !== "")) {
        alert("You already have both currencies. Please hit the CONVERT button to perform the conversion or the CLEAR VALUES button to start over.")
      }
      else if (currency1 === "") {
        setCurrency1(e.target.getAttribute("index"))
        await axios.get(`${BASE_URL}/${API_KEY}/latest/${currency1}`)
      }
      else if (currency2 === "") {
        setCurrency2(e.target.getAttribute("index"))
        await axios.get(`${BASE_URL}/${API_KEY}/latest/${currency2}`)
      }
      
    } 

const clearValues = () => {
  setCurrency1("")
  setCurrency2("")
}

const togglePages = () => {
  if ((currency1 == "") && (currency2 == "")) {
    alert("Please click on two currencies.")
  }
  else {
      if (togglePage === true) {
        setTogglePage(false)
        
      }
      else {
        setTogglePage(true)
        
      }
  }
}

const goBack = () => {
  setTogglePage(true)
  clearValues()
}

  return (
    <div>            
      {
        togglePage ? (
          <div>
          <DisplayButtons anyButtonClick={anyButtonClick} />
          <button onClick={clearValues}>CLEAR VALUES</button>
          <button onClick={togglePages}>CONVERT</button>
          </div>
        )
        :
        (          
          <ShowConversion currency1={currency1} currency2={currency2} goBack={goBack} />
        )
      }
    </div>
  );
}

export default App;
