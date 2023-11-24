import React from "react"
import styled from "styled-components"

import Div from "../basic/Div"
import Img from "../basic/Img"
import { IconText } from "./IconText"
import useToggle from "../../hooks/useToggle"
import { useDeleteFetch } from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { modalInfoState, modalOpenState } from "../../recoil/modalState"

const SeeMoreIcon = styled(Div)`
  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }
`

const SeeMore = (props) => {
  const parent = props.parent
  const parentInfo = props.parentInfo
  const width = props.width
  const commentModifyEvnet = props.commentModifyEvnet

  const [openSeeMore, setOpenSeeMore] = useToggle()
  const toggleSeeMore = () => {
    setOpenSeeMore()
  }

  const clickShareEvent = () => {
    alert(`${parentInfo}이 url을 복사함`)
    // alert 대신에 나중에 url 복사하는 기능으로 바꿔야함
  }

  const navigate = useNavigate()
  const clickModifyEvent = () => {
    if (parent === "comment" || parent === "reply_comment") {
      commentModifyEvnet()
    } else {
      if (parent === "post") {
        navigate(`/modify/${parentInfo}`)
      } else if (parent === "channel") {
        navigate(`/channel/modify`)
      }
    }
  }

  const setOpenModal = useSetRecoilState(modalOpenState)
  const setModalInfo = useSetRecoilState(modalInfoState)

  const [deleteSources, deleteFetchData] = useDeleteFetch()
  const clickDeleteEvent = () => {
    let confirmContent
    let confirmFuc
    if (parent === "comment") {
      confirmContent = "댓글을 삭제하시겠습니까?"
      confirmFuc = () => {
        deleteFetchData(`comment/${parentInfo}`)
        setOpenModal(false)
      }
    } else if (parent === "reply_comment") {
      confirmContent = "대댓글을 삭제하시겠습니까?"

      confirmFuc = () => {
        deleteFetchData(`reply-comment/${parentInfo}`)
        setOpenModal(false)
      }
    } else if (parent === "post") {
      confirmContent = "게시글을 삭제하시겠습니까?"

      confirmFuc = () => {
        confirmFuc = deleteFetchData(`post/${parentInfo}`)
        setOpenModal(false)
      }
    }

    const modalInfo = {
      type: "confirm",
      content: confirmContent,
      modalFunc: confirmFuc,
    }
    setOpenModal(true)
    setModalInfo(modalInfo)
  }

  const clickAlarmEvent = () => {
    alert(
      `타입이 ${parent}이고 정보가 ${parentInfo}인 것을 알림 ${
        props.alarm ? "꺼지게 하기" : "켜지게 하기"
      }`
    )
    // alert 대신에 나중에 알림 켜짐, 꺼짐하는 기능으로 바꿔야함
  }

  const clickReportEvent = () => {
    alert(`타입이 ${parent}이고 정보가 ${parentInfo}인 것을 신고 모달 띄워줌`)
    // alert 대신에 나중에 신고모달 띄워주는 기능으로 바꿔야함
  }

  return (
    <Div width={width || "48px"} height={width || "48px"} position="relative">
      <SeeMoreIcon
        pointer
        width="100%"
        height="100%"
        display="flex"
        borderRadius="50%"
      >
        <Div onClick={toggleSeeMore} display="flex" width="60%" height="60%">
          <Img src="/assets/images/dots.svg" />
        </Div>
      </SeeMoreIcon>
      {openSeeMore === true && (
        <Div
          width="100px"
          padding="5px"
          display="flex"
          flexDirection="column"
          position="absolute"
          bottom="0"
          left="-120px"
          borderRadius="5px"
          backgroundColor="white"
          shadow="0 4px 4px 0 rgba(0,0,0,0.35)"
        >
          {props.share && (
            <IconText
              onClick={clickShareEvent}
              src="/assets/images/share.svg"
              text="공유하기"
            />
          )}
          {props.modify && (
            <IconText
              onClick={clickModifyEvent}
              src="/assets/images/edit.svg"
              text="수정하기"
            />
          )}
          {props.delete && (
            <IconText
              onClick={clickDeleteEvent}
              src="/assets/images/trash.svg"
              text="삭제하기"
            />
          )}
          {(props.alarm === true && (
            <IconText
              onClick={clickAlarmEvent}
              src="/assets/images/bellOn.svg"
              text="알림켜짐"
            />
          )) ||
            (props.alarm === false && (
              <IconText
                onClick={clickAlarmEvent}
                src="/assets/images/bellOff.svg"
                text="알림꺼짐"
              />
            ))}
          {props.report && (
            <IconText
              onClick={clickReportEvent}
              src="/assets/images/report.svg"
              text="신고하기"
            />
          )}
        </Div>
      )}
    </Div>
  )
}

export default SeeMore
