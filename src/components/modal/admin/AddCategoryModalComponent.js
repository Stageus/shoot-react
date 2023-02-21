import React, { useEffect } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import useInput from "../../../hooks/useInput"
import { categoryUpdateState } from "../../../recoil/adminState"
import { modalOpenState } from "../../../recoil/modalState"
import { SmButton } from "../../basic/Button"
import Div from "../../basic/Div"
import Img from "../../basic/Img"
import { Input } from "../../basic/Input"
import P from "../../basic/P"

const AddCategoryModalComponent = () => {
  const [categoryRequest, onChangeCategoryRequest] = useInput()
  const [categoryUpdate, setCategoryUpdate] =
    useRecoilState(categoryUpdateState)
  const setOpenModal = useSetRecoilState(modalOpenState)
  const modalCloseEvent = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    fetch("https://api.슛.site/category", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryUpdate),
    }).then(async (res) => {
      const result = await res.json()
      console.log(result)
      console.log(categoryUpdate)
    })
  }, [categoryUpdate])

  return (
    <Div margin="5px 0px 5px 0px">
      <Div
        direction="row"
        display="flex"
        justifyContent="space-between"
        width="100%"
      >
        <Div>
          <P fontSize="lg" fontWeight="700">
            카테고리 추가하기
          </P>
        </Div>

        <Div pointer width="24px">
          <Img onClick={modalCloseEvent} src="/assets/images/closeBlack.svg" />
        </Div>
      </Div>

      <Div margin="20px 0px 0px 0px">
        <Input
          width="120px"
          height="22px"
          placeholder="내용을 입력하세요"
          border="1px solid #c8c8c8"
          fontSize="sm"
          borderRadius="5px"
          padding="0px 0px 0px 10px"
          onChange={(e) => {
            onChangeCategoryRequest(e)
          }}
        />
        <SmButton
          backgroundColor="primary"
          margin="5px"
          onClick={() => {
            setCategoryUpdate({ category: categoryRequest })
            alert("카테고리 추가가 완료되었습니다.")
          }}
        >
          <P color="white" fontSize="sm" fontWeight="700">
            입력
          </P>
        </SmButton>
      </Div>
    </Div>
  )
}

export default AddCategoryModalComponent
