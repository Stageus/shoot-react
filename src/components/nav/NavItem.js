import React, { useState } from "react"
import { Button } from "../basic/Button"
import Div from "../basic/Div"
import { IconText } from "../common/IconText"
import NavHashtag from "./NavHashtag"

const NavItem = (props) => {
  const menu = props.menu
  const hashtags = props.hashtags
  const svg = props.svg
  const [openMenu, setOpenMenu] = useState(false)
  const type = props.type

  const openHandler = (name) => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <Button width="210px" backgroundColor="transparent" onClick={openHandler}>
        <Div
          width="180px"
          height="38px"
          justifyContent="flex-start"
          margin="0px 0px 0px 20px"
          display="flex"
        >
          {type && openMenu ? (
            <IconText
              src={`/assets/images/${svg}Clicked.svg`}
              text={menu}
              fontColor="primary"
            />
          ) : (
            <IconText src={`/assets/images/${svg}.svg`} text={menu} />
          )}
        </Div>
      </Button>
      {menu !== "홈" && type && openMenu && <NavHashtag hashtags={hashtags} />}
    </>
  )
}

export default NavItem
