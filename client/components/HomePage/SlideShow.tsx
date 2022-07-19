import React, { useState } from "react";
import styled from "styled-components";
import { settings, productsInHero } from "data/settings";
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import { Button } from "components/Button.styled";
import Image from "next/image";

export interface IArrowProps {
  arrowPosition?: "left" | "right";
}

const Arrow = styled.div.attrs<Pick<IArrowProps, "arrowPosition">>((props) => {
  arrowPosition: props?.arrowPosition;
}) <IArrowProps>`
z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 10vw;
  width: 2rem;
  height: 2rem;
  background: #404855;
  border: 2px solid #eae7dd;
  cursor: pointer;
  ${(props) => (props?.arrowPosition === "left" ? "left : 0;" : "right: 0;")};
  :hover {
    border: 2px solid #fb4959;
  }
  :active {
    background: #fb495970;
  }
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
  height: calc(100% - 2rem);
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
  cursor: pointer;
  /* margin: 0px 1px; */
  border-bottom: 2px solid #eae7dd;
  @media (min-width: 1024px) {
    height: 0.5rem;
    width: 5rem;
  }
  transition: 0.4s all ease-in-out;
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
                    className={`text-[#fb4959] text-[1.25rem] md:text-[1.25rem] lg:text-[1.5rem]`}
                  >
                    {product.brand}
                  </div>
                  <div
                    className={`text-[#eae7dd] font-bold text-[1.5rem] md:text-[1.75rem] lg:text-[2.5rem] whitespace-normal`}
                  >
                    {product.name}
                  </div>
                  <div
                    className={`text-[#fb4959] font-bold text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem]`}
                  >
                    $ {product.salePrice}
                  </div>
                  <div
                    className={`text-[#eae7dd] font-bold text-[1rem] sm:text-[1.3rem] md:text-[1.55rem] lg:text-[1.5rem] line-through decoration-2`}
                  >
                    $ {product.originalPrice}
                  </div>
                  <Button size="large" variant="primary" role="button">MORE ON G Pro Wireless</Button>
                  {/* <div className="text-center w-60 h-14 bg-[#fb4959] p-2">
                    <div className={`text-[#eae7dd] font-bold text-2xl  `}>
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
        <div className="flex flex-row ">
          <SlideshowDots>
            {productsInHero.map((_, idx) => (
              <SlideshowDot
                style={{
                  backgroundColor:
                    currentSlide === idx ? `#eae7dd` : "",
                }}
                key={idx}
                onClick={() => {
                  setCurrentSile(idx);
                }}
              />
            ))}
          </SlideshowDots>
          <div className="flex flex-row">
            <Arrow
              onClick={() => {
                back();
              }}
              arrowPosition="left"
            >
              <MdArrowLeft style={{ color: "#eae7dd", fontSize: "2rem" }} />
            </Arrow>
            <Arrow
              onClick={() => {
                next();
              }}
              arrowPosition="right"
            >
              <MdArrowRight style={{ color: "#eae7dd", fontSize: "2rem" }} />
            </Arrow>

          </div>
        </div>
      </SlideShowContainer>


    </div>
  );
}

export default SlideShow;

