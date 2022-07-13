import React from "react";
import TitleList from "./TitleList";
import styled from "styled-components";
import CardProduct from "components/CardProduct";
import { productsInHero } from "data/settings";
const ProductContainer = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: 450px;
  align-items: center;
  justify-content: space-between;

  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));

  @media (min-width: 640px) {
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
`;

const ProductBox = styled.div`
  background-color: #30303C;
  text-align: center;
  padding: 0.5rem;
  cursor: pointer;
  aspect-ratio: 0.8;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

function ProductList() {
  return (
    <div>
      <TitleList title="BEST SELLING" />
      <ProductContainer>
        <CardProduct {...productsInHero[0]}/>
        <CardProduct {...productsInHero[0]}/>
        <CardProduct {...productsInHero[0]}/>
        <CardProduct {...productsInHero[0]}/>
        <CardProduct {...productsInHero[0]}/>
        <CardProduct {...productsInHero[0]}/>
        <CardProduct {...productsInHero[0]}/>
        <CardProduct {...productsInHero[0]}/>
      </ProductContainer>
    </div>
  );
}

function Card() {
    return(
        <ProductBox>
            <div className="bg-[#30303C] flex-1">
              s
            </div>
            <div className="bg-[#191928] h-[35%]">a</div>
        </ProductBox>
    );
}

export default ProductList;
