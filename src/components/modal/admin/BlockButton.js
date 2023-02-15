import React from "react"
import { useRecoilState } from "recoil"

import { modalInfoState } from "../../../recoil/modalState"
import { MdButton } from "../../basic/Button"
import P from "../../basic/P"

const BlockButton = () => {
  const [modalInfo, setModalInfo] = useRecoilState(modalInfoState)

  return (
    <MdButton backgroundColor="red" margin="5px">
      <P
        color="white"
        fontSize="sm"
        fontWeight="700"
        onClick={() => {
          setModalInfo({
            ...modalInfo,
            type: "block",
          })
        }}
      >
        정지하기
      </P>
    </MdButton>
  )
}

export default BlockButton
