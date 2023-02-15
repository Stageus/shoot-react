import React, { useEffect, useState } from "react"
import styled from "styled-components"

import Div from "../../basic/Div"
import Img from "../../basic/Img"
import P from "../../basic/P"
import { MdButton } from "../../basic/Button"
import { useRecoilState } from "recoil"
import {
  reportPostIdxState,
  reportChannelEmailState,
  reportCommentIdxState,
  reportReplyCommentIdxState,
} from "../../../recoil/adminState"

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

const ReportPostModalTable = () => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(0)
  const [reportPostIdx, setReportPostIdx] = useRecoilState(reportPostIdxState)

  let idx = 45

  useEffect(() => {
    fetch(`https://api.슛.site/report/post/${idx}/all`, {
      method: "GET",
      credentials: "include",
    }).then(async (res) => {
      const result = await res.json()
      setReportPostIdx(result.data)
    })
  }, [])

  return (
    <React.Fragment>
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
      <MdButton backgroundColor="red" margin="5px">
        <P color="white" fontSize="sm" fontWeight="700">
          정지하기
        </P>
      </MdButton>
      <MdButton backgroundColor="gray" margin="5px">
        <P color="white" fontSize="sm" fontWeight="700">
          닫기
        </P>
      </MdButton>
    </React.Fragment>
  )
}

const ReportChannelModalTable = () => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(0)
  const [reportChannelEmail, setReportChannelEmail] = useRecoilState(
    reportChannelEmailState
  )

  let email = "skattr13@naver.com"

  useEffect(() => {
    fetch(`https://api.슛.site/report/channel/${email}/all`, {
      method: "GET",
      credentials: "include",
    }).then(async (res) => {
      const result = await res.json()
      setReportChannelEmail(result.data)
    })
  }, [])

  return (
    <React.Fragment>
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
                          <Img src="../assets/images/downArrow.svg" />
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
      <MdButton backgroundColor="red" margin="5px">
        <P color="white" fontSize="sm" fontWeight="700">
          정지하기
        </P>
      </MdButton>
      <MdButton backgroundColor="gray" margin="5px">
        <P color="white" fontSize="sm" fontWeight="700">
          닫기
        </P>
      </MdButton>
    </React.Fragment>
  )
}

const ReportCommentModalTable = () => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(0)
  const [reportCommentIdx, setReportCommentIdx] = useRecoilState(
    reportCommentIdxState
  )

  let idx = 55

  useEffect(() => {
    fetch(`https://api.슛.site/report/comment/${idx}/all`, {
      method: "GET",
      credentials: "include",
    }).then(async (res) => {
      const result = await res.json()
      setReportCommentIdx(result.data)
    })
  }, [])

  return (
    <React.Fragment>
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
                          <Img src="../assets/images/downArrow.svg" />
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
      <MdButton backgroundColor="red" margin="5px">
        <P color="white" fontSize="sm" fontWeight="700">
          정지하기
        </P>
      </MdButton>
      <MdButton backgroundColor="gray" margin="5px">
        <P color="white" fontSize="sm" fontWeight="700">
          닫기
        </P>
      </MdButton>
    </React.Fragment>
  )
}

const ReportReplyCommentModalTable = () => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(0)
  const [reportReplyCommentIdx, setReportReplyCommentIdx] = useRecoilState(
    reportReplyCommentIdxState
  )

  let idx = 17

  useEffect(() => {
    fetch(`https://api.슛.site/report/reply-comment/${idx}/all`, {
      method: "GET",
      credentials: "include",
    }).then(async (res) => {
      const result = await res.json()
      setReportReplyCommentIdx(result.data)
    })
  }, [])

  return (
    <React.Fragment>
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
                          <Img src="../assets/images/downArrow.svg" />
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
      <MdButton backgroundColor="red" margin="5px">
        <P color="white" fontSize="sm" fontWeight="700">
          정지하기
        </P>
      </MdButton>
      <MdButton backgroundColor="gray" margin="5px">
        <P color="white" fontSize="sm" fontWeight="700">
          닫기
        </P>
      </MdButton>
    </React.Fragment>
  )
}

export {
  ReportPostModalTable,
  ReportChannelModalTable,
  ReportCommentModalTable,
  ReportReplyCommentModalTable,
}
