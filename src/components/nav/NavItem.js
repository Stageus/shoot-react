import React from "react"
import { Button } from "../basic/Button"
import Div from "../basic/Div"
import { IconText } from "../common/IconText"
import NavHashtag from "./NavHashtag"

const NavItem = (props) => {
  const menu = props.menu
  const hashtags = props.hashtags
  const svg = props.svg
  const type = props.type
  const select = props.select
  const setSelectMenu = props.setSelectMenu

  const selectHandler = (name) => {
    setSelectMenu(name)
  }

  return (
    <>
      <Button
        width="210px"
        backgroundColor="transparent"
        onClick={() => {
          selectHandler(menu)
        }}
      >
        <Div
          width="180px"
          height="38px"
          justifyContent="flex-start"
          margin="0px 0px 0px 20px"
          display="flex"
        >
          {select ? (
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
      {menu !== "홈" && type && select ? (
        <NavHashtag hashtags={hashtags} />
      ) : null}
    </>
  )
}

export default NavItem
