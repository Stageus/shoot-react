import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useRecoilState } from "recoil"

import PostComponent from "../components/post/PostComponent"
import PostItem from "../components/common/PostItem"
import { postItemListState } from "../recoil/postState"

const SearchPage = () => {
    const [postItemList, setPostItemList] = useRecoilState(postItemListState)
    const params = useParams()

    const searchContent = postItemList.map((element, Idx) => {
        return (
            <PostItem key={`postItemBox_${Idx}`} postItemObject={element}/>
        )
    })

    let searchInfo = params.search
    useEffect(() => {
        searchInfo = params.search

        alert(`검색결과가 ${searchInfo}인 post 데이터리스트 받아오는 api 작성 후 post state에 담기`)
        // 임시 state
        let tmpPostList = []
        for(let idx = 1; idx <= 60; idx++){
            const postObject = {
                post_idx: idx * 100,
                post_title: `이러 저러한 제목 번호${idx}`,
                post_video: "~~~~",
                post_thumbnail: "/assets/images/postThumbnail.png",
                post_view_count: "125만회", //여기 나중에 우리 계산 필요
                category_name: "게임",
                email: `asdasdsadasd${idx}@shoot.com`,
                name: `asdasdsadasd${idx}`,
                profile_img: "/assets/images/user.svg"
            }
            tmpPostList.push(postObject)
        }

        setPostItemList(tmpPostList)
    }, [])

    return(
        <PostComponent title={searchInfo} content={searchContent}/>
    )
}

export default SearchPage
