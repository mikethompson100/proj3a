
import axios from 'axios';
import { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from './Global'

function DisplayButtons(props) {

    const [arrayMembers, setArrayMembers] = useState([])
        
        useEffect(() => {
            async function fetchData() {
            const receive = await axios.get(`${BASE_URL}/${API_KEY}/latest/USD`)
            const res = Object.keys(receive.data.conversion_rates);            
            setArrayMembers(res)
            }
            fetchData()
        }, [])
        
    return (
      <div>        
      {arrayMembers.map((arrayMember) => 
      <button key={arrayMember} index={arrayMember} onClick={props.anyButtonClick}>{arrayMember}</button>)} 
      </div>
    );
  }
  
  export default DisplayButtons;