import React from "react"

import P from "../basic/P"
import Div from "../basic/Div"

const TextCounter = props => {
    const characterLimit = props.characterLimit

    return(
        <Div position="absolute" bottom="-15px" right="5px">
            <P fontSize="12px">{`23 / ${characterLimit}`}</P>
        </Div>
    )
}

export default TextCounter
