import React from "react"
import styled from "styled-components"
import { useRecoilState } from "recoil"
import { useRef } from "react"

import Img from "../basic/Img"
import Div from "../basic/Div"
import { H2 } from "../basic/H"
import P from "../basic/P"
import { alarmOpenState, alarmListState } from "../../recoil/headerState"

const AlarmContainer = styled(Div)`
  max-height: 240px;
  overflow-y: auto;
`

const HeaderAlarm = () => {
  const alarmRef = useRef()
  const [alarmOpen, setAlarmOpen] = useRecoilState(alarmOpenState)
  const [alarmList, setAlarmList] = useRecoilState(alarmListState)

  const alarmContent = alarmList.map((element, Idx) => {
    return (
      <Div
        pointer
        key={`alarmBox_${Idx}`}
        position="relative"
        width="100%"
        margin="0 0 20px 0"
      >
        <Div>
          <P fontSize="sm">
            {(element.notification_type === 0 &&
              `${element.notify_channel_name}이(가) 회원님의 게시글을 좋아합니다`) ||
              (element.notification_type === 1 &&
                `회원님의 게시글에 새로운 댓글이 등록되었습니다`) ||
              (element.notification_type === 2 &&
                `${element.notify_channel_name}이(가) 회원님의 댓글을 좋아합니다`) ||
              (element.notification_type === 3 &&
                `회원님의 댓글에 새로운 대댓글이 등록되었습니다`) ||
              (element.notification_type === 4 &&
                `${element.notify_channel_name}이(가) 회원님을 언급했습니다`) ||
              (element.notification_type === 5 &&
                `${element.notify_channel_name}이(가) 회원님을 구독했습니다`) ||
              (element.notification_type === 6 &&
                `${element.notify_channel_name}에서 새로운 게시글을 업로드 했습니다`)}
          </P>
        </Div>
        <Div position="absolute" bottom="-15px" right="0">
          <P fontSize="xs" color="gray">
            {element.notification_time}
          </P>
        </Div>
      </Div>
    )
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
