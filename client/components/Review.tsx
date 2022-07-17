import React, { useState } from "react";
import TitleList from "./HomePage/TitleList";

import styled from "styled-components";
import { brandLists } from "../data/settings";
import star_fill from "../data/asserts/star_fill.png";
import star_unfill from "../data/asserts/star_unfill.png";
import rating_line from "../data/asserts/rating_line.png";
import Star from "./Star";

const RatingContainer1 = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  justify-content: space-between;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ReviewContainer = styled.div``;

function Review() {
  return (
    <div className="text-white">
      <TitleList title="REVIEW" />
      <div className="w-full grid gap-4 justify-between grid-cols-1 lg:grid-cols-2">
        <RatingContainer />
        <CustomerComment />
      </div>
      <ReviewContainer>
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </ReviewContainer>
    </div>
  );
}

interface StarRatingProps {
  index: number;
}

function StarRating({ index }: StarRatingProps) {
  return (
    <div>
      <div className="text-[1.5rem] inline-block pr-4">{index} star</div>
      <div className="text-amber-300 font-black inline-block">
        <img
          className="w-6-4 rounded-full inline-block"
          src={rating_line.src}
          alt="Rounded avatar"
        />
      </div>
    </div>
  );
}

interface ProductOverallStarProps {
  point: number;
}

// This component is showing the overall rating by stars of the product
function ProductOverallStar({ point }: ProductOverallStarProps) {
  let isInteger = Number.isInteger(point);
  let roundedNumber = Math.floor(point);
  return (
    <div className="text-amber-300 font-black">
      {[...Array(5)].map((brand, idx) => {
        if (idx < roundedNumber) {
          return <Star isFill="fill" key={idx} />;
        } else if (idx === roundedNumber) {
          if (isInteger === false) {
            return <Star isFill="half" key={idx} />;
          } else {
            return <Star isFill="unfill" key={idx} />;
          }
        } else {
          return <Star isFill="unfill" key={idx} />;
        }
      })}
    </div>
  );
}

// This commponent shows the rating of the product
function RatingContainer() {
  return (
    <div className="bg-[#191928] rounded-md grid md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-4 p-4">
      <div className="flex flex-col justify-around text-center">
        <div className="">
          <div className="text-[4rem] font-bold">3.8/5</div>
          <div className="text-[1rem] font-bold">based on 120 reviews</div>
        </div>
        <ProductOverallStar point={3.8} />
      </div>
      <div className="text-center">
        {[...Array(5)].map((brand, idx) => (
          <StarRating key={idx} index={idx + 1} />
        ))}
      </div>
    </div>
  );
}

// This commponent allows user write the comment
function CustomerComment() {
  const [isOpenCommentBox, setIsOpenCommentBox] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div>Review this product</div>
      <div className="font-light text-[1rem]">
        Share your thoughts with other customers
      </div>
      <CustomerGivingStar />
      {isOpenCommentBox === true ? (
        <form className="flex-1 flex flex-col justify-end w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <div className="flex-1 py-2 px-4 bg-[#191928] rounded-t-lg dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              className="px-0 h-full w-full text-sm text-gray-900 bg-[#191928] border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post comment
            </button>
            <div className="flex pl-0 space-x-1 sm:pl-2">
              <button
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="cursor-pointer ">
          <div
            className="text-[1.2rem] text-bold  p-2 bg-[#FE665B] w-max"
            onClick={() => {
              setIsOpenCommentBox(true);
            }}
          >
            Write a customer reivew
          </div>
        </div>
      )}
    </div>
  );
}

// This component allows user rate the product by giving star
function CustomerGivingStar() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="text-amber-300 font-black inline-block">
      {[...Array(5)].map((brand, idx) => {
        return (
          <div
            onClick={() => setRating(idx)}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(rating)}
            onDoubleClick={() => {
              setRating(0);
              setHover(0);
              }}
            className="inline-block"
            key={idx}
          >
            <Star
            
              isFill={idx <= (hover || rating) ? "fill" : "unfill"}
            />
          </div>
        );
      })}
    </div>
  );
}

// This component shows a comment reviews of other users
function CommentCard() {
  return (
    <div className="py-6 text-[1.2rem] w-full border-b border-grey-600">
      <div className="flex flex-row justify-between">
        <div className="">
          <img
            className="w-10 h-10 rounded-full inline-block"
            src="https://fakeimg.pl/300/"
            alt="Rounded avatar"
          />
          <div className="font-medium inline-block px-2">Muath T.</div>
          <div className="text-amber-300 font-black inline-block">
            {[...Array(5)].map((brand, idx) => (
              <Star isFill="full" key={idx} />
            ))}
          </div>
        </div>
        <div className="font-thin text-[1rem]">04/03/2022</div>
      </div>
      <div className="font-bold ">
        Love love love this mouse and all the color schems and options
      </div>
      <div className="font-light text-[1rem]">
        I am coming from a regular G103 rgb (just figured that out plugging it
        into G hub) which was an excellent bargain but this blows it away.
        Perhaps because of new feet being smooth. But mostly because the
        beautiful blue (which was never on sale for a long time) or purple plus
        the AMAZING light options. I had no idea you could practically display
        ima.
      </div>
    </div>
  );
}

export default Review;
