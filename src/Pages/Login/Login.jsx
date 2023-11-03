import React, { useContext } from 'react';
import img1 from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// import axios from 'axios';

const Login = () => {

const {signIn} = useContext(AuthContext)
const location = useLocation();
const navigate = useNavigate();

    const hendleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        signIn(email,password)
        .then(result =>{
          const user = result.user
          console.log(user)
        //   const user = {email}
        // axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
        // .then(res => {
        //   console.log(res.data)
        //   if(res.data.success){
        //     navigate(location ?. state ? location?.state : '/')
        //   }
        // })
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-1/2 lg:text-left mr-10">
            
            <img src={img1} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-2xl text-center font-bold">Login </h1>
              <form onSubmit={hendleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input  className="btn btn-primary" type="submit" value="Login" />
              </div>
              </form>
              <p className='text-center'>New to car Doctor? <Link to="/signup" className='text-orange-600 font-bold'>SignUp</Link> </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;