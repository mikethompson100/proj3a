
function ShowConversion(props) {
    
    return (
      <div id="showConversion">        
        SHOW CONVERSION<br/>
        $200 in {props.currency1} converts to $100 in {props.currency2}<br/>
        <button onClick={props.goBack}>GO BACK</button>
      </div>
    );
  }
  
  export default ShowConversion;