import React, { useState } from "react";

const Button1 = (props) => 
{
    let [buttonText, setButtonText] = useState("Button1")
    return(
        <div>
            <button onClick={() =>{
                setButtonText(props.option1);
                window.location.reload(false);
            }}>
                {buttonText}
            </button>

        
        </div>



    )
}

export default Button1;