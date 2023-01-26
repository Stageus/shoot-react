import React from "react";

import Div from "../basic/Div";
import P from "../basic/P";
import SeeMore from "../common/SeeMore";
import ChannelHeaderProfile from "./ChannelHeaderProfile";

const ChannelHeader = () => {
  const tmpChannelInfo = {
    profile: {
      email: "undefined@shoot.com",
      profileImg: "/assets/images/user.svg",
    },
    name: "webstorm",
    sex: 0,
    authority: 0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu justo dui. Duis at pellentesque justo. Vivamus in orci elementum sapien convallis rutrum. Praesent vestibulum scelerisque purus, et vehicula mauris pulvinar id.",
    view_count: 123456,
    subscriber_count: 987654,
    channel_date: "2022-12-31",
    birth: "2033-1-1",
    subscribe_state: false,
  };

  return (
    <Div width="100%">
      <Div widtt="100%">
        <Div display="flex" justifyContent="space-between" width="100%">
          <Div padding="10px 20px">
            <ChannelHeaderProfile channelInfo={tmpChannelInfo} />
          </Div>
          <SeeMore alarm report />
        </Div>
        <Div display="flex" padding="0 20px">
          <Div margin="0 20px 0 0">
            <P>구독자 : {tmpChannelInfo.subscriber_count}</P>
          </Div>
          <Div>
            <P>총 영상 조회수 : {tmpChannelInfo.view_count}</P>
          </Div>
        </Div>
        <Div padding="10px 20px" width="90%">
          <P>{tmpChannelInfo.description}</P>
        </Div>
      </Div>
    </Div>
  );
};

export default ChannelHeader;
