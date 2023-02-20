import React, { useEffect, useState } from "react";

import P from "../basic/P";
import Div from "../basic/Div";
import { Input } from "../basic/Input";
import { MdButton } from "../basic/Button";
import { useRecoilState } from "recoil";
import { voteInputId, voteInputItemsState } from "../../recoil/uploadState";

const UploadLink = () => {
  const [inputItems, setInputItems] = useRecoilState(voteInputItemsState);

  const [inputId, setInputId] = useRecoilState(voteInputId);

  const addedInput = { id: inputId, title: "" };

  const addVote = () => {
    const newInputItems = inputItems.concat(addedInput);
    setInputItems(newInputItems);
    setInputId(inputId + 1);
    console.log(inputItems);
  };

  // let deleteVote = inputItems.filter((item) => item.id !== index);
  // useEffect(() => {
  const deleteVote = (index) => {
    // const originInputItems = inputItems.filter((item) => item.id !== index);
    const originInputItems = inputItems.filter((item) => item.id !== index);
    console.log(originInputItems);
    console.log(inputItems);
    // setInputItems([]);
    setInputItems(originInputItems);
  };
  // }, [inputItems]);

  return (
    <React.Fragment>
      <Div display="flex">
        <Div margin="20px">
          <P fontSize="xl">링크 등록</P>
        </Div>
        <Div>
          <P color="primary" fontSize="xl">
            *
          </P>
        </Div>
      </Div>
      <Div>
        {inputItems.map((item, index) => {
          return (
            <Div key={item.id} display="flex" direction="column">
              <Input
                placeholder="내용을 입력해주세요"
                width="780px"
                height="40px"
                margin="0 20px 20px 20px"
                border="1px solid lightGray"
              ></Input>
              <Input
                placeholder="링크를 입력해주세요"
                width="780px"
                height="40px"
                margin="0 20px"
                border="1px solid lightGray"
              ></Input>

              <Div
                display="flex"
                justifyContent="flex-end"
                width="782px"
                margin="20px 0"
              >
                {inputItems[inputItems.length - 1] === inputItems[item.id] &&
                  inputItems.length < 8 && (
                    <MdButton
                      backgroundColor="white"
                      border="2px solid #FF6B6B"
                      margin="0 20px 0 0 "
                      onClick={addVote}
                    >
                      <P color="primary">추가</P>
                    </MdButton>
                  )}

                <MdButton
                  backgroundColor="primary"
                  onClick={() => {
                    deleteVote(index);
                  }}
                >
                  <P color="white">제거</P>
                </MdButton>
              </Div>
            </Div>
          );
        })}
      </Div>
    </React.Fragment>
  );
};

export default UploadLink;
