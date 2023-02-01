import React from 'react'

const Pagination = ({page,nextpage,prevpage}) => {
  return (
    <div className='flex justify-center align-middle m-4 '>
        <div className='border-2 p-2 border-r-0 rounded-l-xl border-blue-400 pointer' onClick={prevpage}>Prev</div>
        <div className='border-2 p-2 border-r-0 border-blue-400 pointer'>{page}</div>
        <div className='border-2 p-2 rounded-r-xl border-blue-400 pointer' onClick={nextpage}>Next</div>
    </div>
  )
}

export default Pagination