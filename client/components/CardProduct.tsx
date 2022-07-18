import React, { useState } from 'react'
import styled from 'styled-components';
import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti';
import Image, { StaticImageData } from 'next/image';
interface ProductProps {
  brand: string;
  name: string;
  shortName: string;
  originalPrice: number;
  salePrice: number;
  productImage: any;
  brandLogo: any;
};
const Card = styled.div`
position: relative;
  display: grid;
  grid-template-rows: repeat(3, minmax(0, 1fr));
  background-color: #30303C;
  box-shadow: 6px 6px 9px rgba(0, 0, 0, 0.25);
`;
const BottomBar = styled.div`
  grid-row: span 1 ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #0F0F1C;
  width: 100%;
  aspect-ratio: 3/1.25;
  padding: 1rem 0;
  font-weight: 600;
`;
const SaleBar = styled.div`
  position: absolute;
  top: 2rem;
  right: -1rem;
  background: #FE665B;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  padding: 0.25rem 0.5rem;
`;

function CardProduct({ brand, name, shortName, salePrice, originalPrice, productImage, brandLogo }: ProductProps) {

  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card>
      {isLiked ? (
        <TiStarFullOutline onClick={() => setIsLiked(!isLiked)} style={{ color: "#FFD853", fontSize: "2.5rem", position: "absolute", top: "2rem", left: "1rem", textShadow: "inset 0px 0px 10px #FFD853", zIndex: "1", cursor: "pointer" }} />
      ) : (
        <TiStarOutline onClick={() => setIsLiked(!isLiked)} style={{ color: "#FFD853", fontSize: "2.5rem", position: "absolute", top: "2rem", left: "1rem", textShadow: "-1px -1px 0 #FFD853, 1px -1px 0 #FFD853, -1px 1px 0 #FFD853, 1px 1px 0 #FFD853", zIndex: "1", cursor: "pointer" }} />
      )}
      <div className='relative flex justify-center w-full h-full row-span-2 overflow-hidden'>
        <img style={{ width: "75%", zIndex: "1" }} src={productImage.src} />
        <img style={{ position: "absolute", top: "0", right: "0", width: "150%", zIndex: "0", opacity: "0.5" }} src={brandLogo.src} />
      </div>
      <SaleBar>20% OFF</SaleBar>
      <BottomBar>
        <div className={"w-full h-1/2 bg-yellow flex flex-row mb-2 leading-none"}>
          <div className={"w-1/2 border-white border-r-2 border-solid text-white text-xl text-center"}>{shortName}</div>
          <div className={"w-1/2 text-[#C4C4C4] text-lg text-center"}>{brand}</div>
        </div>
        <div className={"w-full h-1/2 bg-yellow flex flex-row justify-end items-center"}>
          <div className={" text-[#FE665B]  text-xl text-center mr-3 content-center"}>{`$${salePrice}`}</div>
          <div className={" text-white text-xl text-center mr-3 line-through content-center"}>{`$${originalPrice}`}</div>
        </div>
      </BottomBar>
    </Card>
  )
}

export default CardProduct