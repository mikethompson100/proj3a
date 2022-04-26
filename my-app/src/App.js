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
  const [requestedAmount, setRequestedAmount] = useState(1)
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
  setRequestedAmount(1)
}

const togglePages = () => {
  if ((currency1Code == "") && (currency2Code == "") ) {
    alert("Please click on two currencies.")
  }
  else if ((currency1Code == "") || (currency2Code == "")) {
    alert("Please click on the second currency.")
  }
  else if (togglePage === true) {
      setTogglePage(false)
  }
  else if (togglePage === false) {
      setTogglePage(true)
  }
  else console.log('error')
  
}

const goBack = () => {
  setTogglePage(true)
  clearValues()
}

const getAmount = (e) => {
   setRequestedAmount(e.target.value)
}

  return (
    <div id="main">            
      {
        togglePage ? (
          <div className="contain">
          Please click on two currency buttons to convert the first into the second one. Enter a money amount below (optional).<br/>
          $<input type="text" id="requestedAmount" name="requestedAmount" onChange={getAmount} /> - <button onClick={togglePages}>CONVERT</button>

          <DisplayButtons anyButtonClick={anyButtonClick} />

          

            <div className="dashboard">
                <div className="choice1">CHOICE 1 SELECTED: {currency1Code}</div>
                <div className="choice2">CHOICE 2 SELECTED: {currency2Code}</div>
                <div className="amount">MONETARY AMOUNT CHOSEN: ${requestedAmount}</div>
            </div>          

          <button onClick={clearValues}>CLEAR VALUES</button>
          </div>
        )
        :
        (          
          <div className="contain">
            <ShowConversion requestedAmount={requestedAmount} currency1Object={currency1Object} currency2Object={currency2Object} currency1Code={currency1Code} currency2Code={currency2Code} goBack={goBack} /> 
          </div>
        )
      }
    </div>
  );
}

export default App;
