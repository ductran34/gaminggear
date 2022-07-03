import { Button } from "components/Button.styled";
import { Container } from "components/Container.styled";
import Header from "components/Header";
import styled from "styled-components";
import BasicLayout from "../layout/Basic";

const Title = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <BasicLayout>
      <Header></Header>
      <Container>Title</Container>
      <Button size="large" variant="primary" role="button">Check out</Button>
    </BasicLayout>
  );
};

export default Home;
