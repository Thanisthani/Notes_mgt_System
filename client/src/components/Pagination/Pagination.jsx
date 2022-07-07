import React from 'react'

function Pagination({ page, pages, changePage }) {
    // let middlePagination;

    let middlePagination = [...Array(pages)].map((_, index) => (
        <button className='bg-gray-400 px-3 py-1  mr-5  hover:bg-gray-300 focus:ring disabled:bg-blue-900 disabled:text-white'
            key={index + 1}
            onClick={() => changePage(index + 1)}
        disabled={page === index+1}>
{index + 1}
        </button>
    ));
    return (
        pages > 1 && (
            <div>
                {/* prev */}
                <button className='bg-gray-400 px-3 py-1  mr-5  hover:bg-gray-300 focus:ring disabled:bg-blue-900 disabled:text-white'
                    onClick={() => changePage((page) => page - 1) }
                    disabled={page === 1}>&#171;</button>
                {/* changePage((page) => page - 1) () => changePage((page) => page + 1) */}
                {middlePagination}
                

                {/* next */}
                <button className='bg-gray-400 px-3 py-1  mr-5  hover:bg-gray-300 focus:ring disabled:bg-blue-900 disabled:text-white'
                    onClick={() => changePage((page) => page + 1)}
                    disabled={page === pages}>&#187;</button>
                
            </div>
        )
   
  )
}

export default Pagination