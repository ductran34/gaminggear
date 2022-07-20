import React, { useState } from 'react'
import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export interface INavProps {
  isLiked: boolean;
}

interface ProductProps {
  brand: string;
  name: string;
  shortName: string;
  originalPrice: number;
  salePrice: number;
  productImage: any;
  brandImage: any;
};
const Card = styled.div`
position: relative;
  display: grid;
  grid-template-rows: repeat(3, minmax(0, 1fr));
  background-color: #1f2631;
  border: 2px solid #fb4959;
  box-shadow: 6px 6px 9px rgba(0, 0, 0, 0.25);
`;
const BottomBar = styled.div`
  grid-row: span 1 ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #0f1923;
  width: 100%;
  padding: 0.5rem 0rem 1rem 0;
  font-weight: 800;
`;
const SaleBar = styled.div`
  position: absolute;
  top: 2rem;
  right: -1rem;
  background: #fb4959;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  padding: 0.25rem 0.5rem;
`;
const Circle = styled.div.attrs<Pick<INavProps, "isLiked">>(
  (props) => {
    scrollNav: props?.isLiked;
  }
)<INavProps>`
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  background: ${(props) => (props?.isLiked === false ? "#404855" : "#fb495970")};
  border: 2px solid ${(props) => (props?.isLiked === false ? "#eae7dd" : "#fb4959")};;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1rem;
  left: 1rem;
  border-radius: 100%;
  z-index: 2;
  :hover{
    /* background: #fb495970; */
    border: 2px solid #fb4959;
  }
`
function CardProduct({ brand, name, shortName, salePrice, originalPrice, productImage, brandImage }: ProductProps) {

  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card>
      {isLiked ? (
        <Circle isLiked={isLiked} onClick={() => setIsLiked(!isLiked)}>
          <AiFillHeart style={{ color: "#eae7dd", fontSize: "1.5rem"}} />
        </Circle>
      ) : (
        <Circle isLiked={isLiked} onClick={() => setIsLiked(!isLiked)}>
          <AiFillHeart style={{color: "#eae7dd",fontSize: "1.5rem" }} />
        </Circle>
      )}
      <div className='relative row-span-2 flex justify-center w-full overflow-hidden'>
        <img style={{ width: "75%", zIndex: "1" }} src={productImage.src} />
        <img style={{ position: "absolute", top: "0", right: "0", width: "150%", zIndex: "0", opacity: "1" }} src={brandImage.src} />
      </div>
      <SaleBar>20% OFF</SaleBar>
      <BottomBar>
        <div className={"w-full h-1/2 bg-yellow flex flex-col mb-2 leading-none"}>
          <div className={"w-full text-[#fb4959] text-lg text-center"}>{brand}</div>
          <div className={"w-full text-white text-3xl text-center uppercase "}>{shortName}</div>
        </div>
        <div className={"w-full h-1/2 bg-[#0f1923] flex flex-row justify-center items-center px-2"}>
          <div className={" text-[#fb4959]  text-xl text-center mr-3 content-center"}>{`$${salePrice}`}</div>
          <div className={" text-white text-xl text-center mr-3 line-through content-center"}>{`$${originalPrice}`}</div>
        </div>
      </BottomBar>
    </Card>
  )
}

export default CardProduct