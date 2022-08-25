import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
        return newWord;
    }
    return (
        // so that if alert is null it dont show any alerts
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
        </div>
    )
}

export default Alert