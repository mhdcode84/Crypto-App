import React, { useState } from 'react'

function Pagination({setpage,page}) {
    function previoushandler(){
    if (page<=1) return;
        setpage((page)=>page-1)
    }
    function nexthandler(){
        if (page>=10) return;
        setpage((page)=>page+1)
    }
  return (
<div>
    <button onClick={previoushandler}>previous</button>
    <p className={page === 1 ? "text-red-500" : "text-inherit"}>1</p>
    <p className={page === 2 ? "text-red-500" : "text-inherit"}>2</p>
    {page>2 && page<9 && (
        <>
        <span>...</span>
        <p>{page}</p>
        </>
    )}
    <p>...</p>
    <p>9</p>
    <p>10</p>
    <button onClick={nexthandler}>next</button>
</div>
  )
}

export default Pagination