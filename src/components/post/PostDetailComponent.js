import React, { useEffect } from "react"

import styled from "styled-components"
import { useRecoilState, useRecoilValue } from "recoil"

import Div from "../basic/Div"
import Img from "../basic/Img"
import { H1 } from "../basic/H"
import P from "../basic/P"
import { MdButton } from "../basic/Button"
import Profile from "../common/Profile"
import PostDetailLink from "./PostDetailLink"
import { IconTextCircle } from "../common/IconText"
import SeeMore from "../common/SeeMore"
import { isBookmarkState, isLikeState, likeCountState , isSubscribeState, currentLinkIdxState, postInfoState } from "../../recoil/postState"

const PostContainer = styled.article`
    position: relative;
    width: 455px;
    height: 809px;
    margin: 50px 0;
`

const LinkContainer = styled(Div)`
    overflow: hidden;
`

const PostDetailComponent = () => {
    const postInfo = useRecoilValue(postInfoState)
    const {post_idx, post_title, post_video, post_thumbnail, post_upload_time, post_type, post_good_count, post_view_count, upload_channel_name, upload_channel_email, profile_img, category_idx, category_name, hashtag, good_state, bookmark_state, subscribe_state, vote, link} = postInfo
    const [isBookmark, setIsBookmark] = useRecoilState(isBookmarkState)
    const [isLike, setIsLike] = useRecoilState(isLikeState)
    const [likeCount, setLikeCount] = useRecoilState(likeCountState)
    const [isSubscribe, setIsSubscribe] = useRecoilState(isSubscribeState)
    const [currentLinkIdx, setCurrentLinkIdx] = useRecoilState(currentLinkIdxState)

    const isMyPost = false

    const testObject1 = {
        profileImg: profile_img,
        email: upload_channel_email
    }

    let linkContent
    if (link !== undefined) {
        linkContent = link.map((element, Idx) => {
            return (
                <PostDetailLink key={`linkBox_${Idx}`} name={element.link_name} link={element.link_url} />
            )
        })
    }

    const moveLinkLeftEvent = () => {
        setCurrentLinkIdx(currentLinkIdx - 1)
    }

    const moveLinkRightEvent = () => {
        setCurrentLinkIdx(currentLinkIdx + 1)
    }

    const openDetailModal = () => {
        alert("본문열기")
    }

    const setSubscribe = () => {
        alert(`${upload_channel_email} 구독 api`)
        setIsSubscribe(true)
    }

    const removeSubscribe = () => {
        alert(`${upload_channel_email} 구독 취소 api`)
        setIsSubscribe(false)
    }

    const like = () => {
        if (isLike) {
            alert(`게시글 번호가 ${post_idx}인 게시글 좋아요 취소 api`)
            setIsLike(false)
            setLikeCount(likeCount - 1)
        }
        else {
            alert(`게시글 번호가 ${post_idx}인 게시글 좋아요 api`)
            setIsLike(true)
            setLikeCount(likeCount + 1)
        }
    }

    const bookmark = () => {
        if (isBookmark) {
            alert(`게시글 번호가 ${post_idx}인 게시글 즐겨찾기 취소 api`)
            setIsBookmark(false)
        }
        else {
            alert(`게시글 번호가 ${post_idx}인 게시글 즐겨찾기 api`)
            setIsBookmark(true)
        }
    }

    const openCommentModal = () => {
        alert("댓글열기")
    }

    useEffect(() => {
        setIsLike(good_state)
        setIsBookmark(bookmark_state)
        setLikeCount(post_good_count)
        setIsSubscribe(subscribe_state)
        setCurrentLinkIdx(0)
    }, [postInfo])

    return (
        <PostContainer>
            <Img src={post_thumbnail}/>
            <Div position="absolute" bottom="0" width="90%" margin="5%">
                <Div display="flex" alignItems="end" margin="15px 0">
                    <Div><H1 fontSize="lg">{post_title}</H1></Div>
                    {
                        post_type === 1 && <Div pointer margin="0 5px"><P onClick={openDetailModal} fontSize="sm" color="gray">투표하기</P></Div>
                    }
                </Div>
                <Div display="flex" width="100%" justifyContent="space-between">
                    <Profile profileObject={testObject1} name={upload_channel_name}/>
                    {
                        isMyPost === false && isSubscribe === false && <MdButton onClick={setSubscribe} backgroundColor="primary"><P color="white">구독</P></MdButton> ||
                        isMyPost === false && isSubscribe === true && <MdButton onClick={removeSubscribe} border="2px solid #FF6B6B" backgroundColor="white"><P color="primary">구독중</P></MdButton>
                    }
                </Div>
                {   
                    post_type === 2 && 
                    <LinkContainer position="relative" width="100%">
                        {
                            currentLinkIdx !== 0 && <Div onClick={moveLinkLeftEvent} pointer position="absolute" top="30px" left="0" width="40px" transform="scaleX(-1)"><Img src="/assets/images/menuArrow.svg"/></Div>
                        }
                        <Div display="flex" justifyContent="flex-start" wrap="nowrap" width="100%" margin={`0 0 0 -${currentLinkIdx}00%`}>
                            {linkContent}
                        </Div>
                        {
                            currentLinkIdx !== (link.length - 1) && <Div onClick={moveLinkRightEvent} pointer position="absolute" top="30px" right="0" width="40px"><Img src="/assets/images/menuArrow.svg"/></Div>
                        }
                    </LinkContainer>
                }
            </Div>
            <Div display="flex" direction="column" position="absolute" right="0" bottom="0" transform="translate(100%, 0)" padding="0 5px">
                <IconTextCircle onClick={like} src={isLike === false ? "/assets/images/like.svg" : "/assets/images/likeFill.svg"} text={likeCount}/>
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

export default PostDetailComponent
