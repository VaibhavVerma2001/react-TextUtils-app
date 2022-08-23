import {useState} from 'react'; //import usestate hook



function TextForm(props) {
    
    const [text,setText] = useState("Enter text here");
    
    function handleUpClick()
    {
        // console.log("Uppercase was clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    function handleLoClick()
    {
        // console.log("Uppercase was clicked : " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    function handleOnChange(event) //by defalut we get this variable in handling event
    {
        // console.log("Onchange");
        setText(event.target.value); //without this event and function we cant change value of input field because of text variable which is state
    }

    
    return (
        <>
            <div className="container">
                <h1 className="mb-3 mt-3">{props.heading}</h1>
                <textarea className="form-control mb-3" id="myBox" rows="8" value={text}  onChange = {handleOnChange}></textarea> {/*used state */}
                <button className="btn btn-primary mb-3" onClick = {handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mb-3 mx-3" onClick = {handleLoClick}>Convert to Lowercase</button>
            </div>

            <div className="container">
                <h1>Your text summary</h1>
                <p>{text.trim().split(" ").length} words, {text.length} characters</p>
                {/* according to google it takes 0.008 min to read 1 word */} {/* toFixed(n) is used to round number upto 3 decimal places */}
                <p>{(text.trim().split(" ").length*0.008).toFixed(3)} Minutes read</p> 
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}

export default TextForm;