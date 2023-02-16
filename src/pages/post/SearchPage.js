import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSetRecoilState } from "recoil"

import PostComponent from "../../components/post/PostComponent"
import SearchChannelListComponent from "../../components/post/SearchChannelListComponent"
import {
  postItemListState,
  searchChannelListState,
} from "../../recoil/postState"
import { useGetFetch } from "../../hooks/useFetch"

const SearchPage = () => {
  const setPostItemList = useSetRecoilState(postItemListState)
  const setSearchChannelList = useSetRecoilState(searchChannelListState)
  const params = useParams()

  const [postGetSources, postGetFetchData] = useGetFetch()
  let searchType = params.searchType
  let searchKeyword = params.searchKeyword
  useEffect(() => {
    searchKeyword = params.searchKeyword

    if (searchType === "all") {
      postGetFetchData(`post/all?search-type=title&search=${searchKeyword}`)
    } else if (searchType === "hash") {
      postGetFetchData(`post/all?search-type=hashtag&search=${searchKeyword}`)
    } else if (searchType === "channel") {
      postGetFetchData(`channel/all?search=${searchKeyword}`)
    }
  })

  useEffect(() => {
    if (postGetSources !== null && postGetSources !== undefined) {
      const tmpList = postGetSources.data
      if (searchType !== "channel") {
        setPostItemList(tmpList)
      } else {
        setSearchChannelList(tmpList)
      }
    }
  }, [postGetSources])

  return (
    <React.Fragment>
      {(searchType !== "channel" && (
        <PostComponent
          title={(searchType === "hash" ? "#" : "") + searchKeyword}
          contentType="postList"
          emptyMessage="업로드 된 게시글이 없습니다."
        />
      )) || (
        <SearchChannelListComponent
          title={`@${searchKeyword}`}
          emptyMessage="관련된 채널이 없습니다."
        />
      )}
    </React.Fragment>
  )
}

export default SearchPage
