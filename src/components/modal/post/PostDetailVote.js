import React from "react"
import { useRecoilState, useSetRecoilState } from "recoil"

import Div from "../../basic/Div"
import P from "../../basic/P"
import { voteInfoState } from "../../../recoil/postState"
import { isLoginState } from "../../../recoil/headerState"
import { useDeleteFetch, usePostFetch } from "../../../hooks/useFetch"
import { modalInfoState, modalOpenState } from "../../../recoil/modalState"
import { useNavigate } from "react-router-dom"

const PostDetailVote = (props) => {
  const { vote_idx, vote_contents } = props.voteObject
  const myIdx = props.idx
  const [voteInfo, setVoteInfo] = useRecoilState(voteInfoState)
  let currentVoteIdx = voteInfo.voteIdx
  let voteCountList = voteInfo.voteCountList
  const myVoteCount = voteCountList[myIdx]
  let voteAmount = voteInfo.voteAmount

  const setVoteCountListLogic = (
    currentVoteCountList,
    targetIdx,
    logicOrder
  ) => {
    let tmpVoteCountList = []
    currentVoteCountList.map((element, idx) => {
      if (idx !== targetIdx) {
        tmpVoteCountList.push(element)
      } else {
        if (logicOrder === "-") {
          tmpVoteCountList.push(element - 1)
        } else {
          tmpVoteCountList.push(element + 1)
        }
      }
    })
    return tmpVoteCountList
  }

  const [isLogin, setIsLogin] = useRecoilState(isLoginState)

  const setOpenModal = useSetRecoilState(modalOpenState)
  const setModalInfo = useSetRecoilState(modalInfoState)
  const navigate = useNavigate()
  const moveLoginPageEvent = () => {
    navigate("/login")
    setOpenModal(false)
  }

  const [votePostSources, votePostFetchData] = usePostFetch()
  const [voteDeleteSources, voteDeleteFetchData] = useDeleteFetch()
  const voteEvent = () => {
    if (isLogin === false) {
      const modalInfo = {
        type: "confirm",
        content: "로그인 후 이용 가능합니다. 로그인 하시겠습니까?",
        modalFunc: moveLoginPageEvent,
      }
      setOpenModal(true)
      setModalInfo(modalInfo)
    } else {
      let tmpVoteCountList = voteCountList
      if (myIdx === currentVoteIdx) {
        voteDeleteFetchData(`vote/${vote_idx}`)
        currentVoteIdx = undefined
        tmpVoteCountList = setVoteCountListLogic(tmpVoteCountList, myIdx, "-")
        voteAmount--
      } else {
        if (currentVoteIdx === undefined) {
          votePostFetchData(`vote/${vote_idx}`)
          if (currentVoteIdx === undefined) {
            voteAmount++
          } else {
            tmpVoteCountList = setVoteCountListLogic(
              tmpVoteCountList,
              currentVoteIdx,
              "-"
            )
          }
          currentVoteIdx = myIdx
          tmpVoteCountList = setVoteCountListLogic(tmpVoteCountList, myIdx, "+")
        }
      }
      setVoteInfo({
        voteIdx: currentVoteIdx,
        voteCountList: tmpVoteCountList,
        voteAmount: voteAmount,
      })
    }
  }

  return (
    <Div
      onClick={voteEvent}
      display="flex"
      justifyContent="space-between"
      width="404px"
      height="24px"
      margin="4px 0"
      border={`1px solid ${myIdx === currentVoteIdx ? "#4AC12C" : "#C8C8C8"}`}
      borderRadius="5px"
      pointer
    >
      <Div margin="0 8px">
        <P color={myIdx === currentVoteIdx ? "green" : "default"}>
          {vote_contents}
        </P>
      </Div>
      {voteInfo !== undefined && (
        <Div margin="0 8px">
          <P color={myIdx === currentVoteIdx ? "green" : "gray"}>
            {voteAmount !== 0
              ? `${parseInt((myVoteCount / voteAmount) * 100)}%`
              : "0%"}
          </P>
        </Div>
      )}
    </Div>
  )
}

export default PostDetailVote
