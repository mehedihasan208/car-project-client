
import { useContext } from 'react';
import img1 from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';




const Logout = () => {
  const {createUser} = useContext(AuthContext)
    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        console.log(name,email,password)

        createUser(email,password)
        .then(result =>{
          const user = result.user
          console.log(user)
        })
        .catch(error=>console.log(error))

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-1/2 lg:text-left mr-10">
            
            <img src={img1} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-2xl text-center font-bold">Sign UP </h1>
              <form onSubmit={handleSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
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
                <input  className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
              </form>
              <p className='text-center'>Already have an account<Link to="/login" className='text-orange-600 font-bold'> Login </Link> </p>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Logout;