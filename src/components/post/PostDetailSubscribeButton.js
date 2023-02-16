import React, { useEffect } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

import P from "../basic/P"
import { MdButton } from "../basic/Button"
import { isSubscribeState, postInfoState } from "../../recoil/postState"
import { isLoginState } from "../../recoil/headerState"
import { useDeleteFetch, usePostFetch } from "../../hooks/useFetch"
import { modalInfoState, modalOpenState } from "../../recoil/modalState"
import { useNavigate } from "react-router-dom"

const PostDetailSubscribeButton = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)
  const postInfo = useRecoilValue(postInfoState)
  const { upload_channel_email, subscribe_state } = postInfo
  const [isSubscribe, setIsSubscribe] = useRecoilState(isSubscribeState)

  const setOpenModal = useSetRecoilState(modalOpenState)
  const setModalInfo = useSetRecoilState(modalInfoState)
  const navigate = useNavigate()
  const moveLoginPageEvent = () => {
    navigate("/login")
    setOpenModal(false)
  }

  const [subscribePostSources, subscribePostFetchData] = usePostFetch()
  const setSubscribe = () => {
    if (isLogin === false) {
      const modalInfo = {
        type: "confirm",
        content:
          "로그인 후 이용 가능합니다. 로그인 하시겠습니까? 알람 띄우기 기능 구현",
        modalFunc: moveLoginPageEvent,
      }
      setOpenModal(true)
      setModalInfo(modalInfo)
    } else {
      subscribePostFetchData(`subscribe?email=${upload_channel_email}`)
      setIsSubscribe(true)
    }
  }

  const [subscribeDeleteSources, subscribeDeleteFetchData] = useDeleteFetch()
  const removeSubscribe = () => {
    subscribeDeleteFetchData(`subscribe?email=${upload_channel_email}`)
    setIsSubscribe(false)
  }

  useEffect(() => {
    setIsSubscribe(subscribe_state || false)
  }, [postInfo])

  return (
    <React.Fragment>
      {(isSubscribe === false && (
        <MdButton onClick={setSubscribe} backgroundColor="primary">
          <P color="white">구독</P>
        </MdButton>
      )) ||
        (isSubscribe === true && (
          <MdButton
            onClick={removeSubscribe}
            border="2px solid #FF6B6B"
            backgroundColor="white"
          >
            <P color="primary">구독중</P>
          </MdButton>
        ))}
    </React.Fragment>
  )
}

export default PostDetailSubscribeButton
