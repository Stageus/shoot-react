import React, { useState, useEffect } from "react"

const useInput = () => {
  const [value, setValue] = useState("")

  const onChangeValue = (e) => {
    setValue(e.target.value)
  }

  return [value, onChangeValue]
}

export default useInput
