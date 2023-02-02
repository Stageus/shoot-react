import { useState } from "react"

const useReplyComment = () => {
  const [replyCommentList, setReplyCommentList] = useState([])

  return [replyCommentList, setReplyCommentList]
}

export default useReplyComment
