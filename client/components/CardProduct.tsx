import React from 'react'
import styled from 'styled-components';
import {HiOutlineStar} from 'react-icons/hi';
interface Props {
    children: React.ReactNode;
}
const Card = styled.div`
  position: relative; 
  background-color: #30303C;
  width: 264px;
  height: 331px;  
  box-shadow: 6px 6px 9px rgba(0, 0, 0, 0.25);
`;
const BottomBar = styled.div`
  position: absolute; 
  display: flex;
  flex-direction: column;
  bottom: 0;
  background: #191928;
  width: 100%;
  height: 102px;
  padding: 1rem 0;
  font-weight: 600;
`;
const SaleBar = styled.div`
  position: "absolute";
  top: 2rem;
  right: 1rem;
  background: #FE665B;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  width: "auto"
`
function CardProduct({children}:Props) {
  return (
    <Card>
        <HiOutlineStar style={{color: "#FFD853", position: "absolute", top: "2rem", left: "1rem", textShadow: "inset 0px 0px 10px #FFD853"}}/>
        <SaleBar>20% OFF</SaleBar>
        <BottomBar>
          <div className={"w-full h-1/2 bg-yellow flex flex-row"}>
            <div className={"w-1/2 border-white border-r-2 border-solid text-white text-xl text-center"}>Rival 710</div>
            <div className={"w-1/2 text-[#C4C4C4] text-xl text-center"}>Steelseries</div>
          </div>
          <div className={"w-full h-1/2 bg-yellow flex flex-row justify-end"}>
            <div className={" text-[#FE665B]  text-2xl text-center mr-3 content-center"}>$56.00</div>
            <div className={" text-white text-xl text-center mr-3 line-through content-center"}>$86.00</div>
          </div>
        </BottomBar>
    </Card>
  )
}

export default CardProduct