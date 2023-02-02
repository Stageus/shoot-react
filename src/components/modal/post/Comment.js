import React from "react"
import styled from "styled-components"
import { useRecoilState, useRecoilValue } from "recoil"

import Div from "../../basic/Div"
import P from "../../basic/P"
import Profile from "../../common/Profile"
import SeeMore from "../../common/SeeMore"
import { IconText } from "../../common/IconText"
import CommentLike from "./CommentLike"
import CommentInput from "./CommentInput"
import useReplyInput from "../../../hooks/useReplyInput"
import useReplyComment from "../../../hooks/useReplyComment"
import { userInfoState } from "../../../recoil/headerState"
import { replyCommentListState } from "../../../recoil/postState"

const CommentContent = styled(Div)`
  flex: 1;
`

const Comment = (props) => {
  const {
    comment_idx,
    comment_contents,
    comment_time,
    comment_good_count,
    reply_comment_count,
    reply_comment_idx,
    reply_comment_contents,
    reply_comment_time,
    reply_comment_good_count,
    write_channel_email,
    email,
    profile_img,
    channel_name,
    comment_good_state,
    good_state,
  } = props.commentObject

  const profileObject = {
    profileImg: profile_img,
    email: write_channel_email || email,
  }

  const [openReplyInput, setOpenReplyInput] = useReplyInput()
  // 임시 데이터
  const isLogin = true

  const userInfo = useRecoilValue(userInfoState)
  const myEmail = userInfo.email
  // 임시 data
  const isMyPost = myEmail === write_channel_email || myEmail === email
  const [replyCommentList, setReplyCommentList] = useReplyComment()
  const [backReplyCommentList, setBackReplyCommentList] = useRecoilState(
    replyCommentListState
  )
  let replyCommenContent
  if (replyCommentList.length !== 0) {
    replyCommenContent = replyCommentList.map((element, Idx) => {
      return (
        <Div width="100%" margin="16px 0 0 0">
          <Comment key={`comment${Idx}`} commentObject={element} />
        </Div>
      )
    })
  }
  const addReplyCommentEvent = () => {
    alert(`댓글 번호가 ${comment_idx}인 대댓글 불러오는 api`)
    const tmpReplyCommentList = [...replyCommentList, ...backReplyCommentList]
    setReplyCommentList(tmpReplyCommentList)
  }
  const openReplyCommentEvent = () => {
    if (replyCommentList.length === 0) {
      addReplyCommentEvent()
    } else {
      setReplyCommentList([])
    }
  }

  return (
    <Div display="flex" alignItems="start" width="100%">
      <Profile
        width={(write_channel_email && "40px") || "24px"}
        profileObject={profileObject}
      />
      <CommentContent position="relative" margin="0 0 0 12px">
        <Div display="flex">
          <Div margin="0 3px 0 0">
            <P fontSize="12px">{channel_name}</P>
          </Div>
          <Div>
            <P fontSize="12px" color="gray">
              {comment_time || reply_comment_time}
            </P>
          </Div>
        </Div>
        <Div position="absolute" top="0" right="-15px">
          {(isMyPost === true && (
            <SeeMore
              modify
              delete
              alarm={true}
              parent={comment_idx === undefined ? "reply_comment" : "comment"}
              parentInfo={comment_idx || reply_comment_idx}
              width="25px"
            />
          )) || (
            <SeeMore
              report
              parent={comment_idx === undefined ? "reply_comment" : "comment"}
              parentInfo={comment_idx || reply_comment_idx}
              width="25px"
            />
          )}
        </Div>
        <Div padding="0 20px 0 0">
          <P fontSize="sm">{comment_contents || reply_comment_contents}</P>
        </Div>
        <Div display="flex" margin="7px 0 0 0">
          <CommentLike
            goodState={good_state || comment_good_state}
            goodCount={comment_good_count || reply_comment_good_count}
          />
          <Div pointer margin="0 0 0 10px">
            <P onClick={() => setOpenReplyInput()} fontSize="sm">
              대댓글
            </P>
          </Div>
        </Div>
        {openReplyInput && (
          <Div width="100%" margin="5px 0 0 0">
            <CommentInput commentType="reply" idx={comment_idx} />
          </Div>
        )}
        {reply_comment_count > 0 && (
          <Div>
            <IconText
              onClick={openReplyCommentEvent}
              src="/assets/images/replyCommentArrow.svg"
              text={`대댓글 ${reply_comment_count}개`}
              fontSize="sm"
            />
          </Div>
        )}
        {replyCommentList.length > 0 && (
          <React.Fragment>
            <Div width="100%">{replyCommenContent}</Div>
            {replyCommentList.length < reply_comment_count && (
              <Div margin="7px 0 0 0">
                <IconText
                  onClick={addReplyCommentEvent}
                  src="/assets/images/commentMore.svg"
                  text={`대댓글 더보기`}
                  fontSize="sm"
                />
              </Div>
            )}
          </React.Fragment>
        )}
      </CommentContent>
    </Div>
  )
}

export default Comment
