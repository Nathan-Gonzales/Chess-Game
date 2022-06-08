import logo from '../images/N.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar bg-black flex items-center'>
            <div className='nav-wrapper w-full'>
                <div className='nav-filler flex justify-between items-end'>
                    <Link className='logo ' to='/'>
                        <img src={logo} alt='Brand' className='w-12 h-12' />
                    </Link>
                    {
                        <h1 className='text-white text-4xl overline '>CHESS</h1>
                    }
                    <Link className='logo ' to='/'>
                        <img src={logo} alt='Brand' className='w-12 h-12' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar