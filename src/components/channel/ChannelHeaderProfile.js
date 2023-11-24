import React from "react";
import { useRecoilValue } from "recoil";

import Profile from "../common/Profile";
import { channelInfoObject } from "../../recoil/channelState";

const ChannelHeaderProfile = () => {
  const channelInfo = useRecoilValue(channelInfoObject);

  return (
    <Profile
      profileObject={channelInfo}
      name={channelInfo.name}
      isSubscribe={channelInfo.subscribe_state}
    />
  );
};

export default ChannelHeaderProfile;
