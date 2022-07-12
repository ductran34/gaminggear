import { Button } from "components/Button.styled";
import { Container } from "components/Container.styled";
import Header from "components/Header";
import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import { Fragment, useState } from "react";
import { settings, productsInHero } from "data/settings";

import Image from "next/image";


const Home = () => {


  return (
    <BasicLayout>
      <Header></Header>
      <Container>
        <div className="grid-cols-1 lg:grid-cols-5">
            <div className="bg-white col-span-1 lg:col-span-3">f</div>
            <div className="bg-gray-50 col-span-1 lg:col-span-3">f</div>
        </div>
      </Container>
    </BasicLayout>
  );
};

export default Home;
