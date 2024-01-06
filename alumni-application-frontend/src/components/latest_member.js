import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Latest(){
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
  };
  return (
    <div>
      <div className='container'>
        <div className='row'>
        <div className='title'>
          <h2>LATEST MEMBER</h2>
        </div>
        <div className='view-more'>
          <a href='../pages/Latest-members-page.js' >VIEW MORE {">"}</a>
        </div>
        </div>
        <div className='w-3/4 m-auto'>
          <div className='mt-0'>
          <Slider {...settings}>
            {data.map((d)=>(
              <div className='bg-white h-[350px] text-black rounded-xl'>
                <div>
                  <div className='rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                    <img src={d.img} alt='' className='h-44 w-44 rounded-full'/>
                  </div>
                  <div className=' flex-col justify-center items-center gap-4 p-4'>
                    <p className='text-xl font-semibold'>{d.name}</p>
                    <p>{d.description}</p>
                    <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Connect</button>
                  </div>

                </div>
                </div>
            ))}
           </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: `xyz`,
    img: '',   //here we have to place the url
    description:`he is an full stack developer at Google`
  },
   {
    name: `xyz`,
    img: '',   //here we have to place the url
    description:`he is an full stack developer at Google`
  },
   {
    name: `xyz`,
    img: '',   //here we have to place the url
    description:`he is an full stack developer at Google`
  },
   {
    name: `xyz`,
    img: '',   //here we have to place the url
    description:`he is an full stack developer at Google`
  },
   {
    name: `xyz`,
    img: '',   //here we have to place the url
    description:`he is an full stack developer at Google`
  },
]
export default Latest;
