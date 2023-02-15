import React from "react"
import { useRecoilState } from "recoil"

import {
  blockSelectedState,
  reportPostSelectState,
} from "../../../recoil/adminState"
import { modalOpenState } from "../../../recoil/modalState"
import { MdButton } from "../../basic/Button"
import Div from "../../basic/Div"
import { Input } from "../../basic/Input"
import P from "../../basic/P"

const BlockModalComponent = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState)
  const [blockSelected, setBlockSelected] = useRecoilState(blockSelectedState)

  return (
    <Div>
      <Div margin="0px 0px 15px 0px">
        <P fontSize="lg" fontWeight="700">
          정지할 채널
        </P>
      </Div>
      <Div margin="0px 0px 15px 0px">
        <P>이메일: {blockSelected.email}</P>
      </Div>
      <Div
        width="362px"
        borderRadius="5px"
        border="1.5px solid #C8C8C8"
        margin="0px 0px 12px 0px"
        display="flex"
        justifyContent="flex-start"
      >
        <Input width="320px" placeholder="정지 이유를 적어주십시오" />
      </Div>
      <Div display="flex" width="100%">
        <MdButton backgroundColor="red" margin="5px">
          <P
            color="white"
            fontSize="sm"
            fontWeight="700"
            onClick={() => {
              // 정지하기
            }}
          >
            정지하기
          </P>
        </MdButton>
        <MdButton
          backgroundColor="gray"
          margin="5px"
          onClick={() => {
            setModalOpen(false)
          }}
        >
          <P color="white" fontSize="sm" fontWeight="700">
            취소하기
          </P>
        </MdButton>
      </Div>
    </Div>
  )
}

export default BlockModalComponent
