/* eslint-disable react/prop-types */

import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const {_id,img,title,price} = service
    return (
        <div className="card w-96 h-[400px] bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img className='rounded-lg' src={img} />
        </figure>
        <div className="card-body">
          <h2 className='text-xl font-bold'>{title}</h2>
          <div className="card-actions">
     <p className=" text-[#FF3811] font-bold">Price  :${price}</p>
            <Link to={`/checkout/${_id}`}><button className='text-4xl mr-6 text-red-600'><AiOutlineArrowRight></AiOutlineArrowRight></button></Link>
            <button>Add me</button>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;