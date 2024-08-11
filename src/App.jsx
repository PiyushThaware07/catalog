import React, { useState } from 'react'
import "./App.css"
import Sample from "./components/Sample";





export default function App() {
  const [value, setValue] = useState({
    current: "63,179.71",
    country: "USD",
    growth: "+2,161.42 (3.54%)"
  });
  return (
    <main className='app_main  min-h-screen w-full bg-slate-50 flex flex-nowrap items-center justify-center p-3'>
      <div className="h-full w-[60vw] mx-auto  p-10 border-slate-200 rounded-xl bg-white">
        <h1 className='font-bold inline text-4xl relative text-slate-800'>{value.current}
          <h2 className='absolute -top-2 -right-10 text-[18px] font-semibold text-gray-300'>{value.country || "USD"}</h2>
        </h1>
        <h2 className='text-[12px] tracking-[1px] text-green-500 font-medium'>{value.growth}</h2>

        <div className="mt-5">
          <Sample value={value} setValue={setValue} />
        </div>
      </div>


    </main>
  )
}
