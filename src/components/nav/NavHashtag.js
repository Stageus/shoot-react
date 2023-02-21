import React, { useEffect } from "react"
import { useRecoilState } from "recoil"

import Div from "../basic/Div"
import P from "../basic/P"
import Hashtag from "../common/Hashtag"
import { topHashtagState } from "../../recoil/navState"

const NavHashtag = (props) => {
  const idx = props.idx
  const [topHashtag, setTopHashtag] = useRecoilState(topHashtagState)

  useEffect(() => {
    fetch(`https://api.슛.site/top-hashtag/all?category=${idx}`, {
      method: "GET",
    }).then(async (res) => {
      const result = await res.json()
      setTopHashtag(result.data)
    })
  }, [])

  return (
    <Div margin="0px 0px 0px 43px">
      <Div margin="0px 0px 7px 0px">
        <P fontSize="sm" fontWeight="700" color="gray">
          인기급상승
        </P>
      </Div>

      {topHashtag &&
        topHashtag.map((hashtag) => (
          <Div key={hashtag.name} margin="0px 0px 4px 0px">
            <Hashtag hashtag={hashtag.name} fontSize="sm" />
          </Div>
        ))}
    </Div>
  )
}

export default NavHashtag
