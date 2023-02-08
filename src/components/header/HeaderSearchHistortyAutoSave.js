import React, { useEffect } from "react"
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil"

import Div from "../basic/Div"
import P from "../basic/P"
import {
  searchHistoryAutoSaveState,
  searchHistoryListState,
  serchHistoryOpenState,
} from "../../recoil/headerState"

const HeaderSearchHistortyAutoSave = () => {
  const [searchHistoryAutoSave, setSearchHistoryAutoSave] = useRecoilState(
    searchHistoryAutoSaveState
  )
  const setSearchHistoryList = useSetRecoilState(searchHistoryListState)

  const toggleSearchHistoryAutoSaveEvent = () => {
    if (searchHistoryAutoSave) {
      alert("자동저장 끄기 api")
      setSearchHistoryAutoSave(false)
      setSearchHistoryList([])
    } else {
      alert("자동저장 켜기 api")
      setSearchHistoryAutoSave(true)
    }
  }

  const serchHistoryOpen = useRecoilValue(serchHistoryOpenState)
  useEffect(() => {
    if (serchHistoryOpen) {
      console.log("검색기록 자동 저장 상태 api")
    }
  })

  return (
    <Div display="flex" justifyContent="right" width="100%">
      <Div pointer>
        <P
          onClick={toggleSearchHistoryAutoSaveEvent}
          fontSize="xs"
          color="gray"
        >
          자동저장 {searchHistoryAutoSave ? "끄기" : "켜기"}
        </P>
      </Div>
    </Div>
  )
}

export default HeaderSearchHistortyAutoSave
