import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import { useRecoilState, useRecoilValue } from "recoil"

import Div from "../basic/Div"
import Img from "../basic/Img"
import Input from "../basic/Input"
import P from "../basic/P"
import { serchHistoryOpenState, isLoginState, searchHistoryAutoSaveState, searchHistoryListState } from "../../recoil/headerState"

const SearchInput = styled(Input)`
    flex: 1;

    &:focus {
        outline: none;
    }
`

const HeaderSearchComponent = () => {
    const isLogin = useRecoilValue(isLoginState)
    const [searchHistoryOpen, setSearchHistoryOpen] = useRecoilState(serchHistoryOpenState)
    const [searchHistoryAutoSave, setSearchHistoryAutoSave] = useRecoilState(searchHistoryAutoSaveState)
    const [searchHistoryList, setSearchHistoryList] = useRecoilState(searchHistoryListState)
    const historyRef = useRef()

    const navigate = useNavigate()

    const searchHistoryContent = searchHistoryList.map((element) => {
        return (
            <Div key={`searchHistoryBox_${element.search_idx}`} className="searchHistoryBox" id={`searchHistoryBox_${element.search_idx}`} display="flex" width="100%" justifyContent="space-between" margin="5px 0">
                <Div pointer><P id={`searchHistory_${element.search_idx}`} pointer>{element.contents}</P></Div>
                <Div pointer width="15px" height="20px"><Img id={`deleteHistory_${element.search_idx}`} src="/assets/images/close.svg"/></Div>
            </Div>
        )
    })

    const clickOutSearchEvent = e => {
        if (historyRef.current && !historyRef.current.contains(e.target)) {
            setSearchHistoryOpen(false)
            document.removeEventListener('mousedown', clickOutSearchEvent)
        }
    }

    const openSearchHistoryEvent = () => {
        if (isLogin) {
            setSearchHistoryOpen(true)
            if (searchHistoryOpen === false){
                if (searchHistoryAutoSave) {
                    alert("최근검색어 리스트 가져오는 api")
                }
            }
            document.addEventListener('mousedown', clickOutSearchEvent)
        }
    }

    const searchEvent = () => {
        const searchContent = document.getElementById("searchInput").value;
        if (searchContent === "") {
            alert("검색어를 입력해주세요")
        }
        else {
            alert("최근검색어 리스트 추가 api")
            navigate(`/search/${searchContent}`)
            setSearchHistoryOpen(false)
        }
    }

    const insertSearchValueEvent = e => {
        if (e.target.id.includes("searchHistory")){
            document.getElementById("searchInput").value = e.target.innerText
        }
    }

    const deleteSearchHistoryEvent = e => {
        if (e.target.id.includes("deleteHistory")){
            const idx = e.target.id.split("_")[1]

            alert(`${idx}번 검색기록 삭제 api`)
            document.getElementById(`searchHistoryBox_${idx}`).remove()
        }
    }

    const deleteSearchHistoryAllEvent = () => {
        const deleteSearchHistoryList = document.getElementsByClassName('searchHistoryBox')
        while (deleteSearchHistoryList.length != 0) {
            const deleteSearchHistoryBox = deleteSearchHistoryList[0]
            const idx = deleteSearchHistoryBox.id.split("_")[1]

            alert(`${idx}번 검색기록 삭제 api`)
            deleteSearchHistoryBox.remove()
        }
        alert("최근검색어 리스트 가져오는 api")
    }

    const toggleSearchHistoryAutoSaveEvent = () => {
        if (searchHistoryAutoSave) {
            alert("자동저장 끄기 api")
            setSearchHistoryAutoSave(false)
            setSearchHistoryList([])
        }
        else {
            alert("자동저장 켜기 api")
            setSearchHistoryAutoSave(true)
        }
    }

    return (
        <Div ref={historyRef} display="flex" position="relative" width="400px" height="34px" border="1px solid #C8C8C8" borderRadius="99px">
            <SearchInput onClick={openSearchHistoryEvent} id="searchInput" type="text" placeholder="검색" autocomplete="off" margin="0 0 0 11px" padding="0" border="0"/>
            <Div onClick={searchEvent} pointer height="24px" margin="0 5px"><Img src="/assets/images/search.svg"/></Div>
            <Div onClick={e => {
                insertSearchValueEvent(e)
                deleteSearchHistoryEvent(e)
            }} display={searchHistoryOpen === true ? "block" : "none"} width="345px" padding="10px" position="absolute" left="10px" bottom="0" transform="translate(0, 100%)" backgroundColor="white" borderRadius="5px" shadow="0 4px 4px 0 rgba(0,0,0,0.35)">
                <Div display="flex" justifyContent="space-between" width="100%">
                    <Div><P fontSize="sm" color="gray">최근검색어</P></Div>
                    {
                        searchHistoryList.length !== 0 && <Div pointer><P onClick={deleteSearchHistoryAllEvent} fontSize="xs" color="gray">전체 삭제</P></Div>
                    }
                </Div>
                {
                    searchHistoryList.length !== 0 && searchHistoryContent ||
                    <Div margin="14px auto"><P fontSize="sm">검색 기록이 존재하지 않습니다.</P></Div>
                }
                <Div display="flex" justifyContent="right" width="100%">
                    <Div pointer><P onClick={toggleSearchHistoryAutoSaveEvent} fontSize="xs" color="gray">자동저장 {searchHistoryAutoSave ? "끄기" : "켜기"}</P></Div>
                </Div>
            </Div>
        </Div>
    )
}

export default HeaderSearchComponent
