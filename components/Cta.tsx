import React, { FC, useState } from 'react'
import { email } from "../public";
import Image from 'next/image'

const Cta:FC = () => {
  const [email, setEmail] = useState<string>('')
  return (
    <div className="mx-auto mt-24 w-11/12 p-3 flex flex-col gap-4">
      <h3 className="text-2xl text-text font-bold lg:w-1/3 tracking-wider">Stay up-to-date with Our programmes and Event</h3>
      <form className="flex justify-between mt-6 lg:flex-row flex-col gap-6">
      <label className="lg:w-3/4 relative block w-full">
        <span className="absolute inset-y-0 left-2 flex items-center pl-2 justify-center">
          <span className="block w-8 h-8 cursor-pointer">
            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.0003 4.16675C13.5003 4.16675 4.16699 13.5001 4.16699 25.0001C4.16699 36.5001 13.5003 45.8334 25.0003 45.8334H35.417V41.6668H25.0003C15.9587 41.6668 8.33366 34.0417 8.33366 25.0001C8.33366 15.9584 15.9587 8.33342 25.0003 8.33342C34.042 8.33342 41.667 15.9584 41.667 25.0001V27.9792C41.667 29.6251 40.1878 31.2501 38.542 31.2501C36.8962 31.2501 35.417 29.6251 35.417 27.9792V25.0001C35.417 19.2501 30.7503 14.5834 25.0003 14.5834C19.2503 14.5834 14.5837 19.2501 14.5837 25.0001C14.5837 30.7501 19.2503 35.4167 25.0003 35.4167C27.8753 35.4167 30.5003 34.2501 32.3753 32.3542C33.7295 34.2084 36.0628 35.4167 38.542 35.4167C42.6462 35.4167 45.8337 32.0834 45.8337 27.9792V25.0001C45.8337 13.5001 36.5003 4.16675 25.0003 4.16675ZM25.0003 31.2501C21.542 31.2501 18.7503 28.4584 18.7503 25.0001C18.7503 21.5417 21.542 18.7501 25.0003 18.7501C28.4587 18.7501 31.2503 21.5417 31.2503 25.0001C31.2503 28.4584 28.4587 31.2501 25.0003 31.2501Z" fill="white" />
            </svg>

          </span>
        </span>
        <input type="url" className="block transition-all duration-500 ease-in bg-transparent w-full py-4 pl-20 pr-3 shadow-sm outline-none ring-2 focus:ring-curves ring-primaryLight ring-offset-primaryLight ring-offset-1 focus:ring-offset-curves/30 h-[auto] align-middle my-auto rounded-md text-white placeholder:text-white placeholder:text-lg text-lg placeholder:font-bold font-bold placeholder:align-middle placeholder:my-auto self-stretch" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit" className="text-primaryLight font-bold bg-light px-8 rounded-md py-4 text-center">Submit</button>
      </form>

    </div>
  )
}

export default Cta