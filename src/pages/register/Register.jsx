import { Link } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

 

const Register = () => {

    const {createUser}=useContext(AuthContext);

    const handleRegister =e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name,photo,email,password);
  
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div>
        <Navbar></Navbar>

        <div>
            <h1 className="text-center text-3xl mt-5">please Register</h1>
            <form onSubmit={ handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder=" Your name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" placeholder="Photo url" name="photo" className="input input-bordered" required />
                </div>
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
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
          <p className="text-center "> Already have an account?<Link className="text-blue-600" to='/login'>Login</Link></p>
        </div>

    </div>
    );
};

export default Register;