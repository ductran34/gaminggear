import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { settings } from "../../data/settings";
import SlideShow from "./SlideShow";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  align-content: center;
  width: 100%;
  // @media (min-width: 640px) { 
  //   height: calc(100vh - 4em);
  // }
`;

const ScrollBox = styled.div`
  width: 100%;
  max-width: 60rem;
  height: calc(100vh - 4em);
  @media (min-width: 720px) { 
    aspect-ratio: 2/1;
  }
  @media (min-width: 1024px) { 
    max-height: 28rem;
  }
`;

const DescriptionBox = styled.div``;

const Hero = () => {
  return (
    <Container>
      <ScrollBox>
          <SlideShow />
        </ScrollBox>
       {/* DescriptionBox */}
        <div
          style={{
            color: `${settings.primaryColor}`,
            fontSize: "32px",
            fontWeight: "600",
          }}
        >
          Advanced Gaming Gear
        </div>
        <div style={{ color: `${settings.whiteColor}` }}>
          Play at your peak with the highest performance gaming equipment from
        </div>
    </Container>
  );
};

export default Hero;
