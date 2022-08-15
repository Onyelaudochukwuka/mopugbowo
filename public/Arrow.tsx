import React from 'react'

const Arrow = (props:any) => {
  return (
      <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L21 12L15 6" stroke="#0C0114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 12H20" stroke="#0C0114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 12H20" stroke="#0C0114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

  )
}

export default Arrow