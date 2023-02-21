import React from "react";
import { useRecoilValue } from "recoil";

import Div from "../basic/Div";
import P from "../basic/P";
import SeeMore from "../common/SeeMore";
import Profile from "../common/Profile";
import { Link } from "react-router-dom";
import { channelInfoObject } from "../../recoil/channelState";

const ChannelInfoContainer = () => {
  const channelInfo = useRecoilValue(channelInfoObject);

  const birthDate = channelInfo.birth.substring(
    0,
    channelInfo.birth.indexOf("T")
  );
  const birth = birthDate.split("-");
  const channelCreateDate = channelInfo.creation_time.substring(
    0,
    channelInfo.creation_time.indexOf("T")
  );
  const channelDate = channelCreateDate.split("-");

  return (
    <React.Fragment>
      <Div margin="0 0 20px 0">
        <Div margin="0 0 10px 0">
          <P fontWeight="700">가입한 이메일</P>
        </Div>
        <P>{channelInfo.email}</P>
      </Div>
      <Div margin="0 0 20px 0">
        <Div margin="0 0 10px 0">
          <P fontWeight="700">가입날짜</P>
        </Div>
        <P>
          {birth[0]}년 {birth[1]}월 {birth[2]}일{" "}
        </P>
      </Div>
      <Div margin="0 0 20px 0">
        <Div margin="0 0 10px 0">
          <P fontWeight="700">성별</P>
        </Div>
        <P>{channelInfo.sex === 0 ? "남성" : "여성"}</P>
      </Div>
      <Div margin="0 0 20px 0">
        <Div margin="0 0 20px 0">
          <P fontWeight="700">가입날짜</P>
        </Div>
        <P>
          {channelDate[0]}년 {channelDate[1]}월 {channelDate[2]}일{" "}
        </P>
      </Div>
      <Div margin="0 0 20px 0">
        <Div margin="0 0 20px 0">
          <Link to="/reset-pw" style={{ textDecoration: "none" }}>
            <P color="primary" fontWeight="700">
              비밀번호 변경하기
            </P>
          </Link>
        </Div>
      </Div>
    </React.Fragment>
  );
};

export default ChannelInfoContainer;
