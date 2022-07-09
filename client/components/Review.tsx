import React from 'react'
import TitleList from './HomePage/TitleList'

import styled from "styled-components";


const RatingContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;


function Review() {
  return (
    <div>
        <TitleList title="REVIEW"/>
        <RatingContainer>
            <div className='bg-pink-400'>sssssss</div>
            <div className='bg-pink-400'>sssssss</div>
        </RatingContainer>
    </div>
  )
}

export default Review