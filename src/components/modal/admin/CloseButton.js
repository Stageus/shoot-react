import React from "react"
import { useRecoilState } from "recoil"
import { modalOpenState } from "../../../recoil/modalState"
import { MdButton } from "../../basic/Button"
import P from "../../basic/P"

const CloseButton = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState)

  return (
    <MdButton
      backgroundColor="gray"
      margin="5px"
      onClick={() => {
        setModalOpen(false)
      }}
    >
      <P color="white" fontSize="sm" fontWeight="700">
        닫기
      </P>
    </MdButton>
  )
}

export default CloseButton
