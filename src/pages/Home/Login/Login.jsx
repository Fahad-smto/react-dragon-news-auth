import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const Login = () => {

    const {signin}=useContext(AuthContext);

    const location=useLocation();
    console.log( 'location in the login page', location);
       const navigate =useNavigate()
    const handleLogin =e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email=form.get('email')
        const password=form.get('password')
        // console.log(form);
        // console.log(email,password);

        signin(email,password)
        .then(result=>{
            console.log(result.user);
         
            // navigate after login
            navigate(location?.state?location.state :'/')

        })
        .catch(error=>{
            console.error(error)
        })

    }

    return (
        <div>
            <Navbar></Navbar>

            <div>
                <h1 className="text-center text-3xl mt-5">please login</h1>
                <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
              <p className="text-center ">Do not hava an account?<Link className="text-blue-600" to='/register'>register</Link></p>
            </div>

        </div>
    );
};

export default Login;