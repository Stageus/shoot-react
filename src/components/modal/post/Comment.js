import React from "react"
import styled from "styled-components"

import Div from "../../basic/Div"
import P from "../../basic/P"
import Profile from "../../common/Profile"
import SeeMore from "../../common/SeeMore"
import { IconText } from "../../common/IconText"
import CommnetInput from "./CommentInput"
import useReplyInput from "../../../hooks/useReplyInput"

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
        <Div position="absolute" top="0" right="-30px">
          <SeeMore />
        </Div>
        <Div padding="0 20px 0 0">
          <P fontSize="sm">{comment_contents || reply_comment_contents}</P>
        </Div>
        <Div display="flex" margin="7px 0 0 0">
          <IconText
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
            <CommnetInput commentType="reply" idx={comment_idx} />
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
