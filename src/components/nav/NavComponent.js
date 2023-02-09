import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useRecoilState } from "recoil"

import { SmButton } from "../basic/Button"
import Div from "../basic/Div"
import Img from "../basic/Img"
import { Input } from "../basic/Input"
import P from "../basic/P"
import NavItem from "./NavItem"
import NavCategoryItem from "./NavCategoryItem"
import { categoryMenuState } from "../../recoil/navState"

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

  const [categoryMenu, setCategoryMenu] = useRecoilState(categoryMenuState)

  useEffect(() => {
    let tmpCategoryMenu = [
      {
        category_idx: 1,
        category_name: "홈",
        category_time: "",
      },
      {
        category_idx: 2,
        category_name: "게임",
        category_time: "",
      },
      {
        category_idx: 3,
        category_name: "음악",
        category_time: "",
      },
      {
        category_idx: 4,
        category_name: "영화",
        category_time: "",
      },
      {
        category_idx: 5,
        category_name: "스포츠",
        category_time: "",
      },
    ]

    setCategoryMenu(tmpCategoryMenu)

    /*fetch("http://api.슛.site/category/all", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data)
        setCategoryMenu(res.data)
      })*/
  }, [])

  return (
    <Div display="flex">
      <NavBox>
        {categoryMenu.map(({ category_idx, category_name, category_time }) => (
          <NavCategoryItem
            key={category_idx}
            idx={category_idx}
            menu={category_name}
            svg={"menuArrow"}
            select={selectMenu === category_name && `${category_name}`}
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
