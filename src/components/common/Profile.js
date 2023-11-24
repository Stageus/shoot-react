import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { usePostFetch, useDeleteFetch } from "../../hooks/useFetch";
import Div from "../basic/Div";
import Img from "../basic/Img";
import P from "../basic/P";
import { MdButton } from "../basic/Button";
import { isLoginState } from "../../recoil/headerState";
import { isSubscribeState } from "../../recoil/postState";

const Profile = (props) => {
  const { profileImg, email } = props.profileObject;
  const width = props.width;
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [isSubscribe, setIsSubscribe] = useRecoilState(isSubscribeState);

  const navigate = useNavigate();
  const setMainContent = () => {
    navigate(`/channel/${email}`);
  };

  const [subscribePostSources, subscribePostFetchData] = usePostFetch();
  const setSubscribe = () => {
    if (isLogin === false) {
      alert("로그인 후 이용 가능합니다. ");
    } else {
      subscribePostFetchData(`subscribe?email=${email}`);
      setIsSubscribe(true);
    }
  };

  const [subscribeDeleteSources, subscribeDeleteFetchData] = usePostFetch();
  const removeSubscribe = () => {
    if (isLogin === false) {
      alert("로그인 후 이용 가능합니다. ");
    } else {
      subscribeDeleteFetchData(`subscribe?email=${email}`);
      setIsSubscribe(false);
    }
  };

  const profileImgError = (e) => {
    e.target.src = "/assets/images/user.svg";
  };

  return (
    <Div display="flex">
      <Div
        onClick={setMainContent}
        pointer
        width={width || "54px"}
        height={width || "54px"}
      >
        <Img
          src={
            (profileImg &&
              `https://jochong.s3.ap-northeast-2.amazonaws.com/channel_img/${profileImg}`) ||
            "/assets/images/user.svg"
          }
          onError={profileImgError}
        />
      </Div>
      {props.name && (
        <Div margin="10px">
          <Div onClick={setMainContent} pointer>
            <P
              fontWeight="700"
              fontSize={props.isSubscribe !== undefined && "xl"}
            >
              {props.name}
            </P>
          </Div>
          {props.email && (
            <Div>
              <P>{email}</P>
            </Div>
          )}
          {props.viewCount !== undefined && (
            <Div>
              <P>{`조회수 ${props.viewCount}회`}</P>
            </Div>
          )}
          {(props.isSubscribe === false && (
            <MdButton onClick={setSubscribe} backgroundColor="primary">
              <P color="white">구독</P>
            </MdButton>
          )) ||
            (props.isSubscribe === true && (
              <MdButton
                onClick={removeSubscribe}
                border="2px solid #FF6B6B"
                backgroundColor="white"
              >
                <P color="primary">구독중</P>
              </MdButton>
            ))}
        </Div>
      )}
    </Div>
  );
};

export default Profile;
