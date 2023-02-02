import { useState } from "react"

const useCommentLike = () => {
  const [commentLikeInfo, setCommentLikeInfo] = useState({
    goodState: false,
    goodCount: 0,
  })

  const toggleCommentLike = () => {
    if (commentLikeInfo.goodState) {
      setCommentLikeInfo({
        goodState: false,
        goodCount: commentLikeInfo.goodCount - 1,
      })
    } else {
      setCommentLikeInfo({
        goodState: true,
        goodCount: commentLikeInfo.goodCount + 1,
      })
    }
  }

  return [commentLikeInfo, setCommentLikeInfo, toggleCommentLike]
}

export default useCommentLike
