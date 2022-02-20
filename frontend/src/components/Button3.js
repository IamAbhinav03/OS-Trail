import React,{ useState } from "react";

function Button3  (props) {

{}
let [buttonText, setButtonText] = useState("Home")
return(
    <div>
        <button onClick={() =>{
            setButtonText();
            window.location.reload(false);
            

        }}>
        </button>

    
    </div>



)
}