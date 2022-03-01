const Navbar = () => {
    return (  
        <nav className='navbar'>
            <h1>Index</h1>
            <div className= 'links'>
                <a href='/'>Home </a>
                <a href='/all readings' style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>All readings</a>
            </div> 
        </nav>
    );
}
 
export default Navbar;