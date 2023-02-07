import { useState } from "react"

const useDifferenceTime = () => {
  const [diffenrenceTime, setDiffenrenceTime] = useState("")

  const setDiffenrenceTimeLogic = (nowTime, objectTime) => {
    const differenceTime = Math.floor(
      (nowTime.getTime() - objectTime.getTime()) / 1000
    )

    if (differenceTime < 60) {
      setDiffenrenceTime(`${differenceTime}초 전`)
    } else if (differenceTime < 60 * 60) {
      setDiffenrenceTime(`${Math.floor(differenceTime / 60)}분 전`)
    } else if (differenceTime < 60 * 60 * 24) {
      setDiffenrenceTime(`${Math.floor(differenceTime / (60 * 60))}시간 전`)
    } else if (differenceTime < 60 * 60 * 24 * 30) {
      setDiffenrenceTime(`${Math.floor(differenceTime / (60 * 60 * 24))}일 전`)
    } else if (differenceTime < 60 * 60 * 24 * 365) {
      setDiffenrenceTime(
        `${Math.floor(differenceTime / (60 * 60 * 24 * 30))}달 전`
      )
    } else {
      setDiffenrenceTime(
        `${Math.floor(differenceTime / (60 * 60 * 24 * 365))}년 전`
      )
    }
  }

  return [diffenrenceTime, setDiffenrenceTimeLogic]
}

export default useDifferenceTime
