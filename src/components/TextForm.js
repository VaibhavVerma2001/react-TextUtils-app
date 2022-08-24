import { useState } from 'react'; //import usestate hook



function TextForm(props) {

    const [text, setText] = useState("Enter text here");

    function handleUpClick() {
        // console.log("Uppercase was clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    function handleLoClick() {
        let newText = text.toLowerCase();
        setText(newText);
    }

    function handleClrClick() {
        let newText = '';
        setText(newText);
    }

    function handleTrim() {
        let newText = text.trim();
        setText(newText);
    }

    function handleSymbols() {
        let newText = '';
        //  @?%$*/# 
        for (let i = 0; i < text.length; i++) {
            if (text[i] === '@' || text[i] === '?' || text[i] === '%' || text[i] === '*' || text[i] === '/' || text[i] === '#' || text[i] === '$') {
                //do nothing
            }
            else {
                newText += text[i];
            }
        }
        setText(newText);
    }

    function handleInverse() {
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] === text[i].toLowerCase()) {
                newText += text[i].toUpperCase();
            } else {
                newText += text[i].toLowerCase();
            }
        }
        setText(newText);
    }

    function handleExtraSpaces() {
        // this will replace 2 or 2+ white spaces from string.
        let newText =  text.replace(/\s{2,}/g, ' ').trim()
        setText(newText);
    }



    function handleOnChange(event)//by defalut we get this variable in ha ndling event
    {
        // console.log("Onchange");
        setText(event.target.value); //without this event and function we cant change value of input field because of text variable which is state
    }


    return (
        <>
            <div className="container">
                <h1 className="mb-3 mt-3">{props.heading}</h1>
                <textarea className="form-control mb-3" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea> {/*used state */}
                <button className="btn btn-primary mb-3 margin-right" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mb-3 margin-right" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mb-3 margin-right" onClick={handleClrClick}>Clear Text</button>
                <button className="btn btn-primary mb-3 margin-right" onClick={handleTrim}>Trim Text</button>
                <button className="btn btn-primary mb-3 margin-right " onClick={handleInverse}>InverseCase</button>
                <button className="btn btn-primary mb-3 margin-right" onClick={handleSymbols}>Remove @?%*/#$ </button>
                <button className="btn btn-primary mb-3 margin-right " onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>

            <div className="container">
                <h1>Your text summary</h1>
                <p>{text.trim().split(" ").length} words, {text.length} characters</p>
                {/* according to google it takes 0.008 min to read 1 word */} {/* toFixed(n) is used to round number upto 3 decimal places */}
                <p>{(text.trim().split(" ").length * 0.008).toFixed(3)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}

export default TextForm;