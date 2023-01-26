import React from "react"
import styled from "styled-components"

import Div from "../basic/Div"
import PostItem from "../common/PostItem"

const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    top: 0;
    width: 220px;
    height: 100%;
    margin: 60px 0;
    overflow-y: auto;
`

const PostDetailNav = () => {
    const postFill = amount => {
        let postList = []
        for(let idx = 1; idx <= amount; idx++){
            const postObject = {
                post_idx: idx * 100,
                post_title: `이러 저러한 제목 번호${idx}`,
                post_video: "~~~~",
                post_thumbnail: "/assets/images/postThumbnail.png",
                post_view_count: "125만회", //여기 나중에 우리 계산 필요
                category_name: "게임",
                email: `asdasdsadasd${idx}@shoot.com`,
                name: `asdasdsadasd${idx}`,
                profile_img: undefined
            }
            postList.push(<PostItem key={`postItem_${idx}`} postItemObject={postObject}/>)
        }
        return postList
    }

    const postDetailNavContent = postFill(5)

    return(
        <Nav>
            {postDetailNavContent}
            <Div height="60px" width="100%"></Div>
        </Nav>
    )
}

export default PostDetailNav
