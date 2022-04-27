function ShowConversion(props) {
    const conversionPercentage = props.currency1Object.data.conversion_rates[props.currency2Code]
    const conversionFinal = (props.requestedAmount * conversionPercentage)
        
    return (
      <div id="showConversion">  
         ${props.requestedAmount} in {props.currency1Code} converts into ${conversionFinal} in {props.currency2Code}<br/><br/>
        <button onClick={props.goBack}>GO BACK</button> 
      </div>
    );
  }
  
  export default ShowConversion;