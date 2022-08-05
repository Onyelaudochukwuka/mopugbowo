import React, { FC, useState } from 'react'
import { email } from "../public";
import Image from 'next/image'

const Cta:FC = () => {
  const [email, setEmail] = useState<string>('')
  return (
    <div>
      <h3>Stay up-to-date with Our programmes and Event</h3>
      <label className="w-full relative block mx-auto">
        <span className="absolute inset-y-0 left-2 flex items-center pl-2 justify-center">
          <Image src={email} height="48" width="48" alt="link" />
        </span>
        <input type="url" className="block transition-all duration-500 ease-in bg-[transparent] w-full py-4 pl-20 pr-3 shadow-sm outline-none ring-2 focus:ring-neutral ring-dark ring-offset-dark ring-offset-1 focus:ring-offset-neutral/30 h-[auto] align-middle my-auto rounded-md text-light placeholder:text-light placeholder:text-lg text-lg placeholder:font-bold font-bold placeholder:align-middle placeholder:my-auto" placeholder="Enter Link Here" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

    </div>
  )
}

export default Cta