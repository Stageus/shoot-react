import React, { useEffect, useState } from "react"
import { Outlet, Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { MdButton } from "../basic/Button"
import Div from "../basic/Div"
import P from "../basic/P"

import { H1 } from "../basic/H"
import Img from "../basic/Img"

const MainDiv = styled.main`
  position: fixed;
  width: calc(100vw - 280px);
  top: 60px;
  left: 220px;
  overflow-x: auto;
`

const SelectBox = styled.select`
  width: 70px;
  height: 24px;
  font-size: 15px;
  border: none;
  margin-left: 5px;
  &:focus {
    outline: none;
  }
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`

const AdminReportComponent = () => {
  const [selected, setSelected] = useState("")
  const navigate = useNavigate()

  const handleSelect = (e) => {
    setSelected(e.target.value)
  }

  useEffect(() => {
    if (selected) {
      if (selected === "게시글") {
        navigate("/admin/report/post")
      } else if (selected === "채널") {
        navigate("/admin/report/channel")
      } else if (selected === "댓글") {
        navigate("/admin/report/comment")
      } else if (selected === "대댓글") {
        navigate("/admin/report/reply-comment")
      }
    }
  }, [selected])

  return (
    <React.Fragment>
      <MainDiv>
        <Div
          direction="row"
          display="flex"
          justifyContent="space-between"
          width="100%"
        >
          <Div>
            <H1 fontSize="lg">신고 확인</H1>
          </Div>
          <Div display="flex">
            <Div width="20px">
              <Img src={`/assets/images/sort.svg`} />
            </Div>
            <Div display="flex">
              <SelectBox onChange={handleSelect}>
                <option>게시글</option>
                <option>채널</option>
                <option>댓글</option>
                <option>대댓글</option>
              </SelectBox>
            </Div>
          </Div>
        </Div>

        <Outlet />
      </MainDiv>
    </React.Fragment>
  )
}

export default AdminReportComponent
