import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Button } from "../basic/Button"
import Div from "../basic/Div"
import { IconText } from "../common/IconText"

const NavItem = (props) => {
  const menu = props.menu
  const svg = props.svg
  const select = props.select
  const setSelectMenu = props.setSelectMenu
  const link = props.link

  let location = useLocation()
  useEffect(() => {
    if (location.pathname.includes(`${link}`)) {
      setSelectMenu(`${menu}`)
    }
    if (location.pathname.includes("/admin/report")) {
      setSelectMenu("신고 확인")
    }
  }, [location])

  const selectHandler = (name) => {
    setSelectMenu(name)
  }

  return (
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
        {select === menu ? (
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
  )
}

export default NavItem
