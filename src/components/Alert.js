import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
        return newWord;
    }
    return (
        // we will give some height to alert so that it dont shift layout whenever it comes or goes
        <div style={{height : "45px"}}>
            {/*so that if alert is null it dont show any alerts */}
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>

    )
}

export default Alert