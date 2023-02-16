import React, { useEffect } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import { useSetRecoilState, useRecoilValue } from "recoil"

import Div from "../basic/Div"
import Img from "../basic/Img"
import { Input } from "../basic/Input"
import HeaderSearchHistoryListComponent from "./HeaderSearchHistoryListComponent"
import { serchHistoryOpenState, isLoginState } from "../../recoil/headerState"
import { usePostFetch } from "../../hooks/useFetch"
import { modalInfoState, modalOpenState } from "../../recoil/modalState"

const SearchInput = styled(Input)`
  flex: 1;

  &:focus {
    outline: none;
  }
`

const HeaderSearchComponent = () => {
  const isLogin = useRecoilValue(isLoginState)
  const setSearchHistoryOpen = useSetRecoilState(serchHistoryOpenState)
  const navigate = useNavigate()

  const historyRef = useRef()
  const closeSearchHistoryEvent = (e) => {
    if (historyRef.current && !historyRef.current.contains(e.target)) {
      setSearchHistoryOpen(false)
      document.removeEventListener("mousedown", closeSearchHistoryEvent)
    }
  }

  const openSearchHistoryEvent = () => {
    if (isLogin) {
      setSearchHistoryOpen(true)
      document.addEventListener("mousedown", closeSearchHistoryEvent)
    }
  }

  const setOpenModal = useSetRecoilState(modalOpenState)
  const setModalInfo = useSetRecoilState(modalInfoState)

  const [historyPostSources, historyPostFetchData] = usePostFetch()
  const searchEvent = () => {
    let searchContent = document.getElementById("searchInput").value
    if (searchContent === "") {
      const modalInfo = {
        type: "alert",
        content: "검색어를 입력해주세요!",
      }
      setOpenModal(true)
      setModalInfo(modalInfo)
    } else {
      if (isLogin) {
        const fetchBody = {
          keyword: searchContent,
        }
        historyPostFetchData("search-history", fetchBody)
      }
      const searchType = searchContent.slice(0, 1)
      if (searchType === "#" || searchType === "@") {
        searchContent = searchContent.slice(1, searchContent.length)
      }
      if (searchType === "#") {
        navigate(`/search/hash/${searchContent}`)
      } else if (searchType === "@") {
        navigate(`/search/channel/${searchContent}`)
      } else {
        navigate(`/search/all/${searchContent}`)
      }
      setSearchHistoryOpen(false)
    }
  }

  useEffect(() => {
    return setSearchHistoryOpen(false)
  }, [])

  return (
    <Div
      ref={historyRef}
      display="flex"
      position="relative"
      width="400px"
      height="34px"
      border="1px solid #C8C8C8"
      borderRadius="99px"
    >
      <SearchInput
        onClick={openSearchHistoryEvent}
        onBlur={closeSearchHistoryEvent}
        id="searchInput"
        type="text"
        placeholder="검색"
        autocomplete="off"
        margin="0 0 0 11px"
        padding="0"
        border="0"
      />
      <Div onClick={searchEvent} pointer height="24px" margin="0 5px">
        <Img src="/assets/images/search.svg" />
      </Div>
      <HeaderSearchHistoryListComponent />
    </Div>
  )
}

export default HeaderSearchComponent
