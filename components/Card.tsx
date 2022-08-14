import React from 'react'
import { Cancel } from "../public"

const Card = () => {
  return (
    <div className="fixed inset-0 bg-gray-200/50 z-[99] flex justify-center items-center">
      <Cancel />
      <div className="bg-white w-1/2 h-1/2 m-auto flex flex-col items-center shadow-inner rounded-lg justify-evenly px-12 text-center">
              <h1 className="text-2xl font-bold">Experience Koinonia</h1>
              <p className="font-semibold text-lg">We enjoy fellowship together every week at any of our several locations all over the country. join us this weekend at a location close to you.</p>
              <a className="p-8 py-4 bg-curves rounded-full text-white font-bold">Plan A Visit</a>
          </div>
    </div>
  )
}

export default Card