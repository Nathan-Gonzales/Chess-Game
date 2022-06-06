import logo from '../images/N.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar bg-black '>
            <div className='nav-filler flex justify-between items-end'>
                <Link className='logo ' to='/'>
                    <img src={logo} alt='Brand' className='w-12 h-12' />
                </Link>
                {
                    <img src='https://thumbs.dreamstime.com/b/chess-word-chess-pieces-cutouts-85849186.jpg' className='h-10'/>
                }
                <Link className='logo ' to='/'>
                    <img src={logo} alt='Brand' className='w-12 h-12' />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar