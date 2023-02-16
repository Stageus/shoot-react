import React from "react"
import { useNavigate } from "react-router-dom/dist"

import Div from "../basic/Div"
import Img from "../basic/Img"
import { H2 } from "../basic/H"
import P from "../basic/P"

const SearchChannel = (props) => {
  const { email, name, profile_img, description } = props.channelObject

  const navigate = useNavigate()
  const moveChannelEvent = () => {
    navigate(`/channel/${email}`)
  }

  const profileImgError = (e) => {
    e.target.src = "/assets/images/user.svg"
  }

  console.log(profile_img)

  return (
    <Div
      onClick={moveChannelEvent}
      width="100%"
      borderBottom="1px solid #C8C8C8"
    >
      <Div display="flex">
        <Div width="128px" height="128px" margin="20px 50px 20px 20px">
          <Img
            src={
              (profile_img &&
                `https://jochong.s3.ap-northeast-2.amazonaws.com/channel_img/${profile_img}`) ||
              "/assets/images/user.svg"
            }
            onError={profileImgError}
          />
        </Div>
        <Div>
          <Div>
            <H2 fontSize="xl" fontWeight="700">
              {name}
            </H2>
          </Div>
          <Div margin="0 0 10px">
            <P>{email}</P>
          </Div>
          <Div>
            <P>{description}</P>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}

export default SearchChannel
