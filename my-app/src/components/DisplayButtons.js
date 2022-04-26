
function DisplayButtons(props) {
    return (
      <div>        
        <button index="AUD" onClick={props.anyButtonClick}>AUD</button>
        <button index="AED" onClick={props.anyButtonClick}>AED</button>
      </div>
    );
  }
  
  export default DisplayButtons;