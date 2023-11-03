import {  useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const Bookings = () => {
    const {user} = useContext(AuthContext)
    const bookings = useLoaderData();
    console.log(bookings)
        const myBookings = bookings.filter(booking=>booking?.email===user?.email)
        const {_id,date,email,number,img}=myBookings;

        //ডিলিট করার চেষ্টা করছি 
        const handleDelete = id => {
            const proceed = confirm('Are you sure you want to delete')
            if(proceed){
                fetch(`http://localhost:5000/bookings/${id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                })
            }
        }

    return (
        <div className='grid md:grid-cols-2 w-full mx-auto'>
             {
             myBookings.map(booking=><div key={_id} className="card w-96 bg-base-100 shadow-xl">
             <figure><img src={booking?.img} alt="Shoes" /></figure>
             <div className="card-body">
               <h2 className="card-title">{booking?.email}</h2>
               <p>If a dog chews shoes whose shoes does he choose?</p>
               <h3>{booking.length}</h3>
               <div>
               <button onClick={()=>handleDelete(_id)} className="btn btn-block bg-red-600">Delete</button>
               </div>
             </div>
           </div>)
        }
        </div>
    );
};

export default Bookings;