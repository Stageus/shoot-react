import React from "react"
import styled from "styled-components"
import { useRecoilState } from "recoil"

import { H1 } from "../basic/H"
import { Input } from "../basic/Input"
import Div from "../basic/Div"
import Img from "../basic/Img"
import { AdminLogTable } from "./AdminTable"
import useInput from "../../hooks/useInput"
import { logState } from "../../recoil/adminState"

const MainDiv = styled.main`
  position: sticky;
  width: calc(100vw - 280px);
  margin-top: 60px;
  left: 220px;
  overflow-x: auto;
`

const AdminLogComponent = () => {
  const [logEmail, onChangeLogEmail] = useInput()
  const [logURL, onChangeLogURL] = useInput()
  const [log, setLog] = useRecoilState(logState)

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
          placeholder="이메일 검색"
          border="1px solid #c8c8c8"
          fontSize="sm"
          borderRadius="5px"
          padding="0px 0px 0px 10px"
          margin="10px 10px 0px 0px"
          onChange={(e) => {
            onChangeLogEmail(e)
          }}
        />
        <Input
          width="120px"
          height="22px"
          placeholder="경로 검색"
          border="1px solid #c8c8c8"
          fontSize="sm"
          borderRadius="5px"
          padding="0px 0px 0px 10px"
          margin="10px 10px 0px 0px"
          onChange={(e) => {
            onChangeLogURL(e)
          }}
        />
        <Div
          display="flex"
          height="22px"
          margin="10px 10px 0px 0px"
          onClick={() => {
            // let email = encodeURIComponent(logEmail)
            // let path = encodeURIComponent(logURL)

            fetch(
              `https://api.슛.site/log/all?email=${
                logEmail ? logEmail : undefined
              }&path=${logURL ? logURL : undefined}`,
              { method: "GET", credentials: "include" }
            ).then(async (res) => {
              const result = await res.json()
              console.log(res)
              setLog(result.data)
              console.log(log)
            })
          }}
        >
          <Div width="20px" height="20px" pointer>
            <Img src="/assets/images/adminSearch.svg" />
          </Div>
        </Div>
      </Div>

      <AdminLogTable />
    </MainDiv>
  )
}

export default AdminLogComponent
