import React from "react"
import styled from "styled-components"

import theme from "../../theme"
import Div from "../basic/Div"
import Img from "../basic/Img"
import Input from "../basic/Input"
import P from "../basic/P"
import { MdButton } from "../basic/Button"
import { IconText } from "../common/IconText"
import HeaderAlarm from "./HeaderAlarm"

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 3;
    background-color: ${props => props.theme.color.white};
`

const SearchInput = styled(Input)`
    flex: 1;

    &:focus {
        outline: none;
    }
`

const HeaderComponent = () => {
    const loginCheck = true

    const tmpSearchHistoryList = [
        {search_idx: 1, contents: "이러저러한 검색어 1번 검색어"},
        {search_idx: 2, contents: "이러저러한 검색어 2번 검색어"},
        {search_idx: 3, contents: "이러저러한 검색어 3번 검색어"},
        {search_idx: 4, contents: "이러저러한 검색어 4번 검색어"}
    ]
    const searchHistoryContent = tmpSearchHistoryList.map((element) => {
        return (
            <Div key={`searchHistoryBox_${element.search_idx}`} className="searchHistoryBox" id={`searchHistoryBox_${element.search_idx}`} display="flex" width="100%" justifyContent="space-between" margin="5px 0">
                <Div pointer><P id={`searchHistory_${element.search_idx}`} pointer>{element.contents}</P></Div>
                <Div pointer width="15px" height="20px"><Img id={`deleteHistory_${element.search_idx}`} src="./assets/images/close.svg"/></Div>
            </Div>
        )
    })

    const moveHomeEvent = () => {
        alert("홈으로 가는 이벤트 구현")
    }

    const openSearchHistoryEvent = () => {
        if (loginCheck) {
            alert("최근검색어 리스트 확인 기능 구현")
            alert("최근검색어 창 열기 이벤트 구현")
        }
    }

    const searchEvent = () => {
        const searchContent = document.getElementById("searchInput").value;
        if (searchContent === "") {
            alert("검색어를 입력해주세요")
        }
        else {
            alert("최근검색어 리스트 추가 기능 구현")
            alert(`${searchContent} 검색함 기능 구현`)
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

            alert(`${idx}번 검색기록 삭제 기능 구현`)
            document.getElementById(`searchHistoryBox_${idx}`).remove()
        }
    }

    const deleteSearchHistoryAllEvent = e => {
        const deleteSearchHistoryList = document.getElementsByClassName('searchHistoryBox')
        while (deleteSearchHistoryList.length != 0) {
            const deleteSearchHistoryBox = deleteSearchHistoryList[0]
            const idx = deleteSearchHistoryBox.id.split("_")[1]

            alert(`${idx}번 검색기록 삭제 기능 구현`)
            deleteSearchHistoryBox.remove()
        }
        alert("최근검색어 리스트 확인 기능 구현")
    }

    const isSave = true
    const toggleSearchHistorySaveEvent = () => {
        if (isSave) {
            alert("자동저장 끄기 기능 구현")
        }
        else {
            alert("자동저장 켜기 기능 구현")
        }
        alert("최근검색어 리스트 확인 기능 구현")
    }

    const moveUploadEvent = () => {
        alert("업로드 페이지로 이동 기능 구현")
    }

    const moveLoginEvent = () => {
        alert("로그인 페이지로 이동 기능 구현")
    }

    const openProfilePopupEvent = () => {
        alert("프로필 팝업 열림 이벤트 기능 구현")
    }

    const moveMyChannelEvent = () => {
        alert("내 채널로 이동")
    }

    const logoutLogic = () => {
        alert("로그아웃")
    }

    return (
        <Header>
            <Div onClick={moveHomeEvent} pointer height="50%" margin="0 0 0 40px"><Img src="./assets/images/shootLogo.svg"/></Div>
            <Div display="flex" position="relative" width="400px" height="34px" border="1px solid #C8C8C8" borderRadius="99px">
                <SearchInput onClick={openSearchHistoryEvent} id="searchInput" type="text" placeholder="검색" margin="0 0 0 11px" padding="0" border="0"/>
                <Div onClick={searchEvent} pointer height="24px" margin="0 5px"><Img src="./assets/images/search.svg"/></Div>
                <Div onClick={e => {
                    insertSearchValueEvent(e)
                    deleteSearchHistoryEvent(e)
                }} width="345px" padding="10px" position="absolute" left="10px" bottom="0" transform="translate(0, 100%)" backgroundColor="white" borderRadius="5px" shadow="0 4px 4px 0 rgba(0,0,0,0.35)">
                    <Div display="flex" justifyContent="space-between" width="100%">
                        <Div><P fontSize="sm" color="gray">최근검색어</P></Div>
                        {
                            tmpSearchHistoryList.length !== 0 && <Div pointer><P onClick={deleteSearchHistoryAllEvent} fontSize="xs" color="gray">전체 삭제</P></Div>
                        }
                    </Div>
                    {
                        tmpSearchHistoryList.length !== 0 && searchHistoryContent ||
                        <Div margin="14px auto"><P fontSize="sm">검색 기록이 존재하지 않습니다.</P></Div>
                    }
                    <Div display="flex" justifyContent="right" width="100%">
                        <Div onClick={toggleSearchHistorySaveEvent} pointer><P fontSize="xs" color="gray">자동저장 {isSave ? "끄기" : "켜기"}</P></Div>
                    </Div>
                </Div>
            </Div>
            <Div display="flex">
                <MdButton onClick={moveUploadEvent} margin="0 15px 0 0" border="2px solid #FF6B6B" backgroundColor="white">
                    <Div display="flex" width="100%" height="100%" borderRadius="5px">
                        <Div width="12px" height="12px" margin="0 12px 0 0"><Img src="./assets/images/uploadPlus.svg"/></Div>
                        <Div><P color="primary" fontSize="sm" fontWeight={700}>업로드</P></Div>
                    </Div>
                </MdButton>
                {
                    loginCheck === true && 
                        <React.Fragment>
                            <HeaderAlarm/>
                            <Div position="relative" margin="0 27px 0 0">
                                <IconText onClick={openProfilePopupEvent} src="./assets/images/user.svg" text="HowToUseFigma" width="40px"/>
                                <Div display="flex" direction="column" position="absolute" bottom="0" right="0" transform="translate( 0, 80% )" padding="10px" borderRadius="5px" backgroundColor="white" shadow="0 4px 4px 0 rgba(0,0,0,0.35)">
                                    <IconText onClick={moveMyChannelEvent} src="./assets/images/edit.svg" text="내 채널"/>
                                    <IconText onClick={logoutLogic} src="./assets/images/report.svg" text="로그아웃"/>
                                </Div>
                            </Div>
                        </React.Fragment> ||
                    loginCheck === false && 
                        <MdButton onClick={moveLoginEvent} backgroundColor="primary" margin="0 14px 0 0"><P fontSize="sm" fontWeight={700} color="white">로그인</P></MdButton>
                }
            </Div>
        </Header>
    )
}

export default HeaderComponent
