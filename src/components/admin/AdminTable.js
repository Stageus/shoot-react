import React from "react"
import styled from "styled-components"

import Div from "../basic/Div"
import Img from "../basic/Img"
import P from "../basic/P"
import { MdButton } from "../basic/Button"

const TableStyle = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  width: 1000px;
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
  //column-span: 6;
`

const AdminCategoryRequestTable = () => {
  // /request-category/all, /request-category, /request-catedgory/{request-category-name}
  const categoryRequest = [
    { id: 1, cat: "경제", cnt: 25, time: "2022.12.24" },
    { id: 2, cat: "수학", cnt: 43, time: "2022.12.24" },
    { id: 3, cat: "과학", cnt: 16, time: "2022.12.24" },
    { id: 4, cat: "미술", cnt: 29, time: "2022.12.24" },
    { id: 5, cat: "미술", cnt: 29, time: "2022.12.24" },
    { id: 6, cat: "미술", cnt: 29, time: "2022.12.24" },
    { id: 7, cat: "미술", cnt: 29, time: "2022.12.24" },
    { id: 8, cat: "미술", cnt: 29, time: "2022.12.24" },
    { id: 9, cat: "미술", cnt: 29, time: "2022.12.24" },
    { id: 10, cat: "미술", cnt: 29, time: "2022.12.24" },
    { id: 11, cat: "미술", cnt: 29, time: "2022.12.24" },
  ]

  return (
    <TableStyle>
      <tbody>
        <tr>
          <ThStyle>번호</ThStyle>
          <ThStyle>카테고리 이름</ThStyle>
          <ThStyle>요청 횟수</ThStyle>
          <ThStyle>최근 요청 날짜</ThStyle>
          <ThStyle>추가</ThStyle>
          <ThStyle>삭제</ThStyle>
        </tr>
        {categoryRequest.map(({ id, cat, cnt, time }, index) => (
          <>
            <tr key={id}>
              <TdStyle>{index + 1}</TdStyle>
              <TdStyle>{cat}</TdStyle>
              <TdStyle>{cnt}</TdStyle>
              <TdStyle>{time}</TdStyle>
              <TdStyle>
                <Div display="flex" width="100%">
                  <Div width="20px" height="20px" pointer>
                    <Img src="/assets/images/add.svg" />
                  </Div>
                </Div>
              </TdStyle>
              <TdStyle>
                <Div display="flex" width="100%">
                  <Div width="20px" height="20px" pointer>
                    <Img src="/assets/images/delete.svg" />
                  </Div>
                </Div>
              </TdStyle>
            </tr>
          </>
        ))}
      </tbody>
    </TableStyle>
  )
}

const AdminCategoryUpdateTable = () => {
  // /category/all, /category, /category/{category-idx}
  const categoryUpdate = [
    { id: 1, cat: "경제", time: "2022.12.24" },
    { id: 2, cat: "수학", time: "2022.12.24" },
    { id: 3, cat: "과학", time: "2022.12.24" },
    { id: 4, cat: "미술", time: "2022.12.24" },
    { id: 5, cat: "미술", time: "2022.12.24" },
    { id: 6, cat: "미술", time: "2022.12.24" },
    { id: 7, cat: "미술", time: "2022.12.24" },
    { id: 8, cat: "미술", time: "2022.12.24" },
    { id: 9, cat: "미술", time: "2022.12.24" },
    { id: 10, cat: "미술", time: "2022.12.24" },
  ]

  return (
    <TableStyle>
      <tbody>
        <tr>
          <ThStyle>번호</ThStyle>
          <ThStyle>카테고리 이름</ThStyle>
          <ThStyle>추가 날짜</ThStyle>
          <ThStyle>삭제</ThStyle>
        </tr>
        {categoryUpdate.map(({ id, cat, time }, index) => (
          <>
            <tr key={id}>
              <TdStyle>{index + 1}</TdStyle>
              <TdStyle>{cat}</TdStyle>
              <TdStyle>{time}</TdStyle>
              <TdStyle>
                <MdButton backgroundColor="red">
                  <P color="white" fontSize="sm">
                    삭제하기
                  </P>
                </MdButton>
              </TdStyle>
            </tr>
          </>
        ))}
      </tbody>
    </TableStyle>
  )
}

const AdminReportPostTable = () => {
  // /report/post/all
  const reportPost = [
    { id: 1, title: "경제", time: 25, email: "@gmail.com", cnt: 3 },
    { id: 2, title: "수학", time: 43, email: "@gmail.com", cnt: 3 },
    { id: 3, title: "과학", time: 16, email: "@gmail.com", cnt: 3 },
  ]

  return (
    <TableStyle>
      <tbody>
        <tr>
          <ThStyle>번호</ThStyle>
          <ThStyle>게시글 제목</ThStyle>
          <ThStyle>업로드 날짜</ThStyle>
          <ThStyle>이메일</ThStyle>
          <ThStyle>신고 횟수</ThStyle>
          <ThStyle>삭제</ThStyle>
        </tr>
        {reportPost.map(({ id, title, time, email, cnt }) => (
          <>
            <tr key={id}>
              <TdStyle>{id}</TdStyle>
              <TdStyle>{title}</TdStyle>
              <TdStyle>{time}</TdStyle>
              <TdStyle>{email}</TdStyle>
              <TdStyle>{cnt}</TdStyle>
              <TdStyle>
                <Div display="flex" width="100%">
                  <Div width="20px" height="20px" pointer>
                    <Img src="/assets/images/delete.svg" />
                  </Div>
                </Div>
              </TdStyle>
            </tr>
          </>
        ))}
      </tbody>
    </TableStyle>
  )
}

const AdminReportChannelTable = () => {
  const reportChannel = [
    { id: 1, email: "경제", reportTime: 25, createTime: "@gmail.com", cnt: 3 },
    { id: 2, email: "수학", reportTime: 43, createTime: "@gmail.com", cnt: 3 },
    { id: 3, email: "과학", reportTime: 16, createTime: "@gmail.com", cnt: 3 },
  ]

  return (
    <TableStyle>
      <tbody>
        <tr>
          <ThStyle>번호</ThStyle>
          <ThStyle>이메일</ThStyle>
          <ThStyle>업로드 날짜</ThStyle>
          <ThStyle>생성일</ThStyle>
          <ThStyle>신고 횟수</ThStyle>
          <ThStyle>삭제</ThStyle>
        </tr>
        {reportChannel.map(({ id, email, reportTime, createTime, cnt }) => (
          <>
            <tr key={id}>
              <TdStyle>{id}</TdStyle>
              <TdStyle>{email}</TdStyle>
              <TdStyle>{reportTime}</TdStyle>
              <TdStyle>{createTime}</TdStyle>
              <TdStyle>{cnt}</TdStyle>
              <TdStyle>
                <Div display="flex" width="100%">
                  <Div width="20px" height="20px" pointer>
                    <Img src="/assets/images/delete.svg" />
                  </Div>
                </Div>
              </TdStyle>
            </tr>
          </>
        ))}
      </tbody>
    </TableStyle>
  )
}

const AdminReportCommentTable = () => {
  const reportComment = [
    { id: 1, time: "경제", email: "@gmail.com", cnt: 3 },
    { id: 2, time: "수학", email: "@gmail.com", cnt: 3 },
    { id: 3, time: "과학", email: "@gmail.com", cnt: 3 },
  ]

  return (
    <TableStyle>
      <tbody>
        <tr>
          <ThStyle>번호</ThStyle>
          <ThStyle>작성 날짜</ThStyle>
          <ThStyle>이메일</ThStyle>
          <ThStyle>신고 횟수</ThStyle>
          <ThStyle>삭제</ThStyle>
        </tr>
        {reportComment.map(({ id, time, email, cnt }) => (
          <>
            <tr key={id}>
              <TdStyle>{id}</TdStyle>
              <TdStyle>{time}</TdStyle>
              <TdStyle>{email}</TdStyle>
              <TdStyle>{cnt}</TdStyle>
              <TdStyle>
                <Div display="flex" width="100%">
                  <Div width="20px" height="20px" pointer>
                    <Img src="/assets/images/delete.svg" />
                  </Div>
                </Div>
              </TdStyle>
            </tr>
          </>
        ))}
      </tbody>
    </TableStyle>
  )
}

const AdminReportReplyCommentTable = () => {
  const reportReplyComment = [
    { id: 1, time: "11", email: "@gmail.com", cnt: 32 },
    { id: 2, time: "33", email: "@gmail.com", cnt: 31 },
    { id: 3, time: "55", email: "@gmail.com", cnt: 36 },
  ]

  return (
    <TableStyle>
      <tbody>
        <tr>
          <ThStyle>번호</ThStyle>
          <ThStyle>작성 날짜</ThStyle>
          <ThStyle>이메일</ThStyle>
          <ThStyle>신고 횟수</ThStyle>
          <ThStyle>삭제</ThStyle>
        </tr>
        {reportReplyComment.map(({ id, time, email, cnt }) => (
          <>
            <tr key={id}>
              <TdStyle>{id}</TdStyle>
              <TdStyle>{time}</TdStyle>
              <TdStyle>{email}</TdStyle>
              <TdStyle>{cnt}</TdStyle>
              <TdStyle>
                <Div display="flex" width="100%">
                  <Div width="20px" height="20px" pointer>
                    <Img src="/assets/images/delete.svg" />
                  </Div>
                </Div>
              </TdStyle>
            </tr>
          </>
        ))}
      </tbody>
    </TableStyle>
  )
}

const AdminLogTable = () => {
  const log = [
    { email: 1, ip: "경제", url: 25, favFruit: "2022.12.24", res: 1 },
    { email: 2, ip: "수학", url: 43, favFruit: "2022.12.24", res: 3 },
  ]

  return (
    <TableStyle>
      <tbody>
        <tr>
          <ThStyle>이메일</ThStyle>
          <ThStyle>IP</ThStyle>
          <ThStyle>URL</ThStyle>
          <ThStyle>시간</ThStyle>
          <ThStyle>응답</ThStyle>
          <ThStyle></ThStyle>
        </tr>
        {log.map(({ email, ip, url, time, res }, index) => (
          <>
            <tr key={index}>
              <TdStyle>{email}</TdStyle>
              <TdStyle>{ip}</TdStyle>
              <TdStyle>{url}</TdStyle>
              <TdStyle>{time}</TdStyle>
              <TdStyle>{res}</TdStyle>
              <TdStyle>
                <Div display="flex" width="100%">
                  <Div width="20px" height="20px" pointer>
                    <Img src="../assets/images/downArrow.svg" />
                  </Div>
                </Div>
              </TdStyle>
            </tr>
            <tr>
              <ThInfoStyle colSpan="6">
                <P>이메일: email</P>
                <P>IP: ip</P>
                <P>URL: url</P>
                <P>시간: time</P>
                <P>상태코드: code</P>
                <P>Result: data</P>
                <MdButton backgroundColor="error" margin="5px">
                  <P color="white" fontSize="sm" fontWeight="700">
                    정지하기
                  </P>
                </MdButton>
                <MdButton backgroundColor="gray" margin="5px">
                  <P color="white" fontSize="sm" fontWeight="700">
                    닫기
                  </P>
                </MdButton>
              </ThInfoStyle>
            </tr>
          </>
        ))}
      </tbody>
    </TableStyle>
  )
}

export {
  AdminCategoryRequestTable,
  AdminCategoryUpdateTable,
  AdminReportPostTable,
  AdminReportChannelTable,
  AdminReportCommentTable,
  AdminReportReplyCommentTable,
  AdminLogTable,
}
