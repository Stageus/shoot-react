import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { useGetFetch } from "../../hooks/useFetch";
import Div from "../basic/Div";
import P from "../basic/P";
import SeeMore from "../common/SeeMore";
import ChannelHeaderProfile from "./ChannelHeaderProfile";
import { channelInfoObject } from "../../recoil/channelState";
import { useParams } from "react-router-dom";

const ChannelHeader = () => {
  const [channelInfo, setChannelInfo] = useRecoilState(channelInfoObject);
  const [channelGetInfo, channelGetFetchData] = useGetFetch();
  const params = useParams();

  useEffect(() => {
    channelGetFetchData(`channel/${params.channelEmail}`);
  }, []);

  useEffect(() => {
    if (channelGetInfo !== null && channelGetInfo !== undefined) {
      setChannelInfo(channelGetInfo.data);
    }
  }, [channelGetInfo]);

  return (
    <Div width="100%">
      <Div width="100%">
        <Div display="flex" justifyContent="space-between" width="100%">
          <Div padding="10px 20px">
            <ChannelHeaderProfile />
          </Div>
          <SeeMore alarm report />
        </Div>
        <Div display="flex" padding="0 20px">
          <Div margin="0 20px 0 0">
            <P>구독자 : {channelInfo && channelInfo.subscribe_count}명</P>
          </Div>
        </Div>
        <Div padding="10px 20px" width="90%">
          <P>{channelInfo && channelInfo.description}</P>
        </Div>
      </Div>
    </Div>
  );
};

export default ChannelHeader;
