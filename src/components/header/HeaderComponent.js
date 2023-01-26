import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import Div from "../basic/Div"
import Img from "../basic/Img"
import HeaderSearchContainer from "./HeaderSearchContainer"
import HeaderFunctionContainer from "./HeaderFunctionContainer"

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 3;
    background-color: ${props => props.theme.color.white};
`

const HeaderComponent = () => {
    const navigate = useNavigate()

    const moveHomeEvent = () => {
        navigate("/")
    }

    return (
        <Header>
            <Div onClick={moveHomeEvent} pointer height="50%" margin="0 0 0 40px"><Img src="/assets/images/shootLogo.svg"/></Div>
            <HeaderSearchContainer />
            <HeaderFunctionContainer />
        </Header>
    )
}

export default HeaderComponent
