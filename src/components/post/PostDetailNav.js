import React from "react"
import styled from "styled-components"
import { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"

import Div from "../basic/Div"
import PostItem from "../common/PostItem"
import { postItemListState, postInfoState } from "../../recoil/postState"
import { useGetFetch } from "../../hooks/useFetch"

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  top: 0;
  width: 220px;
  height: calc(100vh - 60px);
  margin: 60px 0;
  overflow-y: auto;
`

const PostDetailNav = () => {
  const [postItemList, setPostItemList] = useRecoilState(postItemListState)
  const postDetailInfo = useRecoilValue(postInfoState)

  const postDetailNavContent = postItemList.map((element, Idx) => {
    return (
      <PostItem
        key={`postItemBox_${Idx}`}
        postItemObject={element}
        minWidth="200px"
      />
    )
  })

  const [postGetSources, postGetFetchData] = useGetFetch()
  useEffect(() => {
    postGetFetchData("post/all")
  }, [postDetailInfo])

  useEffect(() => {
    if (postGetSources !== null && postGetSources !== undefined) {
      const tmpPostList = postGetSources.data
      setPostItemList(tmpPostList)
    }
  }, [postGetSources])

  return <Nav>{postDetailNavContent}</Nav>
}

export default PostDetailNav
