import React from "react"

import styled from "styled-components"

import Div from "../basic/Div"
import Img from "../basic/Img"
import { H1 } from "../basic/H"
import P from "../basic/P"
import { MdButton } from "../basic/Button"
import Profile from "../common/Profile"
import { IconTextCircle } from "../common/IconText"
import SeeMore from "../common/SeeMore"

const PostContainer = styled.article`
    position: relative;
    width: 455px;
    height: 809px;
    margin: 50px 0;
`

const PostDetail = () => {
    const testObject1 = {
        profileImg:"./assets/images/user.svg",
        email: "test1@naver.com"
    }
    const vote = true

    const openDetailModal = () => {
        alert("본문열기")
    }

    const subscribeChannel = () => {
        alert(`${testObject1.email} 구독`)
    }

    const like = () => {
        alert("좋아요")
    }

    const bookmark = () => {
        alert("즐겨찾기")
    }

    const openCommentModal = () => {
        alert("댓글열기")
    }

    return (
        <PostContainer>
            <Img src="./assets/images/postThumbnail.png"/>
            <Div position="absolute" bottom="0" width="90%" margin="5%">
                <Div display="flex" alignItems="end" margin="15px 0">
                    <Div><H1 fontSize="lg">게시글 타이틀</H1></Div>
                    {
                        vote === true && <Div pointer margin="0 5px"><P onClick={openDetailModal} fontSize="sm" color="gray">투표하기</P></Div>
                    }
                </Div>
                <Div display="flex" width="100%" justifyContent="space-between">
                    <Profile profileObject={testObject1} name="test1"/>
                    <MdButton onClick={subscribeChannel} backgroundColor="primary"><P color="white">구독</P></MdButton>
                </Div>
            </Div>
            <Div display="flex" direction="column" position="absolute" right="0" bottom="0" transform="translate(100%, 0)" padding="0 5px">
                <IconTextCircle onClick={like} src="./assets/images/like.svg" text="1234"/>
                <IconTextCircle onClick={bookmark} src="./assets/images/bookmark.svg" text="즐겨찾기"/>
                <IconTextCircle onClick={openDetailModal} src="./assets/images/postContent.svg" text="본문보기"/>
                <IconTextCircle onClick={openCommentModal} src="./assets/images/comment.svg" text="202"/>
                <SeeMore share report/>
            </Div>
        </PostContainer>
    )
}

export default PostDetail
