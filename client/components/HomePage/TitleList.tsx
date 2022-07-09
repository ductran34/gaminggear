import React from 'react'
import styled from "styled-components";

interface TitleListProps {
    title: string;
  };

const Style1 = styled.div`
    position: relative;
    padding: 0px;
`;


function TitleList({title}: TitleListProps) {
  return (
    <div className='w-full my-8 '>
        <Style1>
            <div className='text-[#191928] font-[900] text-[12vw] md:text-[10vw] leading-[90%]'>{title ? title : "NO TITLE"}</div>
            <div className='absolute bottom-0 left-[3rem] leading-none text-[#ffffff] text-[5vw] md:text-[3vw] font-[500] '>{title ? title : "NO TITLE"}</div>
        </Style1>
    </div>
  )
}

export default TitleList