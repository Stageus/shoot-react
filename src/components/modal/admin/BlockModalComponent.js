import React, { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import styled from "styled-components"

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
import LargeEventTextarea from "../../common/LargeEventTextarea"

const SelectBox = styled.select`
  width: 74px;
  height: 15px;
  font-size: 12px;
  border: none;
  margin-left: 5px;
  &:focus {
    outline: none;
  }
  background-color: #eeeeee;
`

const BlockModalComponent = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState)
  const [blockSelected, setBlockSelected] = useRecoilState(blockSelectedState)
  const [block, setBlock] = useRecoilState(blockState)
  const [selected, setSelected] = useState("")
  const [reason, onChangeReason] = useInput()

  const handleSelect = (e) => {
    setSelected(e.target.value)
  }

  useEffect(() => {
    if (selected) {
      if (selected === "3일 정지") {
        setBlock({
          ...block,
          period: 15552000,
        })
      } else if (selected === "7일 정지") {
        setBlock({
          ...block,
          period: 36288000,
        })
      } else if (selected === "30일 정지") {
        setBlock({
          ...block,
          period: 155520000,
        })
      } else if (selected === "1초 정지") {
        setBlock({
          ...block,
          period: 1,
        })
      }
    }
    console.log(block)
  }, [selected])

  useEffect(() => {
    setBlock({
      ...block,
      reason: reason,
    })
    console.log(block)
  }, [reason])

  useEffect(() => {
    setBlock({
      ...block,
      email: blockSelected.email,
    })
    console.log(block)
  }, [])

  return (
    <Div width="480px">
      <Div margin="0px 0px 15px 0px">
        <P fontSize="lg" fontWeight="700">
          정지할 채널
        </P>
      </Div>
      <Div margin="0px 0px 15px 0px">
        <P>이메일: {blockSelected.email}</P>
      </Div>

      <Div
        direction="row"
        display="flex"
        justifyContent="space-between"
        width="100%"
        margin="0px 0px 12px 0px"
      >
        <Div>
          <Div
            width="85px"
            height="25px"
            backgroundColor="lightGray"
            fontSize="lg"
            display="flex"
          >
            <Div display="flex">
              <SelectBox onChange={handleSelect}>
                <option>3일 정지</option>
                <option>7일 정지</option>
                <option>30일 정지</option>
                <option>1초 정지</option>
              </SelectBox>
            </Div>
          </Div>
        </Div>
        <Div>
          <Div
            width="382px"
            borderRadius="5px"
            border="1px solid #C8C8C8"
            display="flex"
            justifyContent="flex-start"
          >
            <Input
              width="340px"
              placeholder="정지 이유를 적어주십시오"
              onChange={(e) => {
                onChangeReason(e)
              }}
            />
          </Div>
        </Div>
      </Div>

      <Div display="flex" width="100%">
        <MdButton backgroundColor="red" margin="5px">
          <P
            color="white"
            fontSize="sm"
            fontWeight="700"
            onClick={() => {
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
                console.log(res)
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
