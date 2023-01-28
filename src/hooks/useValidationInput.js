import React, { useState } from "react"

const useValidationInput = (regExp, message) => {
  const [valueMessage, setValueMessage] = useState("")
  const [isValue, setIsValue] = useState(false)

  const onChangeValue = (e) => {
    if (typeof regExp == "string") {
      if (regExp === e.target.value) {
        setIsValue(true)
        setValueMessage("")
      } else {
        setValueMessage(message)
        setIsValue(false)
      }
    } else {
      if (regExp.test(e.target.value)) {
        setIsValue(true)
        setValueMessage("")
      } else {
        setIsValue(false)
        setValueMessage(message)
      }
    }
  }

  return [valueMessage, isValue, onChangeValue]
}

export default useValidationInput
