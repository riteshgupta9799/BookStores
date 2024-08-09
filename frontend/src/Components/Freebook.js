import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import axios from 'axios';


const Freebook = () => {
  
  const [bookdata, setGetbookdata] = useState([]);
  useEffect(() => {
      const fetchbookdata = async () => {
          try {
              const response = await axios("http://localhost:4001/api/book");
              console.log(response.data);
              const filterbookdata = response.data.filter((freebook) => freebook.category === "Free")
              setGetbookdata(filterbookdata);

          } catch (error) {
              console.log(error);
          }
      };
      fetchbookdata();
  }, []);


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            // breakpoint means kitne w pr kitne card diekenge
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
    return (
        <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
      <h1 className='font-bold text-xl pb-2'>Free Books</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, assumenda corporis! Odio, eaque! Odit natus a rerum iusto fugiat, sequi molestiae, laudantium facilis magnam earum inventore praesentium repellendus optio aperiam.</p>
      </div>
    <div className="slider-container ">
      <Slider {...settings}>
        {bookdata.map((filterbookcard) => (
            <Cards filterbookcard={filterbookcard} key={filterbookcard.id} />
        ) )}
      </Slider>
    </div>
    </div>
        </>
    )
}

export default Freebook
