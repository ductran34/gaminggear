import { Container } from "components/Container.styled";
import styled from "styled-components";
import BasicLayout from "../layout/Basic";

const Title = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <BasicLayout>
      <Container>Title</Container>
    </BasicLayout>
  );
};

export default Home;
