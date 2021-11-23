import styled from "styled-components";
import B1 from "../image/download.jpg";
import O1 from "../image/download-1.jpg";
import K1 from "../image/kiwi.jpg";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: lightgreen;
  flex-wrap: wrap;
`;

export const Board = styled.div`
  width: 20%;
  min-height: 300px;
  background-color: lightgrey;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  box-shadow: 0px 1px 0 2px;
  width: ${({ main }) => (main ? "100%" : "20%")};
  min-height: ${({ main }) => (main ? "150px" : "300px")};
`;

export const Boxes = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${({ title }) =>title === "banana"? B1: title === "orange"? O1: title === "kiwi"? K1: null});
  border-radius: 10px;
  cursor: grab;
  background-position: center;
  background-size: cover;
  margin: 5px;
  transition-duration: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  background-color: lightgreen;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const FruitsBox = styled.div`
  width: 90vw;
  min-height: 100px;
  border-radius: 10px;
  background-color: lightgrey;
  display: flex;
  align-items: center;
  margin-left: 70px;
  margin-top: 20px;
  border: 1px solid black;
`;

export const WrapperSection = styled.div`
  background-color: lightgreen;
  display: flex;
  align-items: center;
  position: absolute;
`;
export const TitleText = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
