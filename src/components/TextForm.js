import {useState} from 'react'; //import usestate hook

// we want to keep whatever text user write in input field as an variable, so that whenever that change it changes everywhere . So using this as state */

// const [text,setText] = useState("Enter text here"); // it means text is variable and its default value is "Enter text here" and we will set this value through setText function without reloading page
// to update text we can only use setText function => setText("Changing text");
// cant do text = "Changing text" // this is wrong


function TextForm(props) {
    const [text,setText] = useState("Enter text here");
    function handleUpClick()
    {
        // console.log("Uppercase was clicked : " + text);
        let newText = text.toLocaleUpperCase();
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
            </div>
        </>
    );
}

export default TextForm;