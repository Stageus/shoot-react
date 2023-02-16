import React, { useEffect } from "react"
import { useRecoilState } from "recoil"

import useInput from "../../../hooks/useInput"
import {
  blockSelectedState,
  blockState,
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
  const [block, setBlock] = useRecoilState(blockState)

  const [reason, onChangeReason] = useInput()

  useEffect(() => {
    setBlock({
      ...block,
      period: 1,
      reason: reason,
    })
  }, [reason])

  useEffect(() => {
    setBlock({
      ...block,
      email: blockSelected.email,
    })
    console.log(block)
  }, [])

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
        border="1px solid #C8C8C8"
        margin="0px 0px 12px 0px"
        display="flex"
        justifyContent="flex-start"
      >
        <Input
          width="320px"
          placeholder="정지 이유를 적어주십시오"
          onChange={(e) => {
            onChangeReason(e)
          }}
        />
      </Div>
      <Div display="flex" width="100%">
        <MdButton backgroundColor="red" margin="5px">
          <P
            color="white"
            fontSize="sm"
            fontWeight="700"
            onClick={() => {
              // 정지하기
              fetch("https://api.슛.site/block-channel", {
                credentials: "include",
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(block),
              }).then(async (res) => {
                const result = await res.json()
                console.log(result)
                console.log(block)
              })
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
