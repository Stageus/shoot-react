import React, { useRef, useEffect } from "react"
import styled from "styled-components"

import { H1 } from "../basic/H"
import Div from "../basic/Div"
import Stats from "./Stats"

const MainDiv = styled.main`
  position: fixed;
  width: calc(100vw - 280px);
  top: 60px;
  left: 220px;
  overflow-x: auto;
`
const AdminStatisticsComponent = () => {
  const chartData = {
    labels: [
      "01Jan",
      "02Jan",
      "03Jan",
      "04Jan",
      "05Jan",
      "06Jan",
      "07Jan",
      "08Jan",
    ],
    datasets: [
      {
        label: "가입자 수",
        data: [10, 40, 100, 400, 338, 500, 550, 700],
        borderColor: "#FF6B6B",
        backgroundColor: "transparent",
        borderWidth: 3,
        fill: false,
        tension: 0.3,
      },
    ],
  }

  const chartOption = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <MainDiv>
      <H1 fontSize="lg">통계 확인</H1>
      <Div width="980px" margin="10px 0px 0px 0px">
        <Stats chartData={chartData} chartOption={chartOption} />
      </Div>
    </MainDiv>
  )
}

export default AdminStatisticsComponent
