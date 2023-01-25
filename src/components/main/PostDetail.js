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
    const isVote = true
    const isMyPost = true
    const isSubscribe = true
    const isLike = true
    const isBookmark = true

    const testObject1 = {
        profileImg:"/assets/images/user.svg",
        email: "test1@naver.com"
    }

    const openDetailModal = () => {
        alert("본문열기")
    }

    const setSubscribe = () => {
        alert("구독")
    }

    const removeSubscribe = () => {
        alert("구독취소")
    }

    const like = () => {
        if (isLike) {
            alert("좋아요 취소")
        }
        else {
            alert("좋아요")
        }
    }

    const bookmark = () => {
        if (isBookmark) {
            alert("즐겨찾기 취소")
        }
        else {
            alert("즐겨찾기")
        }
    }

    const openCommentModal = () => {
        alert("댓글열기")
    }

    return (
        <PostContainer>
            <Img src="/assets/images/postThumbnail.png"/>
            <Div position="absolute" bottom="0" width="90%" margin="5%">
                <Div display="flex" alignItems="end" margin="15px 0">
                    <Div><H1 fontSize="lg">게시글 타이틀</H1></Div>
                    {
                        isVote === true && <Div pointer margin="0 5px"><P onClick={openDetailModal} fontSize="sm" color="gray">투표하기</P></Div>
                    }
                </Div>
                <Div display="flex" width="100%" justifyContent="space-between">
                    <Profile profileObject={testObject1} name="test1"/>
                    {
                        isMyPost === false && isSubscribe === false && <MdButton onClick={setSubscribe} backgroundColor="primary"><P color="white">구독</P></MdButton> ||
                        isMyPost === false && isSubscribe === true && <MdButton onClick={removeSubscribe} border="2px solid #FF6B6B" backgroundColor="white"><P color="primary">구독중</P></MdButton>
                    }
                </Div>
            </Div>
            <Div display="flex" direction="column" position="absolute" right="0" bottom="0" transform="translate(100%, 0)" padding="0 5px">
                <IconTextCircle onClick={like} src={isLike === false ? "/assets/images/like.svg" : "/assets/images/likeFill.svg"} text="1234"/>
                <IconTextCircle onClick={bookmark} src={isBookmark === false ? "/assets/images/bookmark.svg" : "/assets/images/bookmarkFill.svg"} text="즐겨찾기"/>
                <IconTextCircle onClick={openDetailModal} src="/assets/images/postContent.svg" text="본문보기"/>
                <IconTextCircle onClick={openCommentModal} src="/assets/images/comment.svg" text="202"/>
                {
                        isMyPost === false && <SeeMore share report parent="post" parentInfo="testUrl"/> ||
                        isMyPost === true && <SeeMore share modify delete alarm={true} parent="post" parentInfo="testUrl"/>
                }
            </Div>
        </PostContainer>
    )
}

export default PostDetail
