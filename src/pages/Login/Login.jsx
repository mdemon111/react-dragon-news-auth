import { Link, useLocation, useNavigate } from "react-router-dom";
import Navabar from "../Shared/Navbar/Navabar";
import { useContext } from "react";
import { AuthContect } from "../../provider/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContect);
    const location = useLocation();
    const navaget = useNavigate();
    console.log('location in the login page',location);

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        signIn(email, password)
        .then(res =>{
            console.log(res.user);

            //navegate after login 
            navaget(location?.state ? location.state : '/');
        })
        .catch(err =>{
            console.log(err);
        })

        // const email = e.target.email.value
        // const password = e.target.password.value
    }
    return (
        <div>
            <Navabar></Navabar>
           <div>
           <h2 className="text-3xl my-10 text-center">Login your account</h2>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
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
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center mt-4">Dont’t Have An Account ? <Link to="/register"><span className="text-red-400 font-bold">Register</span></Link></p>
           </div>
        </div>
    );
};

export default Login;