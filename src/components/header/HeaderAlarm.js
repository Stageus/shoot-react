import React from "react"
import { useSetRecoilState } from "recoil"
import { useRef } from "react"

import Img from "../basic/Img"
import Div from "../basic/Div"
import HeaderAlarmListComponent from "./HeaderAlarmListComponent"
import { alarmOpenState } from "../../recoil/headerState"

const HeaderAlarm = () => {
  const alarmRef = useRef()
  const setAlarmOpen = useSetRecoilState(alarmOpenState)

  const clickOutAlarmEvent = (e) => {
    if (alarmRef.current && !alarmRef.current.contains(e.target)) {
      setAlarmOpen(false)
      document.removeEventListener("mousedown", clickOutAlarmEvent)
    }
  }

  const openAlarmContainerEvent = () => {
    setAlarmOpen(true)
    document.addEventListener("mousedown", clickOutAlarmEvent)
  }

  return (
    <Div
      ref={alarmRef}
      position="relative"
      width="24px"
      height="24px"
      margin="0 15px 0 0"
    >
      <Div pointer width="24px">
        <Img
          onClick={openAlarmContainerEvent}
          src="/assets/images/bellOn.svg"
        />
      </Div>
      <HeaderAlarmListComponent />
    </Div>
  )
}

export default HeaderAlarm
