import React from "react"
import { useRecoilValue } from "recoil"

import Div from "../basic/Div"
import PostItem from "../../components/common/PostItem"
import { postItemListState } from "../../recoil/postState"

const PostItemListComponent = () => {
  const postItemList = useRecoilValue(postItemListState)

  const postItemListContent = postItemList.map((element, Idx) => {
    return <PostItem key={`postItemBox_${Idx}`} postItemObject={element} />
  })

  return (
    <Div display="flex" height="100%">
      {postItemListContent}
    </Div>
  )
}

export default PostItemListComponent
