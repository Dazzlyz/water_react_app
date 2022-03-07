import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className='navbar'>
            <h1>Index</h1>
            <div className= 'links'>
                <Link to='/'>Home </Link>
                <Link to='/allreadings'>All readings</Link>
                <Link to='/contact'>Contact</Link>
            </div> 
        </nav>
    );
}
 
export default Navbar;