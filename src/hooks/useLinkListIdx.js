import { useState } from "react"

const useLinkListIdx = () => {
  const [linkListIdx, setLinkListIdx] = useState(0)

  return [linkListIdx, setLinkListIdx]
}

export default useLinkListIdx
