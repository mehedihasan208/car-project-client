import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div>
          <div className="text-center">
            <h3 className="text-[#FF3811] text-2xl">Service</h3>
            <h3 className="text-4xl font-semibold text-white">Our Service Area</h3>
            <p className="text-white font-medium">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div> 
            <div>
                <h3 className="text-blue-600">services : {services.length}</h3>
               <div className="grid md:grid-cols-2 lg:grid-cols-3">
               {
                    services.map(service=><ServicesCard key={service._id} service={service}></ServicesCard>)
                }
               </div>
            </div>
        </div>
    );
};

export default Services;