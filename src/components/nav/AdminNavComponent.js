import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import NavItem from "./NavItem"

const NavBox = styled.nav`
  position: fixed;
  top: 60px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 220px;
  height: calc(100vh - 60px);
  text-align: center;
  overflow: auto;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: transparent;
  }
`

const AdminNav = () => {
  const [selectMenu, setSelectMenu] = useState("")
  const adminMenu = [
    {
      name: "카테고리 요청 확인",
      svg: "category",
      link: "/admin/category-request",
    },
    {
      name: "카테고리 추가",
      svg: "catAdd",
      link: "/admin/category-update",
    },
    {
      name: "신고 확인",
      svg: "report",
      link: "/admin/report/post",
    },
    {
      name: "로그확인",
      svg: "log",
      link: "/admin/log",
    },
    {
      name: "통계 확인",
      svg: "stats",
      link: "/admin/stats",
    },
  ]

  return (
    <React.Fragment>
      <NavBox>
        {adminMenu.map(({ name, svg, link }) => (
          <Link style={{ textDecoration: "none" }} to={`${link}`}>
            <NavItem
              key={name}
              menu={name}
              svg={svg}
              setSelectMenu={setSelectMenu}
              select={selectMenu === name && `${name}`}
              link={link}
            />
          </Link>
        ))}
      </NavBox>
    </React.Fragment>
  )
}

export default AdminNav
