import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

interface AccordionProps {
  title: string;
  content?: any;
  index: number;
  activeIndex: number;
  setActiveIndex: (activeIndex: number) => void;
};

const AccordionItem = styled.div`
  width: 100%;
  border-bottom: 2px solid white;
  padding: 1rem 0;
`;

const AccordionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  text-transform: uppercase;
`;

const AccordionBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  font-size: 1rem;
  padding-top: 0.5rem;
`;

const AccordionAnimation = keyframes`
 0% { width: 0px; }
 100% {  width: 100%; opacity: 1 }
`;

const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${AccordionAnimation};
  transition: all 200ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
`;

function FilterAccordion({title, content, index, activeIndex, setActiveIndex}:AccordionProps) {
  //const [isActive, setIsActive] = useState(false);
  const isActive = index === activeIndex ? true : false;


  return (
    <AccordionItem>
      <AccordionTitle onClick={() => setActiveIndex(index)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </AccordionTitle>
      {isActive && <AccordionContent style={isActive ? {transition: "all 200ms cubic-bezier(0.600, -0.280, 0.735, 0.045)"} : {transition:" all 350ms cubic-bezier(0.080, 1.090, 0.320, 1.275)"}}>
        {content?.maxSensitivity && <AccordionBar>
          <div>Max Sensitivity</div>
          <div>{`${content?.maxSensitivity} dpi`}</div>
          </AccordionBar>}

        </AccordionContent>}
    </AccordionItem>
  );
}

export default FilterAccordion;

