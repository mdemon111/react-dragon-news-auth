import { Link } from "react-router-dom";
import Navabar from "../Shared/Navbar/Navabar";
import { useContext } from "react";
import { AuthContect } from "../../provider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContect);


    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, photo, email, password);
        // console.log(form.get('email'));

        //create user
        createUser(email, password)
        .then(res =>{
            console.log(res.user);
        })
        .catch(err =>{
            console.log(err);
        })
    }
    return (
        <div>
            <Navabar></Navabar>
            <div>
                <h2 className="text-3xl my-10 text-center">Register your account</h2>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Register your account? <Link to="/login"><span className="text-red-400 font-bold">Login</span></Link></p>
            </div>
        </div>
    );
};

export default Register;