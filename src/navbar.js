import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className='navbar'>
            <h1>Menu</h1>
            <div className= 'links'>
                <Link to='/'>Home </Link>
                <Link to='/allreadings'>All readings</Link>                
                <Link to='/2hours'>Last 2 hours</Link>
                <Link to='/2days'>Last 2 days</Link>
                <Link to='/contact'>Contact</Link>
            </div> 
        </nav>
    );
}
 
export default Navbar;