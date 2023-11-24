import React, { useState, useCallback } from "react";
import styled from "styled-components";

import P from "../basic/P";
import Div from "../basic/Div";
import { Input } from "../basic/Input";

const UploadHashTag = () => {
  // onChange로 관리할 문자열
  const [hashtag, setHashtag] = useState("");
  // 해시태그를 담을 배열
  const [hashArr, setHashArr] = useState([]);

  const onKeyUp = useCallback(
    (e) => {
      if (process.browser) {
        /* 요소 불러오기, 만들기*/
        const $HashWrapOuter = document.querySelector(".HashWrapOuter");
        const $HashWrapInner = document.createElement("div");
        $HashWrapInner.className = "HashWrapInner";

        /* 태그를 클릭 이벤트 관련 로직 */
        $HashWrapInner.addEventListener("click", () => {
          $HashWrapOuter?.removeChild($HashWrapInner);
          console.log($HashWrapInner.innerHTML);
          setHashArr(hashArr.filter((hashtag) => hashtag));
        });

        /* enter 키 코드 :13 */
        if (e.keyCode === 13 && e.target.value.trim() !== "") {
          console.log("Enter Key 입력됨!", e.target.value);
          $HashWrapInner.innerHTML = "#" + e.target.value;
          $HashWrapOuter?.appendChild($HashWrapInner);
          setHashArr((hashArr) => [...hashArr, hashtag]);
          setHashtag("");
        }
      }
    },
    [hashtag, hashArr]
  );

  /* emotion css 태그 */

  const HashDivWrap = styled.div`
    margin-top: 24px;
    color: rgb(52, 58, 64);
    font-size: 1.125rem;
    display: flex;
    flex-wrap: wrap;
    letter-spacing: -0.6px;
    color: #444241;
    border-bottom: 1.6px solid gray;
    padding: 2px 2px 8px 2px;

    .HashWrapOuter {
      display: flex;
      flex-wrap: wrap;
    }

    .HashWrapInner {
      margin-top: 5px;
      background: #ffeee7;
      border-radius: 56px;
      padding: 8px 12px;
      color: #ff6e35;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 1.4rem;
      line-height: 20px;
      margin-right: 5px;
      cursor: pointer;
    }

    .HashInput {
      width: auto;
      margin: 10px;
      display: inline-flex;
      outline: none;
      cursor: text;
      line-height: 2rem;
      margin-bottom: 0.75rem;
      min-width: 8rem;
      border: none;
    }
  `;

  return (
    <Div>
      {/* <Div margin="20px">
        <P fontSize="xl">해시태그</P>
      </Div>
      <Div className="HashWrap">
        <Div className="HashWrapOuter">
          <P color="primary" fontSize="xl"></P>
        </Div>
        <Input
          placeholder="엔터 또는 스페이스바를 이용해 해시태그를 등록, 5개까지 입력 가능"
          width="780px"
          height="40px"
          margin="0 20px"
          border="1px solid lightGray"
          defaultValue={hashtag}
          onKeyUp={onKeyUp}
          className="HashInput"
          // onChange={onChangeHashtag}
        ></Input>
      </Div> */}
    </Div>

    // <HashDivWrap className="HashWrap">
    //   <div className="HashWrapOuter"></div>
    //   <input
    //     className="HashInput"
    //     type="text"
    //     value={hashtag}
    //     // onChange={onChangeHashtag}
    //     onKeyUp={onKeyUp}
    //     placeholder="해시태그 입력"
    //   />
    // </HashDivWrap>
  );
};

export default UploadHashTag;
