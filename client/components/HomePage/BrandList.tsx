import React from "react";
import TitleList from "./TitleList";
import styled from "styled-components";
import {brandLists} from "../../data/settings"

const BrandContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-template-rows: repeat(auto, 50px);
  align-items: center;
  justify-content: space-between;
`;

const BrandBox = styled.div`
  background-color: #44464a;
  border: 2px solid #c4c4c4;
  text-align: center;
  padding: 0.5rem;
  cursor: pointer;
`;

function BrandList() {
  return (
    <div>
      <TitleList title= "TOP BRANDS" />
      <BrandContainer>
        {brandLists.map((brand, idx) => (
            <BrandBox key={idx}>
                <img className="max-h-[2rem] block mx-auto" src={brand.brandImage.src}/>
            </BrandBox>
        ))}
      </BrandContainer>
    </div>
  );
}

export default BrandList;
