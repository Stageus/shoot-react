import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useRecoilState } from "recoil"
import { Link } from "react-router-dom"

import { SmButton } from "../basic/Button"
import Div from "../basic/Div"
import Img from "../basic/Img"
import { Input } from "../basic/Input"
import P from "../basic/P"
import NavItem from "./NavItem"
import NavCategoryItem from "./NavCategoryItem"
import { categoryMenuState, categoryState } from "../../recoil/navState"
import useInput from "../../hooks/useInput"

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
  const [categoryRequest, onChangeCategoryRequest] = useInput()
  const generalMenu = [
    {
      name: "HOT",
      svg: "hot",
      link: "/hot",
    },
    {
      name: "즐겨찾기",
      svg: "star",
      link: "/bookmark",
    },
    {
      name: "구독한 채널",
      svg: "subscribe",
      link: "/subscribe",
    },
    {
      name: "시청기록",
      svg: "viewRecord",
      link: "/history",
    },
  ]

  const [categoryMenu, setCategoryMenu] = useRecoilState(categoryMenuState)
  const [category, setCategory] = useRecoilState(categoryState)
  const [isCategoryRequest, setIsCategoryRequest] = useState(true)

  useEffect(() => {
    //임시데이터
    /* let tmpCategoryMenu = [
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

    setCategoryMenu(tmpCategoryMenu) */

    /* if (isCategoryRequest) {
      setCategory({ category: categoryRequest })
    } */

    fetch("https://api.슛.site/category/all", {
      credentials: "include",
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setCategoryMenu(res.data)
        setCategoryMenu(res.data)
      })
  }, [])

  return (
    <Div display="flex">
      <NavBox>
        <Link style={{ textDecoration: "none" }} to={`/`}>
          <NavCategoryItem
            key={"홈"}
            idx={0}
            menu={"홈"}
            svg={"menuArrow"}
            select={selectMenu === "홈" && "홈"}
            setSelectMenu={setSelectMenu}
          />
        </Link>
        {categoryMenu &&
          categoryMenu.map(({ category_idx, category_name, category_time }) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`/category/${category_name}`}
            >
              <NavCategoryItem
                key={category_name}
                idx={category_idx}
                menu={category_name}
                svg={"menuArrow"}
                select={selectMenu === category_name && `${category_name}`}
                setSelectMenu={setSelectMenu}
              />
            </Link>
          ))}
        <Line />
        {generalMenu.map(({ name, svg, link }) => (
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
              onChange={(e) => {
                onChangeCategoryRequest(e)
                setCategory({ category: categoryRequest })
              }}
            />
            <SmButton
              backgroundColor="primary"
              margin="5px"
              onClick={() => {
                // setIsCategoryRequest(true)

                console.log(category)
                console.log(categoryRequest)
                fetch("https://api.슛.site/request-category", {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(category),
                }).then(async (res) => {
                  const result = await res.json()
                  console.log(result)
                  console.log(res)
                })
              }}
            >
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
