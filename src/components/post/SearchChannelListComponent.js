import React, { useEffect } from "react"
import styled from "styled-components"
import { useRecoilState } from "recoil"

import Div from "../basic/Div"
import { H1 } from "../basic/H"
import SearchChannel from "./SearchChannel"
import NavComponent from "../nav/NavComponent"
import HeaderComponent from "../header/HeaderComponent"
import { searchChannelListState } from "../../recoil/postState"

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 60px 0 0 222px;
`
const SearchChannelListComponent = (props) => {
  const tilte = props.title

  const [searchChannelList, setSearchChannelList] = useRecoilState(
    searchChannelListState
  )

  let searchChannelListContent
  if (searchChannelList.length !== 0) {
    searchChannelListContent = searchChannelList.map((element, idx) => {
      return (
        <SearchChannel key={`searchChannel_${idx}`} channelObject={element} />
      )
    })
  }

  useEffect(() => {
    alert("검색 채널 리스트 가져오기")
  })

  return (
    <React.Fragment>
      <HeaderComponent />
      <NavComponent />
      <Main>
        <Div width="100%">
          <Div margin="21px 23px">
            <H1 fontSize="xl" color="primary">
              {tilte}
            </H1>
          </Div>
        </Div>
        <Div width="100%">{searchChannelListContent}</Div>
      </Main>
    </React.Fragment>
  )
}

export default SearchChannelListComponent
