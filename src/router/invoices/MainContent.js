import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

import BasicTable from "./BasicTable";

const MainContent = () => {
  return (
    <Container>
      <Navbar />
      <SubContainer>
        <Heading>
          <TitleText>Invoices</TitleText>
          <SubTitleText>List of all of your recent transactions.</SubTitleText>
        </Heading>
        <InputContainer>
          <Icon>
            <FiSearch />
          </Icon>
          <Input type="text" placeholder="Search an Invoice" />
        </InputContainer>
        <BasicTable />
      </SubContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 80%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;
const Heading = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;
const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
  }
`;
const TitleText = styled.h3``;
const SubTitleText = styled.h5`
  font-weight: 400;
`;
const InputContainer = styled.div`
  display: flex;
  width: 71vw;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 0 0 0 12%;
  }
`;
const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #dce4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #555555;
  }
`;
const Input = styled.input`
  border: none;
  width: 100%;
  background-color: #dce4ff;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  &:focus {
    border: none;
    outline: none;
  }
`;

export default MainContent;
