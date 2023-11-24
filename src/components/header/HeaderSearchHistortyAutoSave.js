import React, { useEffect } from "react"
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil"

import Div from "../basic/Div"
import P from "../basic/P"
import {
  searchHistoryAutoSaveState,
  searchHistoryListState,
  serchHistoryOpenState,
} from "../../recoil/headerState"
import { useDeleteFetch, useGetFetch, usePostFetch } from "../../hooks/useFetch"

const HeaderSearchHistortyAutoSave = () => {
  const [searchHistoryAutoSave, setSearchHistoryAutoSave] = useRecoilState(
    searchHistoryAutoSaveState
  )
  const setSearchHistoryList = useSetRecoilState(searchHistoryListState)

  const [autosavePostSources, autosavePostFetchData] = usePostFetch()
  const [autosaveDeleteSources, autosaveDeleteFetchData] = useDeleteFetch()
  const toggleSearchHistoryAutoSaveEvent = () => {
    if (searchHistoryAutoSave) {
      autosavePostFetchData("search-history-off")
      setSearchHistoryAutoSave(false)
      setSearchHistoryList([])
    } else {
      autosaveDeleteFetchData("search-history-off")
      setSearchHistoryAutoSave(true)
    }
  }

  const searchHistoryOpen = useRecoilValue(serchHistoryOpenState)
  const [autosaveGetSources, autosaveGetFetchData] = useGetFetch()
  useEffect(() => {
    if (searchHistoryOpen === true) {
      autosaveGetFetchData("search-history-off")
    }
  }, [searchHistoryOpen])

  useEffect(() => {
    if (searchHistoryOpen === true) {
      setSearchHistoryAutoSave(autosaveGetSources.data.state)
    }
  }, [autosaveGetSources])

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
