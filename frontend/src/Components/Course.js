import React from 'react';
import list from '../Assests/list.json'
import Cards from '../Components/Cards'
import { Link } from 'react-router-dom';

const Course = () => {
    console.log(list);
    return (
        <>
            <div className='max-w-screen-xl container mx-auto md:px-20 px-4'>
                <div className='mt-28 justify-center items-center text-center'>
                    <h1 className='text-2xl font-semibold md:text-4xl '>We're delighted to have you {" "}<span className='text-pink-500'>Here!</span>  :)</h1>
                    <p className='mt-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorum quod minus, debitis ducimus vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto mollitia eaque minus corporis dolor voluptatem expedita delectus consectetur dolore officiis ratione officia beatae error, deserunt nobis facilis est tempore!
                    </p>
                    <Link to="/"><button type="button" className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300 mt-6'>Back</button></Link>
                    
                </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    list.map((filterbookcard) => (
                        <Cards  key={filterbookcard.id} filterbookcard={filterbookcard} />
                    ))
                }
            </div>
            </div>
        </>
    )
}

export default Course
