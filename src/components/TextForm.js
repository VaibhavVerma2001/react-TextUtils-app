import { useState } from 'react'; //import usestate hook



function TextForm(props) {

    const [text, setText] = useState("Enter text here");

    function handleUpClick() {
        // console.log("Uppercase was clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    function handleLoClick() {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    function handleClrClick() {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    function handleTrim() {
        let newText = text.trim();
        setText(newText);
        props.showAlert("Text trimmed!", "success");
    }

    function handleSymbols() {
        let newText = '';
        //  @?%$*/# 
        for (let i = 0; i < text.length; i++) {
            if (text[i] === '@' || text[i] === '?' || text[i] === '%' || text[i] === '*' || text[i] === '/' || text[i] === '|' || text[i] === '#' || text[i] === '$') {
                //do nothing
            }
            else {
                newText += text[i];
            }
        }
        setText(newText);
        props.showAlert("Symbols removed!", "success");
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
        props.showAlert("Inverted case!", "success");
    }

    function handleExtraSpaces() {
        // this will replace 2 or 2+ white spaces from string.
        let newText = text.replace(/\s{2,}/g, ' ').trim()
        setText(newText);
        props.showAlert("Removed extra spaces!", "success");
    }

    function wordCount(text) {
        //filter function will add element only if given condition is true
        // split with spaxe and newline \n
        let newText = text.split(/\s+/).filter((element) => { return element.length !== 0 }); // if length !=0 only then will remain in array newText
        return newText.length;
    }

    function minuteRead(text) {
        // according to google it takes 0.008 min to read 1 word */} {/* toFixed(n) is used to round number upto 3 decimal places 
        return (text.split(" ").filter((element) => { return element.length !== 0 }).length * 0.008).toFixed(3)
    }


    function handleOnChange(event)//by defalut we get this variable in ha ndling event
    {
        // console.log("Onchange");
        setText(event.target.value); //without this event and function we cant change value of input field because of text variable which is state
    }


    return (
        <>
            <div className="container">
                <h1 className={`mb-3 mt-3 text-${props.mode === 'dark' ? "light" : "dark"}`}>{props.heading}</h1>

                {/* to bgcolor using style */}
                <textarea className="form-control mb-3" style={{ backgroundColor: props.mode === 'dark' ? "#19436D" : "white", color: props.mode === 'dark' ? "white" : "black" }} id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea> {/*used state */}

                {/* disable buttons when there is no text  */}
                <button className="btn btn-primary mb-3 margin-right" disabled={text.length === 0} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mb-3 margin-right" disabled={text.length === 0} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mb-3 margin-right" disabled={text.length === 0} onClick={handleClrClick}>Clear Text</button>
                <button className="btn btn-primary mb-3 margin-right" disabled={text.length === 0} onClick={handleTrim}>Trim Text</button>
                <button className="btn btn-primary mb-3 margin-right " disabled={text.length === 0} onClick={handleInverse}>InverseCase</button>
                <button className="btn btn-primary mb-3 margin-right" disabled={text.length === 0} onClick={handleSymbols}>Remove @?%*/#|$ </button>
                <button className="btn btn-primary mb-3 margin-right " disabled={text.length === 0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>

            <div className="container">
                <h1 className={`text-${props.mode === 'dark' ? "light" : "dark"}`}>Your text summary</h1>
                <p className={`text-${props.mode === 'dark' ? "light" : "dark"}`} >{wordCount(text)} words, {text.length} characters</p>

                <p className={`text-${props.mode === 'dark' ? "light" : "dark"}`}>{minuteRead(text)} Minutes read</p>
                <h2 className={`text-${props.mode === 'dark' ? "light" : "dark"}`}>Preview</h2>
                <p className={`text-${props.mode === 'dark' ? "light" : "dark"}`}>{text}</p>
            </div>
        </>
    );
}

export default TextForm;