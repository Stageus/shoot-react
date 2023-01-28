import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import {
  Chart,
  registerables,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js"

import { H1 } from "../basic/H"
import Div from "../basic/Div"

const MainDiv = styled.main`
  width: calc(100vw - 280px);
  overflow-x: auto;
`

const AdminStatisticsComponent = () => {
  Chart.register(...registerables)
  Chart.register(LineController, LineElement, PointElement, LinearScale, Title)
  const canvasDom = useRef(null)

  useEffect(() => {
    const drawChart = async () => {
      const ctx = canvasDom.current.getContext("2d")
      console.log(ctx)

      await new Chart(ctx, {
        type: "line",
        data: {
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
              data: [10, 30, 240, 100, 230, 400, 350, 140],
            },
          ],
        },
      })
    }

    drawChart()
  }, [])

  return (
    <MainDiv>
      <H1 fontSize="lg">통계 확인</H1>
      <Div width="980px" heigth="578px" margin="10px 0px 0px 0px">
        <canvas ref={canvasDom}></canvas>
      </Div>
    </MainDiv>
  )
}

export default AdminStatisticsComponent
