import React from 'react'
import { ArrowSVG } from '../assets/icons';

type Props = {
    setPage:  (value: number) => void;
    page: number
}

const PagignBtn = ({setPage,page}: Props) => {
  return (
    <div className="btn-group">
           <button
           disabled={page <= 1}
           onClick={()=> setPage(page-1)}
      className={`btn text-primary  active:btn-active `}
    >
        <div className='rotate-180'>
        <ArrowSVG />
        </div>
    </button>
    <button
      className={`btn ${page == 1 ? "btn-active" : ""} `}
      onClick={() => setPage(1)}
    >
      1
    </button>
    <button
      className={`btn ${page == 2 ? "btn-active" : ""} `}
      onClick={() => setPage(2)}
    >
      2
    </button>
    <button
      className={`btn ${page == 3 ? "btn-active" : ""} `}
      onClick={() => setPage(3)}
    >
      3
    </button>
    <button
      disabled={page >= 3}
      onClick={()=> setPage(page+1)}
      className={`btn text-primary active:btn-active `}
    >
        <ArrowSVG />
    </button>
  </div>
  )
}

export default PagignBtn