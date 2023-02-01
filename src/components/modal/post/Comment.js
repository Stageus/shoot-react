import React from "react"
import styled from "styled-components"
import { useRecoilValue } from "recoil"

import Div from "../../basic/Div"
import P from "../../basic/P"
import Profile from "../../common/Profile"
import SeeMore from "../../common/SeeMore"
import { IconText } from "../../common/IconText"
import CommentInput from "./CommentInput"
import useReplyInput from "../../../hooks/useReplyInput"
import { userInfoState } from "../../../recoil/headerState"

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
  const isLogin = false

  const like = () => {
    if (isLogin === false) {
      alert(
        "로그인 후 이용 가능합니다. 로그인 하시겠습니까? 알람 띄우기 기능 구현"
      )
    } else {
      if (comment_idx !== undefined) {
        if (good_state) {
          alert(`댓글 번호가 ${comment_idx}인 게시글 좋아요 취소 api`)
        } else {
          alert(`댓글 번호가 ${comment_idx}인 게시글 좋아요 api`)
        }
      } else {
        if (good_state) {
          alert(`대댓글 번호가 ${reply_comment_idx}인 게시글 좋아요 취소 api`)
        } else {
          alert(`대댓글 번호가 ${reply_comment_idx}인 게시글 좋아요 api`)
        }
      }
      alert("댓글 정보 다시 불러오느 api")
    }
  }

  const userInfo = useRecoilValue(userInfoState)
  const myEmail = userInfo.email
  // 임시 data
  const isMyPost = myEmail === write_channel_email || myEmail === email

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
          <IconText
            onClick={like}
            src={
              (good_state === true && "/assets/images/likeFill.svg") ||
              (comment_good_state === true && "/assets/images/likeFill.svg") ||
              "/assets/images/like.svg"
            }
            text={comment_good_count || reply_comment_good_count}
            width="18px"
            fontColor="gray"
            fontSize="sm"
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
              src="/assets/images/replyCommentArrow.svg"
              text={`대댓글 ${reply_comment_count}개`}
              fontSize="sm"
            />
          </Div>
        )}
      </CommentContent>
    </Div>
  )
}

export default Comment
