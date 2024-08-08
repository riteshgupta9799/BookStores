import React from 'react'
import list from '../Assests/list.json'

const Cards = ({ filterbookcard }) => {
    console.log(list);
    return (
        <>
            <div className='mt-4 my-3 p-3 '>

                <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
                    <figure>
                        <img
                            src={filterbookcard.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-nowrap">
                        <h2 className="card-title ">
                            {filterbookcard.name}
                            <div className="badge badge-secondary p-[-1px]">{filterbookcard.category}</div>
                        </h2>
                        <p>{filterbookcard.title}</p>
                        <div className="card-actions justify-between ">
                            <div className="badge badge-info ">Price:{filterbookcard.price}</div>
                            <div className="badge badge-info cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
