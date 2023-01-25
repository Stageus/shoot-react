import React from "react"
import styled from "styled-components"

import { H1 } from "../basic/H"
import { MdButton } from "../basic/Button"
import P from "../basic/P"
import Div from "../basic/Div"

const TableStyle = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  width: 1000px;
  margin-top: 20px;
  margin-bottom: 20px;
`
const MainDiv = styled.main`
  // border: solid 1px green;
  width: calc(100vw - 280px);
  overflow-x: auto;
  //overflow-y: scroll;
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

const CategoryUpdate = () => {
  const students = [
    { id: 1, name: "경제", favFruit: "2022.12.24" },
    { id: 2, name: "수학", favFruit: "2022.12.24" },
    { id: 3, name: "과학", favFruit: "2022.12.24" },
    { id: 4, name: "미술", favFruit: "2022.12.24" },
    { id: 5, name: "미술", favFruit: "2022.12.24" },
    { id: 6, name: "미술", favFruit: "2022.12.24" },
    { id: 7, name: "미술", favFruit: "2022.12.24" },
    { id: 8, name: "미술", favFruit: "2022.12.24" },
    { id: 9, name: "미술", favFruit: "2022.12.24" },
    { id: 10, name: "미술", favFruit: "2022.12.24" },
  ]
  return (
    <React.Fragment>
      <MainDiv>
        <H1 fontSize="lg">카테고리 추가</H1>
        <TableStyle>
          <tbody>
            <tr>
              <ThStyle>번호</ThStyle>
              <ThStyle>카테고리 이름</ThStyle>
              <ThStyle>추가 날짜</ThStyle>
              <ThStyle>삭제</ThStyle>
            </tr>
            {students.map(({ id, name, favFruit }) => (
              <>
                <tr key={id}>
                  <TdStyle>{id}</TdStyle>
                  <TdStyle>{name}</TdStyle>
                  <TdStyle>{favFruit}</TdStyle>
                  <TdStyle>
                    <MdButton backgroundColor="error">
                      <P color="white" fontSize="sm">
                        삭제하기
                      </P>
                    </MdButton>
                  </TdStyle>
                </tr>
              </>
            ))}
          </tbody>
        </TableStyle>
        <Div display="flex" width="100%" margin="0px 0px 20px 0px">
          <MdButton backgroundColor="gray">
            <P color="white" fontSize="sm">
              + 추가하기
            </P>
          </MdButton>
        </Div>
      </MainDiv>
    </React.Fragment>
  )
}

export default CategoryUpdate
