import React from 'react'
import Bar from '../UI/Bar'
import { BigStarSprite } from '@/assest/Icons/bigStar'

function SlidingBars() {
  return (
    <div  className=' SlidingBars overflow-hidden md:h-[50vh] h-[25vh]  mb-8     relative '>
        {/* Defines the star geometry once; the 30 <BigStar /> instances below
            reference it with <use>. See bigStar.jsx for why. */}
        <BigStarSprite />
        <Bar deg={'  lg:rotate-6 rotate-12 '}  derection={"right"}  />
        <Bar deg={' lg:-rotate-6 -rotate-12 '} derection={-1}  />
    </div>
  )
}

export default SlidingBars