import React, { useState } from "react";
import {
  Board,
  Boxes,
  Button,
  FruitsBox,
  Title,
  TitleText,
  Wrapper,
  WrapperSection,
} from "./styled";

function Index() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "1",
      items: [
        { id: 1, title: "banana" },
        { id: 2, title: "banana" },
        { id: 3, title: "banana" },
        { id: 4, title: "banana" },
        { id: 5, title: "orange" },
        { id: 6, title: "orange" },
        { id: 7, title: "orange" },
        { id: 8, title: "orange" },
        { id: 9, title: "kiwi" },
        { id: 10, title: "kiwi" },
        { id: 11, title: "kiwi" },
        { id: 12, title: "kiwi" },
      ],
    },
    {
      id: 2,
      title: "2",
      items: [],
    },
    {
      id: 3,
      title: "3",
      items: [
        
      ],
    },
    {
      id: 4,
      title: "4",
      items: [
       
      ],
    },
  ]);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className == "item") {
      e.target.style.boxShadow = "0 2px 3px gray";
    }
  }
  function dragLeaveHandler(e) {
    e.target.style.boxShadow = "none";
  }
  function dragSrartHandler(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }
  function dragEndHandler(e) {
    e.target.style.boxShadow = "none";
  }
  function dropHandler(e, board, item) {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
    e.target.style.boxShadow = "none";
  }
  function dropCardHandler(e, board) {
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
    e.target.style.boxShadow = "none";
  }

  return (
    <>
      <Title>
        Fruits Box
      </Title>
      <WrapperSection>
        {/* <FruitsBox
        // onDragOver={(e) => dragOverHandler(e)}
        // onDrop={(e) => dropCardHandler(e, board)}
        /> */}
      </WrapperSection>
      <Wrapper>
        {boards.map((board, boardIndex) => (
          <>
            <Board
              main={!boardIndex > 0}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropCardHandler(e, board)}
            >
              {board.items.map((item) => (
                <Boxes
                  title={item.title}
                  onDragOver={(e) => dragOverHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragStart={(e) => dragSrartHandler(e, board, item)}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDrop={(e) => dropHandler(e, board, item)}
                  draggable={true}
                >
                  {/* {item} */}
                </Boxes>
              ))}
            </Board>
          </>
        ))}
      </Wrapper>
    </>
  );
}

export default Index;
