import { Button } from "components/Button.styled";
import { Container } from "components/Container.styled";
import Header from "components/Header";
import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import image from "../data/mouses/razer/razer.png"
const Title = styled.h1`
  color: #FE665B;
`;

const Home = () => {
  return (
    <BasicLayout>
      <Header></Header>
      <Container>
        <div>
          <div>
            <div className={"text-red-400 font-semibold uppercase text-lg"}>Logitech</div>
            <div className={"text-white font-semibold uppercase text-3lx"}>G PRO Wireless Gaming Mouse</div>
            <div className={"text-red-400 font-semibold uppercase text-3lx"}>$59.00</div>
            <div className={"text-white font-semibold uppercase text-lg line-through"}>$59.00</div>
            <div>
              <div>add to Cart</div>
              <div>heart</div>
            </div>
          </div>
          <div>
            <img src={image}/>
          </div>
          <div></div>
        </div>
      </Container>
    </BasicLayout>
  );
};

export default Home;
