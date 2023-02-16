import React, { useEffect } from "react"
import styled from "styled-components"
import { useRecoilState } from "recoil"

import Div from "../basic/Div"
import { H1 } from "../basic/H"
import Img from "../basic/Img"
import P from "../basic/P"
import SearchChannel from "./SearchChannel"
import NavComponent from "../nav/NavComponent"
import HeaderComponent from "../header/HeaderComponent"
import { searchChannelListState } from "../../recoil/postState"

const Main = styled.main`
  height: 100vh;
  padding: 60px 0 0 222px;
`
const SearchChannelListComponent = (props) => {
  const tilte = props.title
  const emptyMessage = props.emptyMessage

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
        {(searchChannelList.length !== 0 && (
          <Div width="100%">{searchChannelListContent}</Div>
        )) || (
          <Div display="flex" direction="column" width="100%" height="80%">
            <Div width="66px" height="66px">
              <Img src="/assets/images/emptyBang.svg" />
            </Div>
            <Div margin="26px">
              <P fontSize="lg" fontWeight="700">
                {emptyMessage}
              </P>
            </Div>
          </Div>
        )}
      </Main>
    </React.Fragment>
  )
}

export default SearchChannelListComponent
