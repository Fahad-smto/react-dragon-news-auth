 import logo from '../../../src/assets/logo.png'
 import moment from 'moment';

const Header = () => {
    return (
        <div>
             <img src={logo} alt="" />
             <p>Journamism without Fear or Favour</p>
             <p className='text-xl'>{moment().format("dddd, MMMM D ,YYYY")}</p>
        </div>
    );
};

export default Header;