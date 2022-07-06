import React, { useState } from "react";
import styled from "styled-components";
import {settings} from "data/settings"
import picture1 from "../../data/mouses/2.png";
import picture2 from "../../data/mouses/razer/AZ1_DEATHADDERV2.jpg";
import picture3 from "../../data/mouses/razer/razer-death-adder-gallery-24.png";
import picture4 from "../../data/mouses/razer/1.png";
import picture5 from "../../data/mouses//steelseries/purchase-gallery-710-tophero.png__1920x1080_q100_crop-fit_optimize_subsampling-2.png";

export interface IArrowProps {
  arrowPosition?: "left" | "right";
}

const Arrow = styled.div.attrs<Pick<IArrowProps, "arrowPosition">>((props) => {
  arrowPosition: props?.arrowPosition;
})<IArrowProps>`
  position: absolute;
  height: 100%;
  width: 10vw;
  cursor: pointer;
  ${(props) => (props?.arrowPosition === "left" ?
  "left : 0;" : 
  "right: 0;")};
`;

const SlideShowContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const SlideShowSlide = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
  width: 100%;
  height: 100%;
`;

const SlideshowDots = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SlideshowDot = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: #c4c4c4;
`;

function SlideShow() {
  const [currentSlide, setCurrentSile] = useState(0);
  const timeoutRef = React.useRef(null);

  const delay = 2500;
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(
      () =>
        setCurrentSile((prevSlide) =>
          prevSlide === colors.length - 1 ? 0 : prevSlide + 1
        ),
      delay
    );

    return () => {};
  }, [currentSlide]);

  function next() {
    setCurrentSile((prevSlide) =>
      prevSlide === colors.length - 1 ? 0 : prevSlide + 1
    );
  }

  function back() {
    setCurrentSile((prevSlide) =>
      prevSlide ===  0 ? colors.length - 1 : prevSlide - 1
    );
  }

  return (
    <div className="h-full flex justify-between items-center relative">
      <SlideShowContent>
        <SlideShowSlide
          style={{ transform: `translate3d(${-currentSlide * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundColor, index) => (
            <div
              className={"h-full w-full inline-flex flex-row justify-between pl-[10vw]"}
              style={{
                backgroundColor: backgroundColor,
              }}
              key={index}
            >
              <div className="flex flex-col py-10  text-left">
                  <div className={`text-[#FE665B] font-bold text-2xl`}>NAME BRAND</div>
                  <div className={`text-[#FFFFFF] font-bold text-[3vw] whitespace-normal`}>G PRO Wireless Gaming Mouse</div>
                  <div className={`text-[#FE665B] font-bold text-3xl`}>$ 59.00</div>
                  <div className={`text-[#FFFFFF] font-bold text-2xl line-through decoration-2`}>$ 59.00</div>
                  <div className="text-center w-60 h-14 bg-[#FE665B] p-2">
                    <div className={`text-[#FFFFFF] font-bold text-2xl  `}>MORE ON RAZER</div>
                  </div>   
              </div>
              <img src={picture1.src}/>
            </div>
          ))}
        </SlideShowSlide>

        <SlideshowDots>
          {colors.map((_, idx) => (
            <SlideshowDot
              style={{backgroundColor: currentSlide === idx ? `${settings.primaryColor}` : ""}}
              key={idx}
              onClick={() => {
                setCurrentSile(idx);
              }}
            />
          ))}
        </SlideshowDots>
      </SlideShowContent>

      <Arrow onClick={()=> {next()}} arrowPosition="right"/>
      <Arrow onClick={()=> {back()}} arrowPosition="left"/>
    </div>
  );
}

export default SlideShow;
