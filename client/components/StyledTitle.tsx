import React from 'react'
import styled from 'styled-components';
interface Props {
    children: React.ReactNode;
}
const BigTitle = styled.div`
  position: absolute; 
  bottom: 0;
  color: #16202A;
  text-transform: uppercase;
  font-size: 7rem;
  font-weight: 700;
  -webkit-text-stroke: 1px #333;
`;
const SmallTitle = styled.div`
  position: absolute; 
  bottom: 0;
  color: white;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  -webkit-text-stroke: 1px #111;
`;
function StyledTitle({children}:Props) {
  return (
    <div className={"relative flex bg-white box-content min-w-full min-h-full"}>
        <BigTitle>{children}</BigTitle>
        <SmallTitle>{children}</SmallTitle>
    </div>
  )
}

export default StyledTitle