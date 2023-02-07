import React from "react"
import styled from "styled-components"
import { useRecoilState } from "recoil"
import { useRef } from "react"

import Img from "../basic/Img"
import Div from "../basic/Div"
import { H2 } from "../basic/H"
import HeaderAlarmBox from "./HeaderAlarmBox"
import { alarmOpenState, alarmListState } from "../../recoil/headerState"

const AlarmContainer = styled(Div)`
  max-height: 240px;
  overflow-y: auto;
`

const HeaderAlarm = () => {
  const alarmRef = useRef()
  const [alarmOpen, setAlarmOpen] = useRecoilState(alarmOpenState)
  const [alarmList, setAlarmList] = useRecoilState(alarmListState)

  const alarmContent = alarmList.map((element, idx) => {
    return <HeaderAlarmBox key={`HeaderAlarmBox_${idx}`} element={element} />
  })

  const clickOutAlarmEvent = (e) => {
    if (alarmRef.current && !alarmRef.current.contains(e.target)) {
      setAlarmOpen(false)
      document.removeEventListener("mousedown", clickOutAlarmEvent)
    }
  }

  const openAlarmContainerEvent = () => {
    if (alarmOpen === false) {
      alert("알람 리스트 가져오는 api 이용")
    }
    setAlarmOpen(!alarmOpen)
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
      <Div
        display={alarmOpen === true ? "block" : "none"}
        width="245px"
        position="absolute"
        bottom="0"
        right="0"
        transform="translate(0, 100%)"
        backgroundColor="white"
        borderRadius="5px"
        shadow="0 4px 4px 0 rgba(0,0,0,0.35)"
      >
        <Div
          position="fixed"
          top="5px"
          left="16px"
          zIndex="4px"
          backgroundColor="white"
        >
          <H2 fontWeight={700}>알림</H2>
        </Div>
        <AlarmContainer margin="40px 0 0" padding="0 16px">
          {alarmContent}
        </AlarmContainer>
      </Div>
    </Div>
  )
}

export default HeaderAlarm
