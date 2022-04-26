import './App.css';
import axios from 'axios';
import { useState } from 'react'
import { BASE_URL, API_KEY } from './components/Global'
import DisplayButtons from './components/DisplayButtons'
import ShowConversion from './components/ShowConversion'

function App() {
  const [currency1Code, setCurrency1Code] = useState("")  
  const [currency2Code, setCurrency2Code] = useState("")
  const [currency1Object, setCurrency1Object] = useState([])  
  const [currency2Object, setCurrency2Object] = useState([])
  const [togglePage, setTogglePage] = useState(true)

  async function anyButtonClick(e) {  
      if ((currency1Code !== "") && (currency2Code !== "")) {
        alert("You already have both currencies. Please hit the CONVERT button to perform the conversion or the CLEAR VALUES button to start over.")
      }
      else if (currency1Code === "") {
        const code = e.target.getAttribute("index")
        setCurrency1Code(code)
        const object1 = await axios.get(`${BASE_URL}/${API_KEY}/latest/${code}`)
        setCurrency1Object(object1)
      }
      else if (currency2Code === "") {
        const code = e.target.getAttribute("index")
        setCurrency2Code(code)
        const object2 = await axios.get(`${BASE_URL}/${API_KEY}/latest/${code}`)
        setCurrency2Object(object2)
      }
      
    } 

const clearValues = () => {
  setCurrency1Code("")
  setCurrency2Code("")
  setCurrency1Object([])
  setCurrency2Object([])
}

const togglePages = () => {
  if ((currency1Code == "") && (currency2Code == "")) {
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
          {/* <ShowConversion currency1={currency1} currency2={currency2} goBack={goBack} /> */}
        )
      }
    </div>
  );
}

export default App;
