import React from "react";
import styled from "styled-components";
import MainContent from "./MainContent";
import Sidebar from "../../components/Sidebar";

const Invoices = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  Sidebar {
    height: 20%;
  }
  height: 97.5vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default Invoices;
