import { Button } from "components/Button.styled";
import { Container } from "components/Container.styled";
import Header from "components/Header";
import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import StyledTitle from "../components/StyledTitle";
const Title = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <BasicLayout>
      <Header></Header>
      <Container>
        <StyledTitle>Review</StyledTitle>
      </Container>
      <Button size="large" variant="primary" role="button">Check out</Button>
    </BasicLayout>
  );
};

export default Home;
