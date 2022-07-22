import { Button } from "components/Button.styled";
import { Container } from "components/Container.styled";
import Header from "components/Header";
import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import { Fragment, useState } from "react";
import { settings, productsInHero } from "data/settings";

import Image from "next/image";
import ItemInCart from "components/ItemInCart";


const cartPage = () => {


  return (
    <BasicLayout>
      <Header></Header>
      <Container>
        <div className="grid gap-x-5 grid-cols-1 lg:grid-cols-5">
            <div className="col-span-1 lg:col-span-3 space-y-5">
                <ItemInCart {...productsInHero[0]}/>
                <ItemInCart {...productsInHero[0]}/>
            </div>
            <div className="bg-[#191928] col-span-1 lg:col-span-2">f</div>
        </div>
      </Container>
    </BasicLayout>
  );
};

export default cartPage;
