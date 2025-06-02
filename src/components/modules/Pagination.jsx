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
<div className='flex w-[400px] justify-between items-center mb-[100px] m-auto'>
    <button className='w-[80px] p-[5px_10px] border-none text-[#fff] bg-[#3874ff] rounded-[5px] text-[1rem] cursor-pointer' onClick={previoushandler}>previous</button>
    <p className={page === 1 ? "text-red-500" : "text-inherit"}>1</p>
    <p className={page === 2 ? "text-red-500" : "text-inherit"}>2</p>
    {page>2 && page<9 && (
        <>
        <span>...</span>
        <p className='text-red-500'>{page}</p>
        </>
    )}
    <p>...</p>
    <p className={page === 8 ? "text-red-500" : "text-inherit"}>8</p>
    <p className={page === 9 ? "text-red-500" : "text-inherit"}>9</p>
    <button className='w-[80px] p-[5px_10px] border-none text-[#fff] bg-[#3874ff] rounded-[5px] text-[1rem] cursor-pointer' onClick={nexthandler}>next</button>
</div>
  )
}

export default Pagination