import React from "react";
import styled from "styled-components";

interface TitleListProps {
  title: string;
}
const BigTitle = styled.div`
  color: #16202A;
  font-weight: 700;
  line-height: 90%;
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: #16202A;
  opacity: 0.2;
`;

function TitleList({ title }: TitleListProps) {
  return (
    <div>
      <Style2 title={title} ></Style2>
    </div>
  );
}

function Style2({ title }: TitleListProps) {
  return (
    <div className="w-full my-8 relative p-0">
      <BigTitle className="text-[12vw] md:text-[10vw]">
        {title ? title : "NO TITLE"}
      </BigTitle>
      <div className="absolute bottom-0 left-[3rem] leading-none text-[#eae7dd] text-[5vw] md:text-[3vw] font-[600] ">
        {title ? title : "NO TITLE"}
      </div>
    </div>
  );
}

export default TitleList;
