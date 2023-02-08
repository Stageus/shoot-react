import React, { useState } from "react"
import styled from "styled-components"

import { SmButton } from "../basic/Button"
import Div from "../basic/Div"
import Img from "../basic/Img"
import { Input } from "../basic/Input"
import P from "../basic/P"
import NavItem from "./NavItem"
import NavCategoryItem from "./NavCategoryItem"

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

const Line = styled.hr`
  width: 196px;
  height: 1px;
  border: 0;
  background: #c8c8c8;
`

const Nav = () => {
  const [selectMenu, setSelectMenu] = useState("홈")
  const categoryMenu = [
    {
      name: "홈",
      hashtags: [],
    },
    {
      name: "게임",
      hashtags: ["롤", "오버워치", "롤토체스", "배틀그라운드", "메이플스토리"],
    },
    {
      name: "음악",
      hashtags: ["클래식", "가요", "아이브", "르세라핌", "빅뱅"],
    },
    {
      name: "영화",
      hashtags: ["무비", "아바타", "엄청이름이긴영화열두글자", "영화", "영화2"],
    },
    {
      name: "스포츠",
      hashtags: ["축구", "농구", "야구", "배구", "스케이트"],
    },
  ]
  const generalMenu = [
    {
      name: "HOT",
      svg: "hot",
    },
    {
      name: "즐겨찾기",
      svg: "star",
    },
    {
      name: "구독한 채널",
      svg: "subscribe",
    },
    {
      name: "시청기록",
      svg: "viewRecord",
    },
  ]

  return (
    <Div display="flex">
      <NavBox>
        {categoryMenu.map(({ name, hashtags }) => (
          <NavCategoryItem
            key={name}
            menu={name}
            hashtags={hashtags}
            svg={"menuArrow"}
            select={selectMenu === name && `${name}`}
            setSelectMenu={setSelectMenu}
          />
        ))}
        <Line />
        {generalMenu.map(({ name, svg }) => (
          <NavItem
            key={name}
            menu={name}
            svg={svg}
            setSelectMenu={setSelectMenu}
            select={selectMenu === name && `${name}`}
          />
        ))}

        <Line />
        <Div margin="0px 0px 10px 15px">
          <Div display="flex">
            <Div width="20px" height="20px" margin="0px 0px 0px 5px">
              <Img src={"/assets/images/bulb.svg"} />
            </Div>
            <Div margin="0px 0px 0px 10px">
              <P fontSize="sm" fontWeight="700">
                이 카테고리, 추가해주세요!
              </P>
            </Div>
          </Div>

          <Div margin="5px 0px 5px 0px">
            <Input
              width="120px"
              height="22px"
              placeholder="내용을 입력하세요"
              border="1px solid #c8c8c8"
              fontSize="sm"
              borderRadius="5px"
              padding="0px 0px 0px 10px"
            />
            <SmButton backgroundColor="primary" margin="5px">
              <P color="white" fontSize="sm" fontWeight="800">
                입력
              </P>
            </SmButton>
          </Div>

          <P fontSize="xs" color="gray">
            띄어쓰기 없이 12자까지 입력 가능합니다
          </P>
        </Div>
      </NavBox>
    </Div>
  )
}

export default Nav
