import React, { useState } from 'react'

function Pagination({setpage,page}) {
    function previoushandler(){
    if (page<=1) return;
        setpage((page)=>page-1)
    }
    function nexthandler(){
        if (page>=9) return;
        setpage((page)=>page+1)
    }
  return (
<div className='flex w-[400px] justify-between items-center mb-[20px] m-auto mt-[100PX] '>
    <button className={`w-[80px] p-[5px_10px] border-none text-[#fff] bg-[#3874ff] rounded-[5px] text-[1rem] cursor-pointer ${page === 1 ? "opacity-[0.3]" : null}`} onClick={previoushandler}>previous</button>
    <p className={`border-1 border-[#3874ff] border-solid w-[25px] rounded-[5px] text-center cursor-pointer  ${page == 1 ? "bg-[#3874ff]  text-[#fff] " : "text-inherit"}`}>1</p>
    <p className={`border-1 border-[#3874ff] border-solid w-[25px] rounded-[5px] text-center cursor-pointer ${page == 2 ? "bg-[#3874ff]  text-[#fff] " : "text-inherit"}`}>2</p>
    {page>2 && page<8 && (
        <>
        <span>...</span>
        <p className='border-1 border-[#3874ff] border-solid w-[25px] rounded-[5px] text-center cursor-pointer bg-[#3874ff]  text-[#fff]'>{page}</p>
        </>
    )}
    <p>...</p>
    <p className={`border-1 border-[#3874ff] border-solid w-[25px] rounded-[5px] text-center cursor-pointer ${page == 8 ? "bg-[#3874ff]  text-[#fff] " : "text-inherit"}`}>8</p>
    <p className={`border-1 border-[#3874ff] border-solid w-[25px] rounded-[5px] text-center cursor-pointer ${page == 9 ? "bg-[#3874ff]  text-[#fff] " : "text-inherit"}`}>9</p>
    <button className={`w-[80px] p-[5px_10px] border-none text-[#fff] bg-[#3874ff] rounded-[5px] text-[1rem] cursor-pointer ${page === 9 ? "opacity-[0.3]" : null}`} onClick={nexthandler}>next</button>
</div>
  )
}

export default Pagination