import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";

import { useGetFetch } from "../../hooks/useFetch";
import ChannelHeaderComponent from "../../components/channel/ChannelHeaderComponent";
import ChannelTabComponent from "../../components/channel/ChannelTabComponent";
import { channelInfoObject } from "../../recoil/channelState";

export const ChannelPage = () => {
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
    <div>
      <ChannelHeaderComponent></ChannelHeaderComponent>
      <ChannelTabComponent></ChannelTabComponent>
    </div>
  );
};
