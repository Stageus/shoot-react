import React from "react"
import styled from "styled-components"

import Img from "../basic/Img"
import Div from "../basic/Div"
import { H2 } from "../basic/H"
import P from "../basic/P"

const AlarmContainer = styled(Div)`
    max-height: 240px;
    overflow-y: auto;
`

const HeaderAlarm = () => {
    const tmpAlarmList = [
        {notification_type: 0, notification_time: "10시간 전", notify_email: "veryhard@shoot.com", notify_channel_name: "힘들어", post_idx: 10, comment_idx: undefined, reply_comment_idx: undefined},
        {notification_type: 1, notification_time: "10시간 전", notify_email: "veryhard@shoot.com", notify_channel_name: "힘들어", post_idx: undefined, comment_idx: 20, reply_comment_idx: undefined},
        {notification_type: 2, notification_time: "10시간 전", notify_email: "veryhard@shoot.com", notify_channel_name: "힘들어", post_idx: undefined, comment_idx: 30, reply_comment_idx: undefined},
        {notification_type: 3, notification_time: "10시간 전", notify_email: "veryhard@shoot.com", notify_channel_name: "힘들어", post_idx: undefined, comment_idx: undefined, reply_comment_idx: 40},
        {notification_type: 4, notification_time: "10시간 전", notify_email: "veryhard@shoot.com", notify_channel_name: "힘들어", post_idx: undefined, comment_idx: undefined, reply_comment_idx: 50},
        {notification_type: 5, notification_time: "10시간 전", notify_email: "veryhard@shoot.com", notify_channel_name: "힘들어", post_idx: undefined, comment_idx: undefined, reply_comment_idx: undefined},
        {notification_type: 6, notification_time: "10시간 전", notify_email: "veryhard@shoot.com", notify_channel_name: "힘들어", post_idx: 70, comment_idx: undefined, reply_comment_idx: undefined},
    ]
    const alarmContent = tmpAlarmList.map((element) => {
        return (
            <Div pointer position="relative" width="100%" margin="0 0 20px 0">
                <Div>
                    <P fontSize="sm">
                        {
                            element.notification_type === 0 && `${element.notify_channel_name}이(가) 회원님의 게시글을 좋아합니다` ||
                            element.notification_type === 1 && `회원님의 게시글에 새로운 댓글이 등록되었습니다` ||
                            element.notification_type === 2 && `${element.notify_channel_name}이(가) 회원님의 댓글을 좋아합니다` ||
                            element.notification_type === 3 && `회원님의 댓글에 새로운 대댓글이 등록되었습니다` ||
                            element.notification_type === 4 && `${element.notify_channel_name}이(가) 회원님을 언급했습니다` ||
                            element.notification_type === 5 && `${element.notify_channel_name}이(가) 회원님을 구독했습니다` ||
                            element.notification_type === 6 && `${element.notify_channel_name}에서 새로운 게시글을 업로드 했습니다`
                        }
                    </P>
                </Div>
                <Div position="absolute" bottom="-15px" right="0"><P fontSize="xs" color="gray">{element.notification_time}</P></Div>
            </Div>
        )
    })

    const openAlarmContainerEvent = () => {
        alert("알람 리스트 가져오는 기능 구현")
        alert("알람 클릭 이벤트")
    }

    return (
        <Div position="relative" width="24px" height="24px" margin="0 15px 0 0">
            <Div pointer width="24px">
                <Img onClick={openAlarmContainerEvent} src="./assets/images/bellOn.svg"/>
            </Div>
            <Div width="245px" position="absolute" bottom="0" right="0" transform="translate(0, 100%)" backgroundColor="white" borderRadius="5px" shadow="0 4px 4px 0 rgba(0,0,0,0.35)">
                <Div position="fixed" top="5px" left="16px" zIndex="4px" backgroundColor="white"><H2 fontWeight={700}>알림</H2></Div>
                <AlarmContainer margin="40px 0 0" padding="0 16px">
                    {alarmContent}
                </AlarmContainer>
            </Div>
        </Div>
    )
}

export default HeaderAlarm
