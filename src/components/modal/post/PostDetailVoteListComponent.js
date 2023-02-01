import React from "react"
import { useRecoilValue } from "recoil"

import Div from "../../basic/Div"
import P from "../../basic/P"
import PostDetailVote from "./PostDetailVote"
import { postInfoState } from "../../../recoil/postState"

const PostDetailVoteListComponent = () => {
  const postInfo = useRecoilValue(postInfoState)
  const { vote } = postInfo

  let isVote = false
  let voteAmount = 0
  for (let idx = 0; idx < vote.length; idx++) {
    if (vote[idx].vote_state === true) {
      isVote = true
    }
    voteAmount += vote[idx].vote_count
  }

  let voteContent
  if (vote !== undefined) {
    voteContent = vote.map((element, Idx) => {
      return (
        <PostDetailVote
          key={`voteBox_${Idx}`}
          voteObject={element}
          isVote={isVote}
          voteAmount={voteAmount}
        />
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
