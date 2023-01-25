import React from "react"
import styled from "styled-components"

import Div from "../basic/Div"
import P from "../basic/P"

const LinkBox = styled(Div)`
    background-color: rgba(200, 200, 200, 0.8);
    flex: none;
`

const PostDetailLink = props => {
    const {name, link} = props

    const moveLinkEvent = () => {
        window.open(link)
    }

    return(
        <LinkBox onClick={moveLinkEvent} pointer width="80%" margin="0 10%" borderRadius="5px">
            <Div padding="11px 9px" backgorundColor="">
                <Div margin="0 0 12px 0"><P fontSize="18px">{name}</P></Div>
                <Div><P fontSize="18px">{link}</P></Div>
            </Div>
        </LinkBox>
    )
}

export default PostDetailLink
