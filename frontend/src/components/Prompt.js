import React, { useState } from "react";

const Prompt = (props) =>
{
    let [promptText, setPromptText] = useState("Prompt")
    return(
        <div>
            {setPromptText(props.prompt)}
            <b> {promptText}</b>
        </div>



    )
    }

    export default Prompt;