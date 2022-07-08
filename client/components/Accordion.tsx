import React, { useState } from "react";
import styled from "styled-components";

interface AccordionProps {
  title: string;
  content: string;
};
const AccordionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
`;

const AccordionContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
`;

function Accordion({title, content}:AccordionProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <AccordionTitle onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </AccordionTitle>
      {isActive && <AccordionContent>{content}</AccordionContent>}
    </div>
  );
}

export default Accordion;

