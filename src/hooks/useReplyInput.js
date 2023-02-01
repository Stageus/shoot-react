import { useState } from "react"

const useReplyInput = () => {
  const [openReplyInput, setOpenReplyInput] = useState(false)

  const toggleReplyInput = () => {
    setOpenReplyInput(!openReplyInput)
  }

  return [openReplyInput, toggleReplyInput]
}

export default useReplyInput
