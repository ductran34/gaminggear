import { Button } from "components/Button.styled";
import { Container } from "components/Container.styled";
import Header from "components/Header";
import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import StyledTitle from "../components/StyledTitle";
import Hero from "components/HomePage/Hero.styled";
import BrandList from "components/HomePage/BrandList";
import ProductList from "components/HomePage/ProductList";
import Review from "components/Review";
const Title = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <BasicLayout>
      <Header></Header>
      <Container>
        {/* <StyledTitle>Review</StyledTitle> */}
        <Hero/>
        <BrandList/>
        <ProductList/>
        <Review/>
      </Container>
      
      <Button size="large" variant="primary" role="button">Check\ out</Button>
    </BasicLayout>
  );
};

export default Home;
