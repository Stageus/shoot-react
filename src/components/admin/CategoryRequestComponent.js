import React from "react"
import styled from "styled-components"

import { H1 } from "../basic/H"
import Div from "../basic/Div"
import Img from "../basic/Img"

const TableStyle = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  width: 1000px;
  margin-top: 20px;
  margin-bottom: 20px;
`
const MainDiv = styled.main`
  width: calc(100vw - 280px);
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

const CategoryRequest = () => {
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
      <H1 fontSize="lg">카테고리 요청 확인</H1>
      <TableStyle>
        <tbody>
          <tr>
            <ThStyle>번호</ThStyle>
            <ThStyle>카테고리 이름</ThStyle>
            <ThStyle>요청 횟수</ThStyle>
            <ThStyle>최근 요청 날짜</ThStyle>
            <ThStyle>추가</ThStyle>
            <ThStyle>삭제</ThStyle>
          </tr>
          {students.map(({ id, name, age, favFruit }, index) => (
            <>
              <tr key={id}>
                <TdStyle>{index + 1}</TdStyle>
                <TdStyle>{name}</TdStyle>
                <TdStyle>{age}</TdStyle>
                <TdStyle>{favFruit}</TdStyle>
                <TdStyle>
                  <Div display="flex" width="100%">
                    <Div width="20px" height="20px" pointer>
                      <Img src="/assets/images/add.svg" />
                    </Div>
                  </Div>
                </TdStyle>
                <TdStyle>
                  <Div display="flex" width="100%">
                    <Div width="20px" height="20px" pointer>
                      <Img src="/assets/images/delete.svg" />
                    </Div>
                  </Div>
                </TdStyle>
              </tr>
            </>
          ))}
        </tbody>
      </TableStyle>
    </MainDiv>
  )
}

export default CategoryRequest
