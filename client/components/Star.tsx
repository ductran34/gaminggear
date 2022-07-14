import React from 'react'
import {HiOutlineStar,HiStar} from 'react-icons/hi';
import {TiStarHalfOutline} from 'react-icons/ti';
import {settings} from "../data/settings"

interface StarProps {
    isFill: string;
  }

function Star({ isFill }: StarProps) {
  return (
    <div className='inline-block' >
        {isFill === "fill" ? 
        <HiStar/> : 
        <>{isFill === "unfill" ? 
        <HiOutlineStar/> :
        <TiStarHalfOutline/>}</>}
    </div>
  )
}

export default Star