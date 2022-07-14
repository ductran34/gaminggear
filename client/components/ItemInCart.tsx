import Image from "next/image";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "./Button.styled";
import {IoMdArrowDropup, IoMdArrowDropdown} from "react-icons/io"
interface ProductProps {
    brand: string;
    name: string;
    shortName: string;
    originalPrice: number;
    salePrice: number;
    productImage: any;
    brandImage: any;
  };

const Item = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  width: 100%;
  border-bottom: 2px solid white;
  padding: 0rem 0;
  color: white;
  font-size: 1.5rem;
  :hover {
    background: #232330;
  }
`;

function ItemInCart({brand, name,shortName, salePrice, originalPrice, productImage, brandImage}:ProductProps) {
  //const [isActive, setIsActive] = useState(false);
  const [amount, setAmount] = useState(1)
  return (
    <Item>
        <Image src={productImage} style={{gridColumn: "span 1 / span 1"}}/>
        <div className="flex flex-col col-span-2 justify-self-start leading-none space-y-1">
            <div className="text-[#ffffff] text-lg">{name}</div>
            <div className="text-[#C4C4C4] text-base">{brand}</div>
        </div>
        <div className="flex flex-row col-span-1 justify-center items-center space-x-1">
            <IoMdArrowDropup style={{cursor: "pointer", fontSize: "2rem"}} onClick={() => setAmount(amount + 1)}/>
              <div className="text-lg" >{amount}</div>
            <IoMdArrowDropdown style={{cursor: "pointer", fontSize: "2rem"}} onClick={() => setAmount((amount === 1) ? (amount) : (amount - 1))}/>

        </div>
        {(salePrice !== originalPrice) ? (<div className="text-[#FE665B] text-lg col-span-1">{`$${(salePrice * amount).toFixed(2)}`}</div>) : (<div className="text-[#FE665B] text-lg col-span-1"></div>)}
        {(salePrice !== originalPrice) ? (<div className="text-[#ffffff] text-lg col-span-1 line-through">{`$${(originalPrice * amount).toFixed(2)}`}</div>) : (<div className="text-[#ffffff] text-lg col-span-1">{`$${(originalPrice * amount).toFixed(2)}`}</div>)}
        
        <Button size="large" variant="primary" role="button" className="col-span-1">Remove</Button>
    </Item>
  );
}

export default ItemInCart;

