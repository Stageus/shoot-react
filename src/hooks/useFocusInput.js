import React, { useState } from "react"

const useFocusInput = () => {
  const [valueFocus, setValueFocus] = useState(false)

  const onFocusValue = () => {
    setValueFocus(true)
  }

  const onBlurValue = () => {
    setValueFocus(false)
  }

  return [valueFocus, onFocusValue, onBlurValue]
}

export default useFocusInput
