import React, { useEffect } from "react";

import { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Input } from "../../basic/Input";
import Div from "../../basic/Div";
import Img from "../../basic/Img";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { cropImgState, inputImgState } from "../../../recoil/uploadState";
import { MdButton } from "../../basic/Button";
import P from "../../basic/P";
import { modalInfoState, modalOpenState } from "../../../recoil/modalState";
import { channelModifyState } from "../../../recoil/uploadState";

const ChannelThumbnailModal = () => {
  const cropperRef = useRef(null);
  // 유저가 첨부한 이미지
  const [inputImage, setInputImage] = useRecoilState(inputImgState);
  // 유저가 선택한 영역만큼 크롭된 이미지
  const [croppedImage, setCroppedImage] = useRecoilState(cropImgState);
  const setModalOpen = useSetRecoilState(modalOpenState);
  const [channelModify, setChannelModify] = useRecoilState(channelModifyState);

  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    setCroppedImage(cropper.getCroppedCanvas().toDataURL());
  };

  const content = useRecoilValue(modalInfoState).content;

  return (
    <Div>
      <Cropper
        src={inputImage}
        crop={onCrop}
        ref={cropperRef}
        aspectRatio={
          (content === "channel" && 1 / 1) || (content === "video" && 9 / 16)
        }
        style={{ height: "300px", width: "300px" }}
      />
      <Div width="100%" display="flex" margin="10px 0 0 0">
        <MdButton
          backgroundColor="primary"
          onClick={() => {
            setChannelModify({
              ...channelModify,
              channelImg: croppedImage,
            });
            setModalOpen(false);
          }}
        >
          <P color="white">완료</P>
        </MdButton>
      </Div>
    </Div>
  );
};

export default ChannelThumbnailModal;
