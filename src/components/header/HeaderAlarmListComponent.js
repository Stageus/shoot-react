import React, { useEffect } from "react"
import styled from "styled-components"
import { useRecoilState, useRecoilValue } from "recoil"

import Div from "../basic/Div"
import { H2 } from "../basic/H"
import HeaderAlarmBox from "./HeaderAlarmBox"
import { alarmOpenState, alarmListState } from "../../recoil/headerState"
import { useGetFetch } from "../../hooks/useFetch"

const AlarmContainer = styled(Div)`
  max-height: 240px;
  overflow-y: auto;
`

const HeaderAlarmListComponent = () => {
  const [alarmList, setAlarmList] = useRecoilState(alarmListState)
  const alarmContent = alarmList.map((element, idx) => {
    return <HeaderAlarmBox key={`HeaderAlarmBox_${idx}`} element={element} />
  })

  const alarmOpen = useRecoilValue(alarmOpenState)
  const [alarmGetSources, alarmGetFetchData] = useGetFetch()
  useEffect(() => {
    if (alarmOpen === true) {
      alarmGetFetchData("notification/all")
    }
  }, [alarmOpen])

  useEffect(() => {
    if (alarmOpen === true) {
      if (alarmGetSources !== null && alarmGetSources !== undefined) {
        const tmpAlarmList = alarmGetSources.data
        setAlarmList(tmpAlarmList)
      }
    }
  }, [alarmGetSources])

  return (
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
  )
}

export default HeaderAlarmListComponent
