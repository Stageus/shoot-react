import React, { useEffect, useState } from "react"
import styled from "styled-components"

import Div from "../../basic/Div"
import Img from "../../basic/Img"
import P from "../../basic/P"
import { MdButton } from "../../basic/Button"
import { constSelector, useRecoilState } from "recoil"
import {
  reportPostIdxState,
  reportChannelEmailState,
  reportCommentIdxState,
  reportReplyCommentIdxState,
  reportPostSelectState,
  reportChannelSelectState,
  blockSelectedState,
} from "../../../recoil/adminState"
import { modalInfoState, modalOpenState } from "../../../recoil/modalState"
import BlockButton from "./BlockButton"
import CloseButton from "./CloseButton"

const TableStyle = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  width: 620px;
  margin-top: 20px;
  margin-bottom: 20px;
`

const TdStyle = styled.td`
  border: 1px solid #eeeeee;
  background: white;
  padding: 5px;
`

const ThStyle = styled.th`
  border: 1px solid #eeeeee;
  background: #ff6b6b;
  color: white;
  padding: 5px;
`

const ThInfoStyle = styled.th`
  border: 1px solid #eeeeee;
  background: white;
  padding: 5px;
`

const ModalBox = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 500px;
  text-align: center;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background: #c8c8c8;
  }
`

const ReportPostModalTable = () => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(0)
  const [reportPostIdx, setReportPostIdx] = useRecoilState(reportPostIdxState)
  const [blockSelected, setBlockSelected] = useRecoilState(blockSelectedState)
  const [post, setPost] = useState(null)

  useEffect(() => {
    if (blockSelected) {
      fetch(`https://api.슛.site/post/${blockSelected.idx}`, {
        method: "GET",
        credentials: "include",
      }).then(async (res) => {
        const result = await res.json()
        setPost(result.data)
        console.log(result.data)
      })
    }
  }, [])

  useEffect(() => {
    if (blockSelected) {
      fetch(`https://api.슛.site/report/post/${blockSelected.idx}/all`, {
        method: "GET",
        credentials: "include",
      }).then(async (res) => {
        const result = await res.json()
        console.log(blockSelected.idx)
        setReportPostIdx(result.data)
      })
    }
  }, [])

  return (
    <ModalBox>
      <Div margin="0px 15px 0px 15px">
        <Div margin="0px 0px 15px 0px">
          <P fontSize="lg" fontWeight="700">
            신고된 게시글
          </P>
        </Div>

        {post && (
          <React.Fragment>
            <Div height="275px" width="156.71px">
              <Img
                src={`https://jochong.s3.ap-northeast-2.amazonaws.com/post/${post.post_thumbnail}`}
              />
            </Div>
            <P>게시글 제목</P>
            <P>{post.post_title ? post.post_title : null}</P>
            <P>게시글 본문</P>
            <P>{post.post_description ? post.post_description : null}</P>
            <P>링크</P>
            <Div width="380px">
              <P>{post.link[0].link_name}</P>
              <P>{post.link[0].link_url}</P>
            </Div>
            <Div width="380px">
              <P>{post.link[1].link_name}</P>
              <P>{post.link[1].link_url}</P>
            </Div>
            <P>투표</P>
            <P>{post.vote[0].vote_contents}</P>
            <P>{post.vote[1].vote_contents}</P>
          </React.Fragment>
        )}

        <TableStyle>
          <tbody>
            <tr>
              <ThStyle>신고자</ThStyle>
              <ThStyle>신고사유</ThStyle>
              <ThStyle>신고 날짜</ThStyle>
              <ThStyle></ThStyle>
            </tr>
            {reportPostIdx &&
              reportPostIdx.map(
                ({
                  report_idx,
                  object,
                  report_channel_email,
                  report_contents,
                  report_time,
                  report_type,
                  reported_channel_email,
                  reported_channel_name,
                  reported_post_idx,
                  reported_post_title,
                  reported_post_upload_time,
                }) => (
                  <React.Fragment key={report_idx}>
                    <tr>
                      <TdStyle>{report_channel_email}</TdStyle>
                      <TdStyle>{report_type}</TdStyle>
                      <TdStyle>{report_time}</TdStyle>
                      <TdStyle>
                        <Div display="flex" width="100%">
                          <Div
                            width="20px"
                            height="20px"
                            pointer
                            onClick={() => {
                              setSelect(report_idx)
                              setOpen(true)
                              open
                                ? report_idx === select && setOpen(false)
                                : report_idx === select && setOpen(true)
                            }}
                          >
                            <Img src="/assets/images/downArrow.svg" />
                          </Div>
                        </Div>
                      </TdStyle>
                    </tr>
                    {report_idx === select && open && (
                      <tr key={report_time}>
                        <ThInfoStyle colSpan="4">
                          <Div display="flex" width="100%" direction="column">
                            <P>신고자: {report_channel_email}</P>
                            <P>신고사유: {report_type}</P>
                            <P>신고 날짜: {report_time}</P>
                            <P>신고 내용: {report_contents}</P>
                          </Div>
                        </ThInfoStyle>
                      </tr>
                    )}
                  </React.Fragment>
                )
              )}
          </tbody>
        </TableStyle>
        <Div display="flex" width="100%">
          <BlockButton />
          <CloseButton />
        </Div>
      </Div>
    </ModalBox>
  )
}

const ReportChannelModalTable = () => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(0)
  const [reportChannelEmail, setReportChannelEmail] = useRecoilState(
    reportChannelEmailState
  )
  const [blockSelected, setBlockSelected] = useRecoilState(blockSelectedState)
  const [channel, setChannel] = useState(null)

  useEffect(() => {
    if (blockSelected) {
      fetch(`https://api.슛.site/channel/${blockSelected.email}`, {
        method: "GET",
        credentials: "include",
      }).then(async (res) => {
        const result = await res.json()
        console.log(result.data)
        setChannel(result.data)
      })
    }
  }, [])

  useEffect(() => {
    if (blockSelected) {
      fetch(`https://api.슛.site/report/channel/${blockSelected.email}/all`, {
        method: "GET",
        credentials: "include",
      }).then(async (res) => {
        const result = await res.json()
        setReportChannelEmail(result.data)
      })
    }
  }, [])

  return (
    <ModalBox>
      <React.Fragment>
        {channel && (
          <Div width="100%">
            {channel.profile_img !== null && (
              <Div width="100px">
                <Img
                  src={`https://jochong.s3.ap-northeast-2.amazonaws.com/channel_img/${channel.profile_img}`}
                />
              </Div>
            )}

            <P>{channel.email}</P>
            <P>{channel.name}</P>
            <P>채널 설명</P>
            <P>{channel.description && channel.description}</P>
          </Div>
        )}
        <TableStyle>
          <tbody>
            <tr>
              <ThStyle>신고자</ThStyle>
              <ThStyle>신고사유</ThStyle>
              <ThStyle>신고 날짜</ThStyle>
              <ThStyle></ThStyle>
            </tr>
            {reportChannelEmail &&
              reportChannelEmail.map(
                ({
                  report_idx,
                  object,
                  report_channel_email,
                  report_contents,
                  report_time,
                  report_type,
                  reported_channel_email,
                  channel_name,
                  channel_creation_time,
                }) => (
                  <React.Fragment key={report_idx}>
                    <tr>
                      <TdStyle>{report_channel_email}</TdStyle>
                      <TdStyle>{report_type}</TdStyle>
                      <TdStyle>{report_time}</TdStyle>
                      <TdStyle>
                        <Div display="flex" width="100%">
                          <Div
                            width="20px"
                            height="20px"
                            pointer
                            onClick={() => {
                              setSelect(report_idx)
                              setOpen(true)
                              open
                                ? report_idx === select && setOpen(false)
                                : report_idx === select && setOpen(true)
                            }}
                          >
                            <Img src="/assets/images/downArrow.svg" />
                          </Div>
                        </Div>
                      </TdStyle>
                    </tr>
                    {report_idx === select && open && (
                      <tr key={report_time}>
                        <ThInfoStyle colSpan="4">
                          <Div display="flex" width="100%" direction="column">
                            <P>신고자: {report_channel_email}</P>
                            <P>신고사유: {report_type}</P>
                            <P>신고 날짜: {report_time}</P>
                            <P>신고 내용: {report_contents}</P>
                          </Div>
                        </ThInfoStyle>
                      </tr>
                    )}
                  </React.Fragment>
                )
              )}
          </tbody>
        </TableStyle>
        <Div display="flex" width="100%">
          <BlockButton />
          <CloseButton />
        </Div>
      </React.Fragment>
    </ModalBox>
  )
}

const ReportCommentModalTable = () => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(0)
  const [reportCommentIdx, setReportCommentIdx] = useRecoilState(
    reportCommentIdxState
  )
  const [blockSelected, setBlockSelected] = useRecoilState(blockSelectedState)

  useEffect(() => {
    if (blockSelected) {
      fetch(`https://api.슛.site/report/comment/${blockSelected.idx}/all`, {
        method: "GET",
        credentials: "include",
      }).then(async (res) => {
        const result = await res.json()
        setReportCommentIdx(result.data)
      })
    }
  }, [])

  console.log(reportCommentIdx)

  return (
    <React.Fragment>
      <Div margin="0px 0px 15px 0px">
        <P fontSize="lg" fontWeight="700">
          신고된 댓글
        </P>
      </Div>
      <P>댓글 내용</P>
      <P>{reportCommentIdx[0].reported_comment_contents}</P>
      <TableStyle>
        <tbody>
          <tr>
            <ThStyle>신고자</ThStyle>
            <ThStyle>신고사유</ThStyle>
            <ThStyle>신고 날짜</ThStyle>
            <ThStyle></ThStyle>
          </tr>
          {reportCommentIdx &&
            reportCommentIdx.map(
              ({
                report_idx,
                object,
                report_channel_email,
                report_contents,
                report_time,
                report_type,
                post_idx,
                reported_comment_idx,
                reported_comment_contents,
                reported_comment_write_time,
                reported_channel_email,
                reported_channel_name,
              }) => (
                <React.Fragment key={report_idx}>
                  <tr>
                    <TdStyle>{report_channel_email}</TdStyle>
                    <TdStyle>{report_type}</TdStyle>
                    <TdStyle>{report_time}</TdStyle>
                    <TdStyle>
                      <Div display="flex" width="100%">
                        <Div
                          width="20px"
                          height="20px"
                          pointer
                          onClick={() => {
                            setSelect(report_idx)
                            setOpen(true)
                            open
                              ? report_idx === select && setOpen(false)
                              : report_idx === select && setOpen(true)
                          }}
                        >
                          <Img src="/assets/images/downArrow.svg" />
                        </Div>
                      </Div>
                    </TdStyle>
                  </tr>
                  {report_idx === select && open && (
                    <tr key={report_time}>
                      <ThInfoStyle colSpan="4">
                        <Div display="flex" width="100%" direction="column">
                          <P>신고자: {report_channel_email}</P>
                          <P>신고사유: {report_type}</P>
                          <P>신고 날짜: {report_time}</P>
                          <P>신고 내용: {report_contents}</P>
                        </Div>
                      </ThInfoStyle>
                    </tr>
                  )}
                </React.Fragment>
              )
            )}
        </tbody>
      </TableStyle>
      <Div display="flex" width="100%">
        <BlockButton />
        <CloseButton />
      </Div>
    </React.Fragment>
  )
}

const ReportReplyCommentModalTable = () => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(0)
  const [reportReplyCommentIdx, setReportReplyCommentIdx] = useRecoilState(
    reportReplyCommentIdxState
  )
  const [blockSelected, setBlockSelected] = useRecoilState(blockSelectedState)

  useEffect(() => {
    if (blockSelected) {
      fetch(
        `https://api.슛.site/report/reply-comment/${blockSelected.idx}/all`,
        {
          method: "GET",
          credentials: "include",
        }
      ).then(async (res) => {
        const result = await res.json()
        setReportReplyCommentIdx(result.data)
      })
    }
  }, [])

  return (
    <React.Fragment>
      <Div margin="0px 0px 15px 0px">
        <P fontSize="lg" fontWeight="700">
          신고된 댓글
        </P>
      </Div>
      <P>댓글 내용</P>
      <P>{reportReplyCommentIdx[0].reported_reply_comment_contents}</P>
      <TableStyle>
        <tbody>
          <tr>
            <ThStyle>신고자</ThStyle>
            <ThStyle>신고사유</ThStyle>
            <ThStyle>신고 날짜</ThStyle>
            <ThStyle></ThStyle>
          </tr>
          {reportReplyCommentIdx &&
            reportReplyCommentIdx.map(
              ({
                report_idx,
                object,
                report_channel_email,
                report_contents,
                report_time,
                report_type,
                post_idx,
                reported_reply_comment_idx,
                reported_reply_comment_contents,
                reported_reply_comment_write_time,
                reported_channel_email,
                reported_channel_name,
              }) => (
                <React.Fragment key={report_idx}>
                  <tr>
                    <TdStyle>{report_channel_email}</TdStyle>
                    <TdStyle>{report_type}</TdStyle>
                    <TdStyle>{report_time}</TdStyle>
                    <TdStyle>
                      <Div display="flex" width="100%">
                        <Div
                          width="20px"
                          height="20px"
                          pointer
                          onClick={() => {
                            setSelect(report_idx)
                            setOpen(true)
                            open
                              ? report_idx === select && setOpen(false)
                              : report_idx === select && setOpen(true)
                          }}
                        >
                          <Img src="/assets/images/downArrow.svg" />
                        </Div>
                      </Div>
                    </TdStyle>
                  </tr>
                  {report_idx === select && open && (
                    <tr key={report_time}>
                      <ThInfoStyle colSpan="4">
                        <Div display="flex" width="100%" direction="column">
                          <P>신고자: {report_channel_email}</P>
                          <P>신고사유: {report_type}</P>
                          <P>신고 날짜: {report_time}</P>
                          <P>신고 내용: {report_contents}</P>
                        </Div>
                      </ThInfoStyle>
                    </tr>
                  )}
                </React.Fragment>
              )
            )}
        </tbody>
      </TableStyle>
      <Div display="flex" width="100%">
        <BlockButton />
        <CloseButton />
      </Div>
    </React.Fragment>
  )
}

export {
  ReportPostModalTable,
  ReportChannelModalTable,
  ReportCommentModalTable,
  ReportReplyCommentModalTable,
}
