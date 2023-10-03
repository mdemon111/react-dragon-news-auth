import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, } from 'react-icons/fa';
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
const RightSideNav = () => {
    return (
        <div>
           <div className='p-4 space-y-3 mb-6'>
            <h2 className="text-3xl">Login With </h2>
            <button className='btn btn-outline w-full'>
                <FaGoogle></FaGoogle>
                Login with Google
            </button>
            <button className='btn btn-outline w-full'>
                <FaGithub></FaGithub>
                Login with Github
            </button>
           </div>
           <div className='p-4 mb-4'>
            <h2 className="text-3xl">Find Us On</h2>
            <a className='p-4 flex items-center text-lg border rounded-t-lg' href="">
            <FaFacebook className='mr-3'></FaFacebook>
            <span>Facebook</span>
            </a>
            <a className='p-4 flex items-center text-lg border-x ' href="">
            <FaTwitter className='mr-3'></FaTwitter>
            <span>Twitter</span>
            </a>
            <a className='p-4 flex items-center text-lg border rounded-b-lg' href="">
            <FaInstagram className='mr-3'></FaInstagram>
            <span>Instagram</span>
            </a>
           </div>
           {/**q-zone */}
           <div className='p-4 space-y-3 mb-6'>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
           </div>
           {/**text */}
           <div className='p-8 space-y-3 mb-6 bg-black text-white text-center '>
            <h2 className="text-3xl mt-12">Create an Amazing Newspaper </h2>
            <p className='mb-14'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <button className='btn btn-secondary'>Learn More</button>
            
           </div>
        </div>
    );
};

export default RightSideNav;