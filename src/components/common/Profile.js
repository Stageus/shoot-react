import React from "react"

import Div from "../basic/Div"
import Img from "../basic/Img"
import P from "../basic/P"
import { MdButton } from "../basic/Button"

const Profile = (props) => {
  const { profileImg, email } = props.profileObject

  const setMainContent = () => {
    alert(`./email_ + ${email}`)
  }

  const setSubscribe = () => {
    alert("구독")
  }

  const removeSubscribe = () => {
    alert("구독취소")
  }

  return (
    <Div display="flex">
      <Div onClick={setMainContent} pointer width="54px" height="54px">
        <Img src={profileImg || "/assets/images/user.svg"} />
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
          {props.viewCount && (
            <Div>
              <P>{props.viewCount}</P>
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
  )
}

export default Profile
