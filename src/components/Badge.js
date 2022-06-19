import React from "react";
import styled from "styled-components";
import { themeColor } from "../utils/index";

const Badge = ({
  content,
  glow = false,
  paid = false,
  late = false,
  clean = false,
}) => {
  return (
    <Div glow={glow} paid={paid} late={late} clean={clean}>
      {content}
    </Div>
  );
};
const Div = styled.span`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: ${themeColor};
  cursor: pointer;
  ${({ glow }) =>
    glow &&
    `
        font-size:0.8rem;
        padding:0.2rem 0.5rem;
        font-weight:normal;
        background-color: rgba(109, 134, 245, 0.192);
        color:#2f233d;
    `}
  ${({ paid }) =>
    paid &&
    `
        background-color:#dbf7bd;
        color:#70e000;`}
  ${({ late }) =>
    late &&
    `
        background-color:#ffd5d6;
        color:#ff595e;`}
  ${({ clean }) =>
    clean &&
    `background-color: transparent;
    border: 0.05rem solid ${themeColor};
     color:${themeColor};`}
`;

export default Badge;
