import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// import Editor from "./VideoEditor/VideoEditor";

import Div from "../basic/Div";
import { H1, H2 } from "../basic/H";
import P from "../basic/P";
import { Input, TextArea } from "../basic/Input";
import Img from "../basic/Img";
import { MdButton } from "../basic/Button";
import TextCounter from "../common/TextCounter";
import UploadHashTag from "./UploadHashTag";
import UploadVote from "./UploadVote";
import { inputImgState, cropImgState } from "../../recoil/uploadState";
import { modalOpenState, modalInfoState } from "../../recoil/modalState";
import useInput from "../../hooks/useInput";
import useValidationInput from "../../hooks/useValidationInput";
import useFocusInput from "../../hooks/useFocusInput";
import LargeEventTextarea from "../common/LargeEventTextarea";
import UploadRadio from "./UploadRadio";

import {
  categoryTypeList,
  postTypeList,
  checkedState,
} from "../../recoil/uploadState";
import { useGetFetch } from "../../hooks/useFetch";
import LargeEventInput from "../common/LargeEventInput";
import UploadLink from "./UploadLink";

const Label = styled.label`
  display: flex;
  cursor: pointer;
`;
const VideoLabel = styled(Label)`
  flex-direction: column;
  justify-content: space-evenly;
  align-itmes: center;
  width: 780px;
  height: 218px;
  border: 1px solid lightgray;
  padding: 5px 10px;
`;

const ThumbnailLabel = styled(Label)`
  flex-direction: column;
  justify-content: space-evenly;
  align-itmes: center;
  width: 780px;
  height: fit-content;
  border: 2px solid lightgray;
  padding: 20px 0;
`;

const UploadComponent = () => {
  const [categoryList, setCategoryInfo] = useRecoilState(categoryTypeList);
  const [categoryGetInfo, categoryGetFetchData] = useGetFetch();

  useEffect(() => {
    categoryGetFetchData("category/all");
  }, []);
  useEffect(() => {
    if (categoryGetInfo !== null && categoryGetInfo !== undefined) {
      setCategoryInfo(categoryGetInfo.data);
    }
    console.log(categoryList);
  }, [categoryGetInfo]);

  const [postList, setPostList] = useRecoilState(postTypeList);

  const [checked, setChecked] = useRecoilState(checkedState);

  const [thumbnailImage, setThumbnailImage] = useRecoilState(inputImgState);
  const croppedImage = useRecoilValue(cropImgState);

  const setOpenThumbnailModal = useSetRecoilState(modalOpenState);
  const setModalThumbnailInfo = useSetRecoilState(modalInfoState);

  const setOpenVideoModal = useSetRecoilState(modalOpenState);
  const setModalVideoInfo = useSetRecoilState(modalInfoState);

  const postNameRegExp = /^.{1,32}$/;
  const postNameErrorMessage = "32자 이내로 제목을 작성해주세요.";

  const postContentRegExp = /^.{1,1000}$/;
  const postContentErrorMessage = "1000자 이내로 본문을 작성해주세요.";

  const [postName, onChangePostName] = useInput();
  const [postNameMessage, isPostName, onChangePostNameValidation] =
    useValidationInput(postNameRegExp, postNameErrorMessage);
  const [postNameFocus, onFocusPostName, onBlurPostName] = useFocusInput();

  const [postContent, onChangePostContent] = useInput();
  const [postContentMessage, isPostContent, onChangePostContentValidation] =
    useValidationInput(postContentRegExp, postContentErrorMessage);
  const [postContentFocus, onFocusPostContent, onBlurPostContent] =
    useFocusInput();

  const setCheckedValue = (e, props) => {
    setChecked(props);
    console.log(checked);
  };

  const category = categoryList.map((element) => {
    return (
      // <Div
      //   key={element.category_idx}
      //   display="flex"
      //   width="135px"
      //   justifyContent="flex-start"
      // >
      //   <Input
      //     id={element.category_idx}
      //     type="radio"
      //     name="category"
      //     value={element.category_name}
      //     display="none"
      //     // checked={checked === element.value}
      //   ></Input>
      //   <Label htmlFor={element.category_idx} value={element.category_name}>
      //     <Div margin="0 5px 0 0">
      //       <Img src="/assets/images/checkOn.svg"></Img>
      //     </Div>
      //     <Div>
      //       <P>{element.category_name}</P>
      //     </Div>
      //   </Label>
      // </Div>
      <UploadRadio
        name="categoryType"
        value={element.category_name}
      ></UploadRadio>
    );
  });

  const post = postList.map((element) => {
    return (
      // <Div key={element.idx} display="flex" width="135px">
      //   <Input
      //     type="radio"
      //     name="category"
      //     value={element.value}
      //     margin="0 10px 0 0"
      //   ></Input>
      //   <Label>{element.value}</Label>
      // </Div>
      <UploadRadio name="postType" value={element.value}></UploadRadio>
    );
  });

  return (
    <React.Fragment>
      <Div>
        <Div margin="20px">
          <H1 fontSize="title">동영상 업로드</H1>
        </Div>
        <Div display="flex" margin="20px">
          <Div>
            <P fontSize="xl">동영상 편집</P>
          </Div>
          <Div margin="0 0 0 10px">
            <P color="primary" fontSize="xl">
              *
            </P>
          </Div>
          <Div margin="0 0 0 10px">
            <P fontWeight="700">
              동영상 편집 후 편집 완료 버튼을 눌러주세요. ( 1분 30초 이내 )
            </P>
          </Div>
        </Div>
        <Div>
          <Div margin="20px">
            {/* <Editor></Editor> */}
            <Input
              type="file"
              id="uploadVideo"
              display="none"
              onChange={(e) => {
                setOpenVideoModal(true);
                setModalVideoInfo({ type: "thumbnail" });
              }}
            ></Input>
            <Div
              display="flex"
              justifyContent="flex-end"
              width="782px"
              margin="20px 0"
            ></Div>
          </Div>
        </Div>

        <Div display="flex">
          <Div margin="20px">
            <P fontSize="xl">제목</P>
          </Div>
          <Div>
            <P color="primary" fontSize="xl">
              *
            </P>
          </Div>
        </Div>
        {/* <Input
          placeholder="32글자 이내"
          width="780px"
          height="40px"
          margin="0 20px"
          border="1px solid lightGray"
        ></Input> */}
        <Div>
          <LargeEventInput
            placeholder="32글자 이내로 작성해주세요."
            width="780px"
            height="40px"
            margin="0 20px"
            onChange={(e) => {
              onChangePostName(e);
              onChangePostNameValidation(e);
            }}
            onFocus={onFocusPostName}
            onBlur={onBlurPostName}
            isFocus={postNameFocus}
          ></LargeEventInput>
          {!postNameFocus ? (
            <Div margin="0 20px">
              <P color="red">{postNameMessage}</P>
            </Div>
          ) : null}
        </Div>
        <Div display="flex">
          <Div margin="20px">
            <P fontSize="xl">카테고리</P>
          </Div>
        </Div>
        <Div display="flex" justifyContent="flex-start">
          {category}
        </Div>

        <Div display="flex">
          <Div margin="20px">
            <P fontSize="xl">설명</P>
          </Div>
        </Div>
        <Div position="relative" margin="20px">
          <Div>
            <LargeEventTextarea
              placeholder="1000글자 이내"
              width="780px"
              height="150px"
              border="1px solid lightGray"
              onChange={(e) => {
                onChangePostContent(e);
                onChangePostContentValidation(e);
              }}
              onFocus={onFocusPostContent}
              onBlur={onBlurPostContent}
              isFocus={postContentFocus}
            ></LargeEventTextarea>
            <TextCounter characterLimit={1000}></TextCounter>
          </Div>

          {!postContentFocus ? (
            <Div margin="0 20px">
              <P color="red">{postContentMessage}</P>
            </Div>
          ) : null}
        </Div>

        <Div display="flex">
          <Div margin="20px">
            <P fontSize="xl">썸네일 등록</P>
          </Div>
        </Div>
        <Div margin="20px" display="flex" direction="column">
          <ThumbnailLabel htmlFor="ThumbnailInput">
            <Div display="flex" direction="column" width="100%">
              <Div>
                <Img src="/assets/images/upload.svg"></Img>
              </Div>
              <Div>
                <P color="gray">썸네일로 지정할 이미지를 선택해주세요</P>
              </Div>

              <Div
                width="200px"
                margin="10px"
                display={croppedImage === null && "none"}
              >
                <Img src={croppedImage} />
              </Div>
            </Div>
          </ThumbnailLabel>
          <Input
            id="ThumbnailInput"
            type="file"
            accept="image/*"
            onChange={(e) => {
              setThumbnailImage(URL.createObjectURL(e.target.files[0]));
              setOpenThumbnailModal(true);
              setModalThumbnailInfo({ type: "thumbnail", content: "video" });
            }}
            display="none"
          />
        </Div>

        <Div display="flex">
          <Div margin="20px">
            <P fontSize="xl">형식</P>
          </Div>
          <Div>
            <P color="primary" fontSize="xl">
              *
            </P>
          </Div>
        </Div>
        <Div display="flex">{post}</Div>

        <UploadVote></UploadVote>
        {/* <UploadLink></UploadLink> */}

        <UploadHashTag></UploadHashTag>

        <Div
          display="flex"
          width="100%"
          justifyContent="flex-end"
          margin="50px 0"
        >
          <MdButton backgroundColor="primary">
            <P color="white">게시</P>
          </MdButton>
        </Div>
      </Div>
    </React.Fragment>
  );
};

export default UploadComponent;
