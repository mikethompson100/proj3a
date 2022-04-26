
function DisplayButtons(props) {
    return (
      <div>        
        <button index="AUD" onClick={props.anyButtonClick}>AUD</button>
        <button index="AED" onClick={props.anyButtonClick}>AED</button>
        <button index="COP" onClick={props.anyButtonClick}>COP</button>
        <button index="USD" onClick={props.anyButtonClick}>USD</button>
      </div>
    );
  }
  
  export default DisplayButtons;