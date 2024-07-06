import {  FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
             <div className='p-4 space-y-3 mb-3'>
                <h2 className="text-3xl">Login with</h2>
                <button className="btn btn-outline w-full"> 
                    <FaGoogle></FaGoogle>
                    Login with google
                </button>
                <button className="btn btn-outline w-full"> 
                     <FaGithub></FaGithub>
                    Login with github
                </button>
             </div>
             <div className='p-4   mb-3'>
                 <h2 className='  mb-2 text-3xl'>Find Us on</h2>
                 <a className='p-4 flex text-lg items-center rounded-t-lg border' href="">
                    <FaFacebook></FaFacebook>
                    Facebook
                 </a>
                 <a className='p-4 flex text-lg items-center    border-x' href="">
                     <FaTwitter></FaTwitter>
                  Twitter
                 </a>
                 <a className='p-4 flex text-lg items-center   border rounded-b-lg' href="">
                    <FaInstagram></FaInstagram>
                     Inatagram
                 </a>
             </div>

             <div className='p-4 space-y-3 mb-3'>
                <h2 className="text-3xl">Login with</h2>
               <img src={qZone1} alt="" />
               <img src={qZone2} alt="" />
               <img src={qZone3} alt="" />
             </div>
        </div>
    );
};
 
export default RightSideNav;