import { Button } from "components/Button.styled";
import { Container } from "components/Container.styled";
import Header from "components/Header";
import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import { Fragment, useState } from "react";
import { settings, productsInHero } from "data/settings";
import CardProduct from "components/CardProduct";
import Accordion from "components/Accordion";
import Image from "next/image";
const image = require('../data/mouses/razer/razer.png');
const Title = styled.h1`
  color: #FE665B;
`;

const Home = () => {

  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <BasicLayout>
      <Header></Header>
      <Container>
        <div className="flex flex-row justify-between">
          <div>
            <div className={"text-red-400 font-semibold uppercase text-lg"}>{productsInHero[0].brand}</div>
            <div className={"text-white font-semibold uppercase text-3lx"}>{productsInHero[0].name}</div>
            <div className={"text-red-400 font-semibold uppercase text-3lx"}>{productsInHero[0].salePrice}</div>
            <div className={"text-white font-semibold uppercase text-lg line-through"}>{productsInHero[0].originalPrice}</div>
            <div>
              <div>add to Cart</div>
              <div>heart</div>
            </div>
          </div>
          <div>
            <Image style={{ width: "400px" }} src={image} />
          </div>
          <div>
            {productsInHero[0].specifications?.map((specification, index) => {
              return <Accordion title={specification?.title} content={specification?.content} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex}></Accordion>
            })}
          </div>
          {/* <CardProduct {...productsInHero[0]}></CardProduct> */}
        </div>
      </Container>
    </BasicLayout>
  );
};

export default Home;
