import logo from '../../../assets/logo.png';
import moment from 'moment';


const Header = () => {
    return (
        <div className=' text-center mt-9 p-4'>
            <img className='mx-auto mb-8' src={logo} alt="" />
            <p className='p-2'>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;