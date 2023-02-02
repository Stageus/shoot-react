import React, { useState } from "react"
import styled from "styled-components"

import Div from "../../basic/Div"
import Img from "../../basic/Img"
import P from "../../basic/P"
import { MdButton } from "../../basic/Button"

const TableStyle = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  width: 620px;
  margin-top: 20px;
  margin-bottom: 20px;
`

const TdStyle = styled.td`
  border: 1px solid #eeeeee;
  background: white;
  padding: 5px;
`

const ThStyle = styled.th`
  border: 1px solid #eeeeee;
  background: #ff6b6b;
  color: white;
  padding: 5px;
`

const ThInfoStyle = styled.th`
  border: 1px solid #eeeeee;
  background: white;
  padding: 5px;
  //column-span: 6;
`

const AdminModalTable = () => {
  // /report/post/{post-email}/all
  const reportPostModal = [
    {
      idx: 1,
      email: "nononononn@gmail.com",
      type: "카테고리1",
      time: "2022.12.31 21:09:30",
      contents: "어쩌고 저쩌고 이래서 신고  ",
    },
    {
      idx: 2,
      email: "nononononn@gmail.com",
      type: "카테고리2",
      time: "2022.12.31 21:09:30",
      contents: "!23",
    },
    {
      idx: 3,
      email: "nononononn@gmail.com",
      type: "카테고리3",
      time: "2022.12.31 21:09:30",
      contents: "!23",
    },
  ]

  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(0)

  return (
    <TableStyle>
      <tbody>
        <tr>
          <ThStyle>신고자</ThStyle>
          <ThStyle>신고사유</ThStyle>
          <ThStyle>신고 날짜</ThStyle>
          <ThStyle></ThStyle>
        </tr>
        {reportPostModal.map(({ idx, email, type, time, contents }) => (
          <React.Fragment>
            <tr key={idx}>
              <TdStyle>{email}</TdStyle>
              <TdStyle>{type}</TdStyle>
              <TdStyle>{time}</TdStyle>
              <TdStyle>
                <Div display="flex" width="100%">
                  <Div
                    width="20px"
                    height="20px"
                    pointer
                    onClick={() => {
                      setSelect(idx)
                      setOpen(true)
                    }}
                  >
                    <Img src="../assets/images/downArrow.svg" />
                  </Div>
                </Div>
              </TdStyle>
            </tr>
            {idx === select && open && (
              <tr>
                <ThInfoStyle colSpan="4">
                  <Div display="flex" width="100%" direction="column">
                    <P>신고자: {email}</P>
                    <P>신고사유: {type}</P>
                    <P>신고 날짜: {time}</P>
                    <P>신고 내용: {contents}</P>
                  </Div>

                  <MdButton backgroundColor="red" margin="5px">
                    <P color="white" fontSize="sm" fontWeight="700">
                      정지하기
                    </P>
                  </MdButton>
                  <MdButton
                    backgroundColor="gray"
                    margin="5px"
                    onClick={() => {
                      setOpen(false)
                      setSelect(0)
                    }}
                  >
                    <P color="white" fontSize="sm" fontWeight="700">
                      닫기
                    </P>
                  </MdButton>
                </ThInfoStyle>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </TableStyle>
  )
}

export default AdminModalTable
