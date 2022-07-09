import React from "react";
import styled from "styled-components";

interface TitleListProps {
  title: string;
}


function TitleList({ title }: TitleListProps) {
  return (
    <div>
      <Style2 title={title} ></Style2>
    </div>
  );
}


function Style1({ title }: TitleListProps){
  return (
    <div className="w-full my-8 relative p-0">
      <div className="text-[#191928] font-[900] text-[12vw] md:text-[10vw] leading-[90%]">
        {title ? title : "NO TITLE"}
      </div>
      <div className="absolute bottom-0 left-[3rem] leading-none text-[#ffffff] text-[5vw] md:text-[3vw] font-[500] ">
        {title ? title : "NO TITLE"}
      </div>
    </div>
  )
}

function Style2({ title }: TitleListProps) {
  return (
    <div className="w-full my-8 relative p-0">
      <div className="text-[#191928] font-[900] text-[12vw] md:text-[10vw] leading-[90%]">
        {title ? title : "NO TITLE"}
      </div>
      <div className="absolute bottom-0 left-[3rem] leading-none text-[#ffffff] text-[5vw] md:text-[3vw] font-[500] ">
        {title ? title : "NO TITLE"}
      </div>
    </div>
  );
}

export default TitleList;
