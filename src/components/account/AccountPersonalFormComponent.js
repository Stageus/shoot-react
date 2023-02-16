import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useRecoilState } from "recoil"

import Div from "../basic/Div"
import P from "../basic/P"
import EventInput from "../common/EventInput"
import SmallEventInput from "../common/SmallEventInput"
import useInput from "../../hooks/useInput"
import useValidationInput from "../../hooks/useValidationInput"
import useFocusInput from "../../hooks/useFocusInput"

import { signUpState } from "../../recoil/accountState"

const SelectBox = styled.select`
  width: 360px;
  height: 48px;
  font-size: 18px;
  border: none;
  margin-left: 20px;
  &:focus {
    outline: none;
  }
`

const AccountPersonalFormComponent = () => {
  const channelNameRegExp = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,32}$/
  const channelNameErrorMessage = "올바른 형식의 이메일을 입력해주세요."
  const yearRegExp = /^(19[0-9][0-9]|20\d{2})$/
  const monthRegExp = /^(0[0-9]|1[0-2])$/
  const dayRegExp = /^(0[1-9]|[1-2][0-9]|3[0-1])$/
  const birthErrorMessage = "올바른 생년월일을 입력해주세요."

  const [channelName, onChangeChannelName] = useInput()
  const [channelNameMessage, isChannelName, onChangeChannelNameValidation] =
    useValidationInput(channelNameRegExp, channelNameErrorMessage)
  const [channelNameFocus, onFocusChannelName, onBlurChannelName] =
    useFocusInput()

  const [year, onChangeYear] = useInput()
  const [yearMessage, isYear, onChangeYearValidation] = useValidationInput(
    yearRegExp,
    birthErrorMessage
  )
  const [yearFocus, onFocusYear, onBlurYear] = useFocusInput()

  const [month, onChangeMonth] = useInput()
  const [monthMessage, isMonth, onChangeMonthValidation] = useValidationInput(
    monthRegExp,
    birthErrorMessage
  )
  const [monthFocus, onFocusMonth, onBlurMonth] = useFocusInput()

  const [day, onChangeDay] = useInput()
  const [dayMessage, isDay, onChangeDayValidation] = useValidationInput(
    dayRegExp,
    birthErrorMessage
  )
  const [dayFocus, onFocusDay, onBlurDay] = useFocusInput()

  const [selected, setSelected] = useState("")

  const [signUp, setSignUp] = useRecoilState(signUpState)

  useEffect(() => {
    if (isYear && isMonth && isDay) {
      setSignUp({
        ...signUp,
        birth: `${year}-${month}-${day}`, // YYYY-mm-DD
      })
    }

    if (selected) {
      if (selected == "남자") {
        setSignUp({
          ...signUp,
          sex: 1,
        })
      } else if (selected == "여자") {
        setSignUp({
          ...signUp,
          sex: 2,
        })
      } else {
        setSignUp({
          ...signUp,
          sex: 0,
        })
      }
    }

    if (isChannelName) {
      setSignUp({
        ...signUp,
        channelName: channelName,
      })
    }
  }, [year, month, day, selected, channelName])

  const handleSelect = (e) => {
    setSelected(e.target.value)
  }

  return (
    <React.Fragment>
      <Div>
        <Div margin="10px 0px 10px 0px">
          <P fontSize="lg">생년월일</P>
        </Div>
        <Div>
          <Div display="flex" justifyContent="space-between" width="400px">
            <SmallEventInput
              placeholder={"년(4자)"}
              type={"text"}
              onChange={(e) => {
                onChangeYear(e)
                onChangeYearValidation(e)
              }}
              onFocus={onFocusYear}
              onBlur={onBlurYear}
              isFocus={yearFocus}
            />
            <SmallEventInput
              placeholder={"월"}
              type={"text"}
              onChange={(e) => {
                onChangeMonth(e)
                onChangeMonthValidation(e)
              }}
              onFocus={onFocusMonth}
              onBlur={onBlurMonth}
              isFocus={monthFocus}
            />
            <SmallEventInput
              placeholder={"일"}
              type={"text"}
              onChange={(e) => {
                onChangeDay(e)
                onChangeDayValidation(e)
              }}
              onFocus={onFocusDay}
              onBlur={onBlurDay}
              isFocus={dayFocus}
            />
          </Div>
          {!yearFocus ? <P color="red">{yearMessage}</P> : null}
          {!monthFocus ? <P color="red">{monthMessage}</P> : null}
          {!dayFocus ? <P color="red">{dayMessage}</P> : null}
        </Div>
      </Div>

      <Div>
        <Div margin="10px 0px 10px 0px">
          <P fontSize="lg">성별</P>
        </Div>
        <Div
          width="400px"
          height="48px"
          borderRadius="5px"
          border="1.5px solid #c8c8c8"
          fontSize="lg"
          margin="0px 0px 12px 0px"
          display="flex"
          justifyContent="flex-start"
        >
          <Div display="flex">
            <SelectBox onChange={handleSelect}>
              <option>성별</option>
              <option>남자</option>
              <option>여자</option>
            </SelectBox>
          </Div>
        </Div>
      </Div>

      <Div>
        <Div margin="10px 0px 10px 0px">
          <P fontSize="lg">채널명</P>
        </Div>
        <EventInput
          placeholder={"특수문자를 제외한 2-20글자"}
          type={"text"}
          onChange={(e) => {
            onChangeChannelName(e)
            onChangeChannelNameValidation(e)
          }}
          onFocus={onFocusChannelName}
          onBlur={onBlurChannelName}
          isFocus={channelNameFocus}
        />
        {!channelNameFocus ? <P color="red">{channelNameMessage}</P> : null}
      </Div>
    </React.Fragment>
  )
}

export default AccountPersonalFormComponent
