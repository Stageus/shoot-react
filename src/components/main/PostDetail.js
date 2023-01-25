import React from "react"

import styled from "styled-components"

import Div from "../basic/Div"
import Img from "../basic/Img"
import { H1 } from "../basic/H"
import P from "../basic/P"
import { MdButton } from "../basic/Button"
import Profile from "../common/Profile"
import PostDetailLink from "./PostDetailLink"
import { IconTextCircle } from "../common/IconText"
import SeeMore from "../common/SeeMore"

const PostContainer = styled.article`
    position: relative;
    width: 455px;
    height: 809px;
    margin: 50px 0;
`

const LinkContainer = styled(Div)`
    overflow: hidden;
`

const PostDetail = () => {
    const isVote = true
    const isMyPost = true
    const isSubscribe = true
    const isLike = true
    const isBookmark = true
    const currentLinkIdx = 2

    const testObject1 = {
        profileImg:"/assets/images/user.svg",
        email: "test1@naver.com"
    }

    const tmpLinkList = [
        {
            link_name: "shoot!",
            link_url: "http://localhost:3000/"
        },
        {
            link_name: "Hot!",
            link_url: "http://localhost:3000/hot"
        },
        {
            link_name: "100번째 포스트",
            link_url: "http://localhost:3000/detail/post-id/100"
        },
        {
            link_name: "게임",
            link_url: "http://localhost:3000/category/게임"
        },
        {
            link_name: "리그오브레전트",
            link_url: "http://localhost:3000/hashtag/리그오브레전트"
        }
    ]

    const tmpLinkContent = tmpLinkList.map( element => {
        return (
            <PostDetailLink name={element.link_name} link={element.link_url} />
        )
    })

    const moveLinkLeftEvent = () => {
        alert("스테이트 이용해서 현재 링크 -1")
    }

    const moveLinkRightEvent = () => {
        alert("스테이트 이용해서 현재 링크 +1")
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
                {
                    tmpLinkList !== [] && 
                    <LinkContainer position="relative" width="100%" margin="20px 0 0">
                        {
                            currentLinkIdx !== 0 && <Div onClick={moveLinkLeftEvent} pointer position="absolute" top="30px" left="0" width="40px" transform="scaleX(-1)"><Img src="/assets/images/menuArrow.svg"/></Div>
                        }
                        <Div display="flex" justifyContent="flex-start" wrap="nowrap" width="100%" margin={`0 0 0 -${currentLinkIdx}00%`}>
                            {tmpLinkContent}
                        </Div>
                        {
                            currentLinkIdx !== (tmpLinkList.length - 1) && <Div onClick={moveLinkRightEvent} pointer position="absolute" top="30px" right="0" width="40px"><Img src="/assets/images/menuArrow.svg"/></Div>
                        }
                    </LinkContainer>
                }
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
