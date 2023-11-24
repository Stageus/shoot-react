import React from "react"
import styled from "styled-components"

import { AdminReportChannelTable } from "./AdminTable"

const TableStyle = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  width: 1000px;
  margin-top: 20px;
  margin-bottom: 50px;
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

const AdminReportChannel = () => {
  return <AdminReportChannelTable />
}

export default AdminReportChannel
