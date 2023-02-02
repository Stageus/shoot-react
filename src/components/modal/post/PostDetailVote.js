import React from "react"
import { useRecoilState } from "recoil"

import Div from "../../basic/Div"
import P from "../../basic/P"
import { voteInfoState } from "../../../recoil/postState"

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

  const voteEvent = () => {
    let tmpVoteCountList = []
    if (myIdx === currentVoteIdx) {
      alert(`투표 번호 ${vote_idx} 투표 취소 api`)
      currentVoteIdx = undefined
      tmpVoteCountList = setVoteCountListLogic(voteCountList, myIdx, "-")
      voteAmount--
    } else {
      alert(`투표 번호 ${vote_idx} 투표 api`)
      if (currentVoteIdx === undefined) {
        voteAmount++
        tmpVoteCountList = voteCountList
      } else {
        tmpVoteCountList = setVoteCountListLogic(
          voteCountList,
          currentVoteIdx,
          "-"
        )
      }
      currentVoteIdx = myIdx
      tmpVoteCountList = setVoteCountListLogic(tmpVoteCountList, myIdx, "+")
    }
    setVoteInfo({
      voteIdx: currentVoteIdx,
      voteCountList: tmpVoteCountList,
      voteAmount: voteAmount,
    })
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
            {`${parseInt((myVoteCount / voteAmount) * 100)}%`}
          </P>
        </Div>
      )}
    </Div>
  )
}

export default PostDetailVote
