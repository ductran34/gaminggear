import { Button } from "components/Button.styled";
import { Container } from "components/Container.styled";
import Header from "components/Header";
import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import { Fragment, useState } from "react";
import { settings, productsInHero } from "data/settings";
import {AiOutlineHeart} from "react-icons/ai";
import Accordion from "components/Accordion";
import Image from "next/image";
const image = require('../data/mouses/razer/razer.png');
const ProductInfo = styled.div`
  width: 100%;
  /* display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  grid-gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr 1fr;
  }; */

`;
const ShortName = styled.div`
  position: absolute;
  color: #FE665B;
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 0;
  left: 0;
  font-size: 7.5rem;
  font-weight: 700;
  transform: translate(25%, 25%);
  transform: rotate(90deg);
`;

const Home = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <BasicLayout>
      <Header></Header>
      <Container>
        <ProductInfo className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-7 gap-4 text-[1.5rem]" >
          <div className={" lg:col-span-2 xl:col-span-1 2xl:col-span-2"}>
            <div className={" text-[#FE665B] font-semibold uppercase text-lg"}>{productsInHero[0].brand}</div>
            <div className={"text-white font-semibold uppercase text-3lx"}>{productsInHero[0].name}</div>
            <div className={" text-[#FE665B] font-semibold uppercase text-3lx"}>{`$${productsInHero[0].salePrice.toFixed(2)}`}</div>
            <div className={"text-white font-semibold uppercase text-lg line-through"}>{`$${productsInHero[0].originalPrice.toFixed(2)}`}</div>
            <div className="flex flex-row justify-between">
              <Button size="large" variant="primary" role="button">ADD TO CART</Button>
              <AiOutlineHeart style={{ color: "white", cursor: "pointer" }} />
            </div>
          </div>
          <div className={"relative justify-center lg:col-span-3 xl:col-span-2 2xl:col-span-3"}>
            <Image style={{ width: "100%", zIndex: "1" }} src={image} />
            <ShortName>G PRO</ShortName>
          </div>
          <div className={"50 lg:col-span-5 xl:col-span-3 2xl:col-span-2"}>
            {productsInHero[0].specifications?.map((specification, index) => {
              return <Accordion title={specification?.title} content={specification?.content} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex}></Accordion>
            })}
          </div>
          {/* <div className={"col-span-1"}>

          </div>
          <div className="relative">
            <Image style={{ width: "400px", zIndex: "1" }} src={image} />
            <ShortName>G PRO</ShortName>
          </div>
          <div className={"col-span-2 lg:col-span-1"}>
            {productsInHero[0].specifications?.map((specification, index) => {
              return <Accordion title={specification?.title} content={specification?.content} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex}></Accordion>
            })}
          </div> */}
          {/* <CardProduct {...productsInHero[0]}></CardProduct> */}
        </ProductInfo>
      </Container>
    </BasicLayout>
  );
};

export default Home;
