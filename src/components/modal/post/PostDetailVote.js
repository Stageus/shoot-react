import React from "react"

import Div from "../../basic/Div"
import P from "../../basic/P"

const PostDetailVote = (props) => {
  const { vote_idx, vote_contents, vote_count, vote_state } = props.voteObject
  const isVote = props.isVote
  const voteAmount = props.voteAmount

  const voteEvent = () => {
    alert(`투표 번호 ${vote_idx} 투표 관련 api`)
    alert(`투표 정보 다시 받아오기`)
  }

  return (
    <Div
      onClick={voteEvent}
      display="flex"
      justifyContent="space-between"
      width="404px"
      height="24px"
      margin="4px 0"
      border={`1px solid ${vote_state === true ? "#4AC12C" : "#C8C8C8"}`}
      borderRadius="5px"
    >
      <Div margin="0 8px">
        <P color={vote_state === true ? "green" : "default"}>{vote_contents}</P>
      </Div>
      {isVote && (
        <Div margin="0 8px">
          <P color={vote_state === true ? "green" : "gray"}>
            {`${parseInt((vote_count / voteAmount) * 100)}%`}
          </P>
        </Div>
      )}
    </Div>
  )
}

export default PostDetailVote
