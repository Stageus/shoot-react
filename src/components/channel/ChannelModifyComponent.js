import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import EventInput from "../common/EventInput";
import Div from "../basic/Div";
import P from "../basic/P";
import { H1 } from "../basic/H";
import Img from "../basic/Img";
import useFocusInput from "../../hooks/useFocusInput";
import useInput from "../../hooks/useInput";
import useValidationInput from "../../hooks/useValidationInput";
import SmallEventInput from "../common/SmallEventInput";
import LargeEventInput from "../common/LargeEventInput";
import { MdButton } from "../basic/Button";
import { modalOpenState, modalInfoState } from "../../recoil/modalState";
import { channelModifyState, cropImgState } from "../../recoil/uploadState";
import { Input } from "../basic/Input";
import { inputImgState } from "../../recoil/uploadState";
import { Link, Navigate } from "react-router-dom";

const SelectBox = styled.select`
  width: 360px;
  height: 48px;
  font-size: 18px;
  border: none;
  margin-left: 20px;
  &:focus {
    outline: none;
  }
`;

const ThumbnailDiv = styled(Div)`
  overflow: hidden;
`;

const Label = styled.label`
  cursor: pointer;
  color: #ff6b6b;
`;

const ChannelModifyComponent = () => {
  const navigate = useNavigate();

  const channelNameRegExp = /^\S.{2,50}\S$/;
  const channelNameErrorMessage = "공백 없이 2~50자를 입력해주세요.";

  const descriptionRegExp = /^.{0,500}$/;
  const descriptionErrorMessage = "500자 이내로 입력해주세요.";

  const yearRegExp = /^(19[0-9][0-9]|20\d{2})$/;
  const monthRegExp = /^(0[0-9]|1[0-2])$/;
  const dayRegExp = /^(0[1-9]|[1-2][0-9]|3[0-1])$/;
  const birthErrorMessage = "올바른 생년월일을 입력해주세요.";

  const [channelName, onChangeChannelName] = useInput();
  const [channelNameMessage, isChannelName, onChangeChannelNameValidation] =
    useValidationInput(channelNameRegExp, channelNameErrorMessage);

  const [channelNameFocus, onFocusChannelName, onBlurChannelName] =
    useFocusInput();

  const [description, onChangeDescription] = useInput();
  const [descriptionMessage, isDescription, onChangeDescriptionValidation] =
    useValidationInput(descriptionRegExp, descriptionErrorMessage);
  const [descriptionFocus, onFocusDescription, onBlurDescription] =
    useFocusInput();

  const [year, onChangeYear] = useInput();
  const [yearMessage, isYear, onChangeYearValidation] = useValidationInput(
    yearRegExp,
    birthErrorMessage
  );
  const [yearFocus, onFocusYear, onBlurYear] = useFocusInput();

  const [month, onChangeMonth] = useInput();
  const [monthMessage, isMonth, onChangeMonthValidation] = useValidationInput(
    monthRegExp,
    birthErrorMessage
  );
  const [monthFocus, onFocusMonth, onBlurMonth] = useFocusInput();

  const [day, onChangeDay] = useInput();
  const [dayMessage, isDay, onChangeDayValidation] = useValidationInput(
    dayRegExp,
    birthErrorMessage
  );
  const [dayFocus, onFocusDay, onBlurDay] = useFocusInput();

  const [selected, setSelected] = useState("");

  const [channelModify, setChannelModify] = useRecoilState(channelModifyState);

  useEffect(() => {
    if (isYear && isMonth && isDay) {
      setChannelModify({
        ...channelModify,
        birth: `${year}-${month}-${day}`, // YYYY-mm-DD
      });
    }
  }, [year, month, day]);

  useEffect(() => {
    if (selected) {
      if (selected === "남자") {
        setChannelModify({
          ...channelModify,
          sex: 1,
        });
      } else if (selected === "여자") {
        setChannelModify({
          ...channelModify,
          sex: 2,
        });
      } else {
        setChannelModify({
          ...channelModify,
          sex: 0,
        });
      }
    }
  }, [selected]);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const setOpenModal = useSetRecoilState(modalOpenState);
  const setModalInfo = useSetRecoilState(modalInfoState);

  const [inputImage, setInputImage] = useRecoilState(inputImgState);
  const croppedImage = useRecoilValue(cropImgState);

  return (
    <React.Fragment>
      <Div width="100%">
        <Div margin="21px 23px">
          <H1 fontSize="xl" color="primary">
            채널 수정
          </H1>
        </Div>
      </Div>
      <Div width="100%" display="flex" direction="column">
        <ThumbnailDiv width="200px" borderRadius="999px" margin="10px">
          <Img src={croppedImage} />
        </ThumbnailDiv>
        <Label htmlFor="imgInput">파일 선택</Label>
        <Input
          id="imgInput"
          type="file"
          accept="image/*"
          onChange={(e) => {
            setInputImage(URL.createObjectURL(e.target.files[0]));
            setOpenModal(true);
            setModalInfo({ type: "thumbnail", content: "channel" });
          }}
          display="none"
        />
        <Div>
          <Div margin="10px 0px 10px 0px">
            <P fontSize="lg">채널명</P>
          </Div>
          <EventInput
            placeholder={"공백 없이 2~50자"}
            type={"text"}
            onChange={(e) => {
              onChangeChannelName(e);
              onChangeChannelNameValidation(e);
              if (isChannelName) {
                setChannelModify({
                  ...channelModify,
                  channelName: channelName,
                });
              }
            }}
            onFocus={onFocusChannelName}
            onBlur={onBlurChannelName}
            isFocus={channelNameFocus}
          />
          {!channelNameFocus ? <P color="red">{channelNameMessage}</P> : null}
        </Div>

        <Div>
          <Div margin="10px 0px 10px 0px">
            <P fontSize="lg">채널 설명</P>
          </Div>
          <Div display="flex" justifyContent="space-between" width="400px">
            <LargeEventInput
              placeholder="500글자 이내"
              type="text"
              onChange={(e) => {
                onChangeDescription(e);
                onChangeDescriptionValidation(e);
                if (isDescription) {
                  setChannelModify({
                    ...channelModify,
                    description: description,
                  });
                }
              }}
              onFocus={onFocusDescription}
              onBlur={onBlurDescription}
              isFocus={descriptionFocus}
            />
          </Div>
          {!descriptionFocus ? <P color="red">{descriptionMessage}</P> : null}
        </Div>

        <Div>
          <Div margin="10px 0px 10px 0px">
            <P fontSize="lg">생년월일</P>
          </Div>
          <Div display="flex" justifyContent="space-between" width="400px">
            <SmallEventInput
              placeholder={"년(4자)"}
              type={"text"}
              onChange={(e) => {
                onChangeYear(e);
                onChangeYearValidation(e);
              }}
              onFocus={onFocusYear}
              onBlur={onBlurYear}
              isFocus={yearFocus}
            />
            <SmallEventInput
              placeholder={"월"}
              type={"text"}
              onChange={(e) => {
                onChangeMonth(e);
                onChangeMonthValidation(e);
              }}
              onFocus={onFocusMonth}
              onBlur={onBlurMonth}
              isFocus={monthFocus}
            />
            <SmallEventInput
              placeholder={"일"}
              type={"text"}
              onChange={(e) => {
                onChangeDay(e);
                onChangeDayValidation(e);
              }}
              onFocus={onFocusDay}
              onBlur={onBlurDay}
              isFocus={dayFocus}
            />
          </Div>
          {!yearFocus ? <P color="red">{yearMessage}</P> : null}
          {!monthFocus ? <P color="red">{monthMessage}</P> : null}
          {!dayFocus ? <P color="red">{dayMessage}</P> : null}
        </Div>
        <Div>
          <Div margin="10px 0px 10px 0px">
            <P fontSize="lg">성별</P>
          </Div>
          <Div
            width="400px"
            height="48px"
            borderRadius="5px"
            border="1.5px solid #c8c8c8"
            fontSize="lg"
            margin="0px 0px 12px 0px"
            display="flex"
            justifyContent="flex-start"
          >
            <Div display="flex">
              <SelectBox onChange={handleSelect}>
                <option>성별</option>
                <option>남자</option>
                <option>여자</option>
              </SelectBox>
            </Div>
          </Div>
        </Div>
        <Div>
          <MdButton
            margin="0 15px 0 0"
            border="2px solid #FF6B6B"
            backgroundColor="white"
            onClick={() => {
              const formData = new FormData();
              formData.append("channelName", channelModify.channelName);
              formData.append("description", channelModify.description);
              formData.append("birth", channelModify.birth);
              formData.append("sex", channelModify.sex);
              formData.append("channelImg", channelModify.channelImg);

              for (var entries of formData) console.log(entries); // formData 확인

              fetch("https://api.슛.site/channel", {
                method: "PUT",
                credentials: "include",
                headers: {
                  Accept: "application / json",
                },
                body: formData,
              }).then(async (res) => {
                const result = await res.json();
                console.log(result);
                if (res === 200) {
                  navigate(-1);
                } else {
                  alert("다시 시도해주세요");
                }
              });
            }}
          >
            <Div display="flex" width="100%" height="100%" borderRadius="5px">
              <Div width="12px" height="12px" margin="0 12px 0 0">
                <Img src="/assets/images/pencil.svg" />
              </Div>
              <Div>
                <P color="primary" fontSize="sm" fontWeight={700}>
                  수정 완료
                </P>
              </Div>
            </Div>
          </MdButton>
        </Div>
      </Div>
    </React.Fragment>
  );
};

export default ChannelModifyComponent;
