import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
    const services = useLoaderData();
    const {_id,title,price,img}=services
    const {user} = useContext(AuthContext) 
    const handleOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email =user?.email;
        const date = form.date.value;
        const number= form.number.value;
        const booking = {
            CustomerName : name,
            img,
            email,
            date,
            number,
            service:title,
            service_id : _id,
            price:price
        }
        console.log(booking)
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(booking)
        })

        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            alert('successfull')
        })
    }
    return (

       <div className="mb-10 mt-10">
        <h2 className="text-center font-bold text-3xl"> Book Service : {title}</h2>
<form onSubmit={handleOrder}>
    
<div className="flex gap-5 mb-5">
<div className="form-control w-1/2">
<label className="label">
    <span className="label-text">Name</span>
</label>
<label className="">
    <input type="text" name="name" placeholder="Name" className="input input-bordered w-full "/>
</label>
</div>
<div className="form-control w-1/2">
<label className="label">
    <span className="label-text">Date</span>
</label>
<label className="">
    <input type="date" name="date"  className="input input-bordered  w-full" />
</label>
        </div>
    </div>
   
<div className="flex gap-5 ">
<div className="form-control w-1/2 mb-5">
<label className="label">
    <span className="label-text">Email</span>
</label>
<label className="">
    <input type="email" name="email" placeholder="Enter email"  className="input input-bordered w-full "/>
</label>
</div>
<div className="form-control w-1/2">
<label className="label">
    <span className="label-text">Number</span>
</label>
<label className="">
    <input type="number" name="number" placeholder="Enter password" className="input input-bordered  w-full" />
</label>
        </div>
    </div>
   

   
<div className="mb-5 ">
<div className="form-control w-full">
<label className="label">
    <span className="label-text font-bold ">Amount</span>
</label>
<label className="">
    <input type="text" name="amount" placeholder="Enter amount" defaultValue={'$' + price} className="input input-bordered w-full "/>
</label>
</div>

    </div>

    <input type="submit" value="Order Confirm" className="btn btn-block bg-[#FF3811] text-white"/>
</form>
</div>
       
    );
};

export default CheckOut;




