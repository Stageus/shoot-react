import React from "react"
import { useEffect } from "react"
import { useRecoilValue } from "recoil"

import Div from "../basic/Div"
import P from "../basic/P"
import useDifferenceTime from "../../hooks/useTimeDifference"
import { alarmOpenState } from "../../recoil/headerState"

const HeaderAlarmBox = (props) => {
  const element = props.element
  const [differenceTime, setDifferenceTime] = useDifferenceTime()
  const alarmOpen = useRecoilValue(alarmOpenState)

  useEffect(() => {
    const nowTime = new Date()
    const objectTime = new Date(element.notification_time)
    setDifferenceTime(nowTime, objectTime)
  }, [alarmOpen])

  return (
    <Div pointer position="relative" width="100%" margin="0 0 20px 0">
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
          {differenceTime}
        </P>
      </Div>
    </Div>
  )
}

export default HeaderAlarmBox
