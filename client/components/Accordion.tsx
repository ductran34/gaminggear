import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

export interface IAccordionProps {
  variant?: "primary" | "secondary";
  isActive: boolean;
}

interface AccordionProps {
  title: string;
  content?: any;
  index: number;
  activeIndex: number;
  setActiveIndex: (activeIndex: number) => void;
};

const AccordionItem = styled.div.attrs<Pick<IAccordionProps, "isActive">>(
  (props) => {
    scrollNav: props?.isActive;
  }
)<IAccordionProps>`
  width: 100%;
  background: ${(props) => (props?.isActive === false ? "transparent" : "#fb495970")};
  border-bottom: 1px solid ${(props) => (props?.isActive === false ? "#fff" : "#fb4959")};;
`;

const AccordionTitle = styled.div.attrs<Pick<IAccordionProps, "isActive">>(
  (props) => {
    scrollNav: props?.isActive;
  }
)<IAccordionProps>`
  display: flex;
  user-select: none;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  font-size: 1.25rem;
  padding: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
  background: ${(props) => (props?.isActive === false ? "transparent" : "#fb495970")};
  :hover {
    background: #fb495970;
  }
`;

const AccordionBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  font-size: 1rem;
  padding-top: 0.5rem;
  padding: 0.5rem;
  align-items: center;
  user-select: none;
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

function Accordion({title, content, index, activeIndex, setActiveIndex}:AccordionProps) {
  //const [isActive, setIsActive] = useState(false);
  const isActive = index === activeIndex ? true : false;
  const handleOpen = () => {
    //setIsActive(!isActive)
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <AccordionItem  isActive={isActive}>
      <AccordionTitle isActive={isActive} onClick={() => handleOpen()}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </AccordionTitle>
      {isActive && <AccordionContent style={isActive ? {transition: "all 200ms cubic-bezier(0.600, -0.280, 0.735, 0.045)"} : {transition:" all 350ms cubic-bezier(0.080, 1.090, 0.320, 1.275)"}}>
        {content?.maxSensitivity && <AccordionBar>
          <div>Max Sensitivity</div>
          <div>{`${content?.maxSensitivity} dpi`}</div>
          </AccordionBar>}
        {content?.maxSpeed && <AccordionBar>
          <div>Max Speed</div>
          <div>{`${content?.maxSpeed} ips`}</div>
          </AccordionBar>}
        {content?.maxAcceleration && <AccordionBar>
          <div>Max Acceleration</div>
          <div>{`${content?.maxAcceleration} G`}</div>
          </AccordionBar>}
        {content?.battery && <AccordionBar>
          <div>Battery Life</div>
          <div>{`${content?.battery} hours`}</div>
          </AccordionBar>}
        {content?.connection && <AccordionBar>
          <div>Connectivity</div>
          <div>{content?.connection}</div>
          </AccordionBar>}
        {content?.lifecycle && <AccordionBar>
          <div>Switch Lifecycle</div>
          <div>{content?.lifecycle}</div>
          </AccordionBar>}
        {content?.buttons && <AccordionBar>
          <div>Programmable Buttons</div>
          <div>{content?.buttons}</div>
          </AccordionBar>}
        {content?.width && <AccordionBar>
          <div>Width</div>
          <div>{`${content?.width} mm`}</div>
          </AccordionBar>}
        {content?.height && <AccordionBar>
          <div>Height</div>
          <div>{`${content?.height} mm`}</div>
          </AccordionBar>}
        {content?.weight && <AccordionBar>
          <div>Weight</div>
          <div>{`${content?.weight} g`}</div>
          </AccordionBar>}
        </AccordionContent>}
    </AccordionItem>
  );
}

export default Accordion;

