import React, { FC, PropsWithChildren } from 'react'
import { Cancel } from "../public"
import { Data } from './About';
const Card = ({ changeState, data }:  { changeState:() => void, data: Data}) => {
  return (
    <div className="fixed inset-0 bg-gray-200/50 z-[99] flex justify-center items-center">
      <div className="bg-white w-1/2 h-1/2 m-auto flex flex-col items-center shadow-inner rounded-lg justify-center gap-4 px-12 text-center relative">
      <Cancel className="w-8 h-8 absolute top-4 right-5 cursor-pointer"/>
              <h1 className="text-2xl font-bold">Experience Koinonia</h1>
              <p className="font-semibold text-lg">We enjoy fellowship together every week at any of our several locations all over the country. join us this weekend at a location close to you.</p>
              <a className="p-8 py-4 bg-curves rounded-full text-white font-bold cursor-pointer">Plan A Visit</a>
          </div>
    </div>
  )
}

export default Card