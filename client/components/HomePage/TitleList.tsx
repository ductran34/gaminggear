import React from "react";
import styled from "styled-components";

interface TitleListProps {
  title: string;
  size: string
}
const BigTitle = styled.div`
  color: #16202A;
  font-weight: 700;
  line-height: 90%;
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: #16202A;
  opacity: 0.2;
  text-transform: uppercase;
`;

function TitleList({ title, size }: TitleListProps) {
  return (
    <div className="w-full my-8 relative p-0">
      {size === "large" ? (
        <BigTitle className="text-[12vw] md:text-[10vw]">
          {title ? title : "NO TITLE"}
        </BigTitle>
      ) : (
        <BigTitle className="text-[6vw] md:text-[5vw]">
          {title ? title : "NO TITLE"}
        </BigTitle>
      )}
      <div className="uppercase absolute bottom-0 left-[3rem] leading-none text-[#eae7dd] text-[5vw] md:text-[3vw] font-[600] ">
        {title ? title : "NO TITLE"}
      </div>
    </div>
  );
}

export default TitleList;
