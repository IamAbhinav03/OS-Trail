import React, { useState } from "react";

const Button2 = (props) =>
{
    let [buttonText, setButtonText] = useState("Button 2")
    return(
        <div>
            <button onClick={() =>{
                setButtonText(props.option2);
                window.location.reload(false);
            }}>
                {buttonText}
            </button>

        
        </div>



    )
}

export default Button2;