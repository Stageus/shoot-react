import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import Div from "../basic/Div";
import P from "../basic/P";
import ChannelVideoContainer from "./ChannelVideoComponent";
import ChannelInfoComponent from "./ChannelInfoComponent";
import { channelInfoObject } from "../../recoil/channelState";
import { useRecoilValue } from "recoil";
import { useGetFetch } from "../../hooks/useFetch";
import { postItemListState } from "../../recoil/postState";
import PostComponent from "../post/PostComponent";

const ChannelTab = (props) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const channel = useRecoilValue(channelInfoObject);
  const tabHeaderList = [
    { header_idx: 0, header: "동영상", link: `/channel/${channel.email}` },
    { header_idx: 1, header: "정보", link: `/channel/${channel.email}/info` },
  ];

  const selectMenuHandler = (index) => {
    navigate(tabHeaderList[index].link);
  };

  const setPostItemList = useSetRecoilState(postItemListState);

  const [postChannelGetSources, postChannelGetFetchData] = useGetFetch();
  useEffect(() => {
    postChannelGetFetchData("post/all/${params.channelEmail}");
  }, []);

  useEffect(() => {
    if (postChannelGetSources !== null && postChannelGetSources !== undefined) {
      const tmpPostList = postChannelGetSources.data;
      setPostItemList(tmpPostList);
    }
  }, [postChannelGetSources]);

  // return (
  //   <PostComponent
  //     contentType="postList"
  //     emptyMessage="등록된 게시글이 없습니다."
  //   />
  // );

  const tabHeader = tabHeaderList.map((element) => {
    return (
      <Div
        key={element.header_idx}
        display="flex"
        width="20%"
        borderBottom={location === element.link ? "5px solid #FF6B6B" : "none"}
        pointer
        onClick={() => selectMenuHandler(element.header_idx)}
      >
        <Div padding="10px" display="flex">
          <Div width="fit-content">
            <P fontSize="lg">{element.header}</P>
          </Div>
        </Div>
      </Div>
    );
  });

  return (
    <React.Fragment>
      <Div
        display="flex"
        justifyContent="flex-center"
        width="100%"
        borderBottom="0.5px solid #C8C8C8"
      >
        {tabHeader}
      </Div>
      <Div padding="30px">
        {location === `/channel/${channel.email}` ? (
          <PostComponent
            contentType="postList"
            emptyMessage="등록된 게시글이 없습니다."
          />
        ) : (
          ""
        )}
        <Outlet />
      </Div>
    </React.Fragment>
  );
};

export default ChannelTab;
