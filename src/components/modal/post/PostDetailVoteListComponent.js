import React from "react"
import { useSetRecoilState, useRecoilValue } from "recoil"

import Div from "../../basic/Div"
import P from "../../basic/P"
import PostDetailVote from "./PostDetailVote"
import { postInfoState, voteInfoState } from "../../../recoil/postState"

const PostDetailVoteListComponent = () => {
  const postInfo = useRecoilValue(postInfoState)
  const { vote } = postInfo
  const setVoteInfo = useSetRecoilState(voteInfoState)
  let voteIdx = undefined
  let voteCountList = []
  let voteAmount = 0
  for (let idx = 0; idx < vote.length; idx++) {
    if (vote[idx].vote_state === true) {
      voteIdx = idx
    }
    voteAmount += vote[idx].vote_count
    voteCountList.push(vote[idx].vote_count)
  }
  setVoteInfo({
    voteIdx: voteIdx,
    voteCountList: voteCountList,
    voteAmount: voteAmount,
  })

  let voteContent
  if (vote !== undefined) {
    voteContent = vote.map((element, Idx) => {
      return (
        <PostDetailVote key={`voteBox_${Idx}`} idx={Idx} voteObject={element} />
      )
    })
  }

  return (
    <Div margin="27px 0 0 0">
      <Div>
        <P>투표</P>
      </Div>
      <Div>{voteContent}</Div>
    </Div>
  )
}

export default PostDetailVoteListComponent
