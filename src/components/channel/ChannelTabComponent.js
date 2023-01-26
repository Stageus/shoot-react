import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Div from "../basic/Div";
import P from "../basic/P";
import ChannelVideoContainer from "./ChannelVideoComponent";
import ChannelnfoComponent from "./ChannelnfoComponent";

const ChannelTab = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const tabHeaderList = [
    { header_idx: 0, header: "동영상", link: "/channel" },
    { header_idx: 1, header: "정보", link: "/channel/info" },
    { header_idx: 2, header: "통계", link: "/channel/stats" },
  ];

  const selectMenuHandler = (index) => {
    navigate(tabHeaderList[index].link);
  };

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
        {location === "/channel" ? (
          <ChannelVideoContainer></ChannelVideoContainer>
        ) : (
          ""
        )}
        <Outlet />
      </Div>
    </React.Fragment>
  );
};

export default ChannelTab;
