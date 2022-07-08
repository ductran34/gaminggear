import { Button } from "components/Button.styled";
import { Container } from "components/Container.styled";
import Header from "components/Header";
import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import { Fragment, useState } from "react";
import CardProduct from "components/CardProduct";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const image = require('../data/mouses/razer/razer.png');
const Title = styled.h1`
  color: #FE665B;
`;

const Home = () => {

  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <BasicLayout>
      <Header></Header>
      <Container>
        <div className="flex flex-row justify-between">
          <div>
            <div className={"text-red-400 font-semibold uppercase text-lg"}>Logitech</div>
            <div className={"text-white font-semibold uppercase text-3lx"}>G PRO Wireless Gaming Mouse</div>
            <div className={"text-red-400 font-semibold uppercase text-3lx"}>$5.00</div>
            <div className={"text-white font-semibold uppercase text-lg line-through"}>$59.00</div>
            <div>
              <div>add to Cart</div>
              <div>heart</div>
            </div>
          </div>
          <div>
            <img className={"w-10 h-10"} src={image.src} />
          </div>
          <CardProduct>
            ff
          </CardProduct>
        </div>
      </Container>
    </BasicLayout>
  );
};

export default Home;
