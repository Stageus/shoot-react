// import React, { useState } from "react";

// import P from "../basic/P";
// import Div from "../basic/Div";
// import { Input } from "../basic/Input";
// import { MdButton } from "../basic/Button";

// const UploadVote = () => {
//   const inputItems = useState([{ id: 0, title: "" }]);
//   const inputAddId = useState(1);
//   const addedInput = { id: inputAddId, title: "" };

//   const addVote = () => {
//     inputItems = inputItems.concat({ ...addedInput });
//     inputAddId = inputAddId + 1;
//   };

//   const tmpDiv = document.createElement("div");
//   const voteInput = `
//     <Div display="flex" direction="column">
//       <Input
//         placeholder="내용을 입력해주세요"
//         width="780px"
//         height="40px"
//         margin="0 20px"
//         border="1px solid lightGray"
//       ></Input>

//       <Div
//         display="flex"
//         justifyContent="flex-end"
//         width="782px"
//         margin="20px 0"
//       >
//         <MdButton
//           backgroundColor="white"
//           border="2px solid #FF6B6B"
//           margin="0 20px 0 0 "
//           onClick={() => addVoteEvent()}
//         >
//           <P color="primary">추가</P>
//         </MdButton>
//         <MdButton backgroundColor="primary">
//           <P color="white">제거</P>
//         </MdButton>
//       </Div>
//     </Div>;
//     `;
//   // console.log(tmpDiv);
//   tmpDiv.innerHTML = voteInput;
//   const addVoteEvent = () => {
//     document.getElementById("firstVote").appendChild(tmpDiv);
//   };

//   return (
//     <React.Fragment>
//       <Div display="flex">
//         <Div margin="20px">
//           <P fontSize="xl">투표 등록</P>
//         </Div>
//         <Div>
//           <P color="primary" fontSize="xl">
//             *
//           </P>
//         </Div>
//       </Div>
//       <Div>
//         <Div display="flex" direction="column">
//           <Input
//             placeholder="내용을 입력해주세요"
//             width="780px"
//             height="40px"
//             margin="0 20px"
//             border="1px solid lightGray"
//           ></Input>

//           <Div
//             display="flex"
//             justifyContent="flex-end"
//             width="782px"
//             margin="20px 0"
//           >
//             <MdButton
//               backgroundColor="white"
//               border="2px solid #FF6B6B"
//               margin="0 20px 0 0 "
//               onClick={() => addVoteEvent()}
//             >
//               <P color="primary">추가</P>
//             </MdButton>
//             <MdButton backgroundColor="primary">
//               <P color="white">제거</P>
//             </MdButton>
//           </Div>
//         </Div>
//       </Div>
//     </React.Fragment>
//   );
// };

// export default UploadVote;

import React, { useEffect, useState } from "react";

import P from "../basic/P";
import Div from "../basic/Div";
import { Input } from "../basic/Input";
import { MdButton } from "../basic/Button";
import { useRecoilState } from "recoil";
import { voteInputId, voteInputItemsState } from "../../recoil/uploadState";

const UploadVote = () => {
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
          <P fontSize="xl">투표 등록</P>
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

export default UploadVote;
