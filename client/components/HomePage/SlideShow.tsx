import React, { useState } from "react";
import styled from "styled-components";
import { settings, productsInHero } from "data/settings";
import picture1 from "../../data/mouses/2.png";
import picture2 from "../../data/mouses/razer/AZ1_DEATHADDERV2.jpg";
import picture3 from "../../data/mouses/razer/razer-death-adder-gallery-24.png";
import picture4 from "../../data/mouses/razer/1.png";
import picture5 from "../../data/mouses//steelseries/purchase-gallery-710-tophero.png__1920x1080_q100_crop-fit_optimize_subsampling-2.png";
import { Button } from "components/Button.styled";
import Image from "next/image";
export interface IArrowProps {
  arrowPosition?: "left" | "right";
}

const Arrow = styled.div.attrs<Pick<IArrowProps, "arrowPosition">>((props) => {
  arrowPosition: props?.arrowPosition;
}) <IArrowProps>`
  position: absolute;
  height: 100%;
  width: 10vw;
  cursor: pointer;
  ${(props) => (props?.arrowPosition === "left" ? "left : 0;" : "right: 0;")};
`;

const SlideShowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SlideShowSlide = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
  width: 100%;
  height: calc(100% - 4rem);
`;

const SlideshowDots = styled.div`
  text-align: center;
  width: 100%;
  height: 4rem;
`;

const SlideshowDot = styled.div`
  display: inline-block;
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  margin: 0px 7px;
  background-color: #c4c4c4;
  @media (min-width: 1024px) {
    height: 1.25rem;
    width: 1.25rem;
  }
`;

function SlideShow() {
  const [currentSlide, setCurrentSile] = useState(0);
  const timeoutRef = React.useRef(null);

  const delay = 2500;

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
          prevSlide === productsInHero.length - 1 ? 0 : prevSlide + 1
        ),
      delay
    );

    return () => { };
  }, [currentSlide]);

  function next() {
    setCurrentSile((prevSlide) =>
      prevSlide === productsInHero.length - 1 ? 0 : prevSlide + 1
    );
  }

  function back() {
    setCurrentSile((prevSlide) =>
      prevSlide === 0 ? productsInHero.length - 1 : prevSlide - 1
    );
  }

  return (
    <div className=" h-full flex justify-between items-center relative ">
      <SlideShowContainer>
        <SlideShowSlide
          style={{ transform: `translate3d(${-currentSlide * 100}%, 0, 0)` }}
        >
          {productsInHero.map((product, index) => (
            <div
              className={"h-full w-full inline-block"}     
              key={index}
            >
              <div className="h-full grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none"> 
                <div className="flex flex-col justify-end lg:justify-start gap-2 pl-[10vw] py-6 text-left ">
                  <div
                    className={`text-[#FE665B] text-[1.25rem] md:text-[1.25rem] lg:text-[1.5rem]`}
                  >
                    {product.brand}
                  </div>
                  <div
                    className={`text-[#FFFFFF] font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2.5rem] whitespace-normal`}
                  >
                    {product.name}
                  </div>
                  <div
                    className={`text-[#FE665B] font-bold text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem]`}
                  >
                    $ {product.salePrice}
                  </div>
                  <div
                    className={`text-[#FFFFFF] font-bold text-[1rem] sm:text-[1.3rem] md:text-[1.55rem] lg:text-[1.5rem] line-through decoration-2`}
                  >
                    $ {product.originalPrice}
                  </div>
                  <Button size="large" variant="primary" role="button">MORE ON G Pro Wireless</Button>
                  {/* <div className="text-center w-60 h-14 bg-[#FE665B] p-2">
                    <div className={`text-[#FFFFFF] font-bold text-2xl  `}>
                    MORE ON G 
                    </div>
                  </div> */}
                </div>
                <div className="order-first lg:order-last text-center ">
                  <Image
                    objectFit="cover"
                    className="h-full"
                    src={product.productImage}
                  />
                </div>
              </div>
            </div>
          ))}
        </SlideShowSlide>
        <SlideshowDots>
          {productsInHero.map((_, idx) => (
            <SlideshowDot
              style={{
                backgroundColor:
                  currentSlide === idx ? `${settings.primaryColor}` : "",
              }}
              key={idx}
              onClick={() => {
                setCurrentSile(idx);
              }}
            />
          ))}
        </SlideshowDots>
      </SlideShowContainer>

      <Arrow
        onClick={() => {
          next();
        }}
        arrowPosition="right"
      />
      <Arrow
        onClick={() => {
          back();
        }}
        arrowPosition="left"
      />
    </div>
  );
}

export default SlideShow;

