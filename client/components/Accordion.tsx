import React, { useState } from "react";
import styled from "styled-components";

interface AccordionProps {
  title: string;
  content?: any;
  index: number;
  activeIndex: number;
  setActiveIndex: (activeIndex: number) => void;
};

const AccordionItem = styled.div`
  width: 300px;
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
const Accordioncontent = styled.div`
  display: flex;
  flex-direction: column;
`;

function Accordion({title, content, index, activeIndex, setActiveIndex}:AccordionProps) {
  const [isActive, setIsActive] = useState(false);

  const handleOpen = (value: number) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  return (
    <AccordionItem>
      <AccordionTitle onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </AccordionTitle>
      {isActive && <Accordioncontent>
        {content?.maxSensitivity && <AccordionBar>
          <div>Max Sensitivity</div>
          <div>{`${content?.maxSensitivity} dpi`}</div>
          </AccordionBar>}
        {content?.maxSpeed && <AccordionBar>
          <div>Max Speed</div>
          <div>{`${content?.maxSpeed} ips`}</div>
          </AccordionBar>}
        {content?.battery && <AccordionBar>
          <div>Battery</div>
          <div>{`${content?.battery} hours`}</div>
          </AccordionBar>}
        {content?.connection && <AccordionBar>
          <div>Connection</div>
          <div>{content?.connection}</div>
          </AccordionBar>}
        {content?.width && <AccordionBar>
          <div>Width</div>
          <div>{`${content?.width} in`}</div>
          </AccordionBar>}
        {content?.height && <AccordionBar>
          <div>Height</div>
          <div>{`${content?.height} in`}</div>
          </AccordionBar>}
        {content?.weight && <AccordionBar>
          <div>Weight</div>
          <div>{`${content?.weight} gram`}</div>
          </AccordionBar>}
        </Accordioncontent>}
    </AccordionItem>
  );
}

export default Accordion;

