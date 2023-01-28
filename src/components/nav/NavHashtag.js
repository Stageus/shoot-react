import React from "react"
import Div from "../basic/Div"
import P from "../basic/P"
import Hashtag from "../common/Hashtag"

const NavHashtag = (props) => {
  const hashtags = props.hashtags

  return (
    <Div margin="0px 0px 0px 43px">
      <Div margin="0px 0px 7px 0px">
        <P fontSize="sm" fontWeight="700" color="gray">
          인기급상승
        </P>
      </Div>

      {hashtags &&
        hashtags.map((hashtag) => (
          <Div key={hashtag} margin="0px 0px 4px 0px">
            <Hashtag hashtag={hashtag} fontSize="sm" />
          </Div>
        ))}
    </Div>
  )
}

export default NavHashtag
