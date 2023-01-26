import React from "react";

import Profile from "../common/Profile";

const ChannelHeaderProfile = (props) => {
  console.log(props);
  const channelProfile = props.channelInfo.profile;
  const channelName = props.channelInfo.name;
  const channelIsSubscribe = props.channelInfo.subscribe_state;
  return (
    <Profile
      profileObject={channelProfile}
      name={channelName}
      isSubscribe={channelIsSubscribe}
    />
  );
};

export default ChannelHeaderProfile;
