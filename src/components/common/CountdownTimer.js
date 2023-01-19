import React from "react"

import P from "../basic/P"
import Div from "../basic/Div"

const CountdownTimer = props => {
    const time = props.time
    setInterval(() => time - 1, 1000)
    return(
        <Div position="absolute" bottom="-15px" right="5px">
            <P fontSize="12px" color="red">{`${time/60}:${time%60 < 10 ? `0${time%60}` : time%60}`}</P>
        </Div>
    )
}

export default CountdownTimer
