import React from "react"
import styled from "styled-components"

import { H1 } from "../basic/H"
import { Input } from "../basic/Input"
import Div from "../basic/Div"
import P from "../basic/P"
import { MdButton } from "../basic/Button"
import Img from "../basic/Img"

const TableStyle = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  width: 1000px;
  margin-top: 10px;
  margin-bottom: 20px;
`
const MainDiv = styled.main`
  width: calc(100vw - 280px);
  margin-left: 220px;
  overflow-x: auto;
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

const AdminLogComponent = () => {
  const students = [
    { id: 1, name: "경제", age: 25, favFruit: "2022.12.24" },
    { id: 2, name: "수학", age: 43, favFruit: "2022.12.24" },
    { id: 3, name: "과학", age: 16, favFruit: "2022.12.24" },
    { id: 4, name: "미술", age: 29, favFruit: "2022.12.24" },
    { id: 5, name: "미술", age: 29, favFruit: "2022.12.24" },
    { id: 6, name: "미술", age: 29, favFruit: "2022.12.24" },
    { id: 7, name: "미술", age: 29, favFruit: "2022.12.24" },
    { id: 8, name: "미술", age: 29, favFruit: "2022.12.24" },
    { id: 9, name: "미술", age: 29, favFruit: "2022.12.24" },
    { id: 10, name: "미술", age: 29, favFruit: "2022.12.24" },
    { id: 11, name: "미술", age: 29, favFruit: "2022.12.24" },
    { id: 12, name: "미술", age: 29, favFruit: "2022.12.24" },
    { id: 13, name: "미술", age: 29, favFruit: "2022.12.24" },
    { id: 14, name: "미술", age: 29, favFruit: "2022.12.24" },
    { id: 15, name: "미술", age: 29, favFruit: "2022.12.24" },
    { id: 16, name: "미술", age: 29, favFruit: "2022.12.24" },
    { id: 17, name: "미술", age: 29, favFruit: "2022.12.24" },
    { id: 18, name: "미술", age: 29, favFruit: "2022.12.24" },
  ]
  return (
    <MainDiv>
      <H1 fontSize="lg">로그 확인</H1>
      <Div
        display="flex"
        width="100%"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Input
          width="120px"
          height="22px"
          placeholder="내용을 입력하세요"
          border="1px solid #c8c8c8"
          fontSize="sm"
          borderRadius="5px"
          padding="0px 0px 0px 10px"
          margin="10px 10px 0px 0px"
        />
        <Input
          width="120px"
          height="22px"
          placeholder="내용을 입력하세요"
          border="1px solid #c8c8c8"
          fontSize="sm"
          borderRadius="5px"
          padding="0px 0px 0px 10px"
          margin="10px 10px 0px 0px"
        />
        <Div display="flex" height="22px" margin="10px 10px 0px 0px">
          <Div width="20px" height="20px" pointer>
            <Img src="/assets/images/adminSearch.svg" />
          </Div>
        </Div>
      </Div>

      <TableStyle>
        <tbody>
          <tr>
            <ThStyle>이메일</ThStyle>
            <ThStyle>IP</ThStyle>
            <ThStyle>URL</ThStyle>
            <ThStyle>시간</ThStyle>
            <ThStyle>응답</ThStyle>
            <ThStyle></ThStyle>
          </tr>
          {students.map(({ id, name, age, favFruit }) => (
            <>
              <tr key={id}>
                <TdStyle>{id}</TdStyle>
                <TdStyle>{name}</TdStyle>
                <TdStyle>{age}</TdStyle>
                <TdStyle>{favFruit}</TdStyle>
                <TdStyle>response</TdStyle>
                <TdStyle>
                  <Div display="flex" width="100%">
                    <Div width="20px" height="20px" pointer>
                      <Img src="../assets/images/downArrow.svg" />
                    </Div>
                  </Div>
                </TdStyle>
              </tr>
              <tr>
                <ThInfoStyle colSpan="6">
                  <P>이메일: email</P>
                  <P>IP: ip</P>
                  <P>URL: url</P>
                  <P>시간: time</P>
                  <P>상태코드: code</P>
                  <P>Result: data</P>
                  <MdButton backgroundColor="error" margin="5px">
                    <P color="white" fontSize="sm" fontWeight="700">
                      정지하기
                    </P>
                  </MdButton>
                  <MdButton backgroundColor="gray" margin="5px">
                    <P color="white" fontSize="sm" fontWeight="700">
                      닫기
                    </P>
                  </MdButton>
                </ThInfoStyle>
              </tr>
            </>
          ))}
        </tbody>
      </TableStyle>
    </MainDiv>
  )
}

export default AdminLogComponent
