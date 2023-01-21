import React from "react"

import styled from "styled-components"

import Img from "../basic/Img"
import P from "../basic/P"
import Div from "../basic/Div"

const Hashtag = props => {
    const {hashtag, close} = props

    const removeHashtag = () => {
        document.getElementById(`hash_${hashtag}`).remove();
    }

    return(
        <Div id={`hash_${hashtag}`} display="flex" height="28px" border="1px solid #C8C8C8" borderRadius="99px" align-items justify-content>
            <Div width="20px" height="20px" margin="2px 3px 2px 5px"><Img src="./assets/images/hashtag.svg"/></Div>
            <Div margin="0 5px 0 0" height="inherit" display="flex" alignItems="center"><P fontSize="md" color="gray">{hashtag}</P></Div>
            {
                close &&
                <Div onClick={removeHashtag} display="flex" width="16px" margin="0 5px 0 0"><Img src="./assets/images/close.svg"/></Div>
            }
        </Div>
    )
}

export default Hashtag
