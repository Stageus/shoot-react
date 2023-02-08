import React, { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"

import Div from "../basic/Div"
import P from "../basic/P"
import Img from "../basic/Img"
import HeaderSearchHistortyAutoSave from "./HeaderSearchHistortyAutoSave"
import {
  serchHistoryOpenState,
  searchHistoryListState,
} from "../../recoil/headerState"

const HeaderSearchHistoryListComponent = () => {
  const [searchHistoryList, setSearchHistoryList] = useRecoilState(
    searchHistoryListState
  )
  let searchHistoryContent
  if (searchHistoryList.length !== 0) {
    searchHistoryContent = searchHistoryList.map((element) => {
      return (
        <Div
          key={`searchHistoryBox_${element.search_idx}`}
          className="searchHistoryBox"
          id={`searchHistoryBox_${element.search_idx}`}
          display="flex"
          width="100%"
          justifyContent="space-between"
          margin="5px 0"
        >
          <Div pointer>
            <P id={`searchHistory_${element.search_idx}`} pointer>
              {element.contents}
            </P>
          </Div>
          <Div pointer width="15px" height="20px">
            <Img
              id={`deleteHistory_${element.search_idx}`}
              src="/assets/images/close.svg"
            />
          </Div>
        </Div>
      )
    })
  }

  const insertSearchValueEvent = (e) => {
    if (e.target.id.includes("searchHistory")) {
      document.getElementById("searchInput").value = e.target.innerText
    }
  }

  const deleteSearchHistoryEvent = (e) => {
    if (e.target.id.includes("deleteHistory")) {
      const idx = parseInt(e.target.id.split("_")[1])

      alert(`${idx}번 검색기록 삭제 api`)
      let tmpSearchHistoryList = []
      searchHistoryList.map((element) => {
        if (element.search_idx !== idx) {
          tmpSearchHistoryList.push(element)
        }
      })
      console.log(tmpSearchHistoryList)
      setSearchHistoryList(tmpSearchHistoryList)
    }
  }

  const deleteSearchHistoryAllEvent = () => {
    const searchHistoryBoxList =
      document.getElementsByClassName("searchHistoryBox")
    const searchHistoryBoxListLength = searchHistoryBoxList.length
    console.log(searchHistoryBoxList)
    for (let count = 0; count < searchHistoryBoxListLength; count++) {
      const idx = searchHistoryBoxList[count].id.split("_")[1]
      alert(`${idx}번 검색기록 삭제 api`)
    }
    setSearchHistoryList([])
  }

  const searchHistoryOpen = useRecoilValue(serchHistoryOpenState)
  useEffect(() => {
    if (searchHistoryOpen === true) {
      console.log("검색기록 가져오는 api")
    }
  }, [searchHistoryOpen])

  return (
    <Div
      onClick={(e) => {
        insertSearchValueEvent(e)
        deleteSearchHistoryEvent(e)
      }}
      display={searchHistoryOpen === true ? "block" : "none"}
      width="345px"
      padding="10px"
      position="absolute"
      left="10px"
      bottom="0"
      transform="translate(0, 100%)"
      backgroundColor="white"
      borderRadius="5px"
      shadow="0 4px 4px 0 rgba(0,0,0,0.35)"
    >
      <Div display="flex" justifyContent="space-between" width="100%">
        <Div>
          <P fontSize="sm" color="gray">
            최근검색어
          </P>
        </Div>
        {searchHistoryList.length !== 0 && (
          <Div pointer>
            <P onClick={deleteSearchHistoryAllEvent} fontSize="xs" color="gray">
              전체 삭제
            </P>
          </Div>
        )}
      </Div>
      {(searchHistoryList.length !== 0 && searchHistoryContent) || (
        <Div margin="14px auto">
          <P fontSize="sm">검색 기록이 존재하지 않습니다.</P>
        </Div>
      )}
      <HeaderSearchHistortyAutoSave />
    </Div>
  )
}

export default HeaderSearchHistoryListComponent
