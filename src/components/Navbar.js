import logo from '../images/N.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar bg-slate-500 '>
            <div className='nav-filler flex items-start relative'>
                <Link className='logo ' to='/'>
                    <img src={logo} alt='Brand' className='w-12 h-12' />
                </Link>
                <h1 className='m-auto text-4xl text-center'>Chess</h1>
            </div>
        </nav>
    );
}

export default Navbar