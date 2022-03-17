import logo from './img/logo.png'
const Navbar = (props) => {
    return ( 
        <nav className = 'nav-container'>
            
            <div className= 'nav-left'>
                <img src={logo} alt='giphy logo'/>
            </div>
            <div className = 'nav-right'>
                <input
                type= 'text'
                value = {props.searchQry}
                onChange = {props.handleSearch}
                placeholder = 'Search for gifs'/>
                <button type='submit' className='btn-submit' onClick={props.handleSubmit}>Go</button>
            </div>
        </nav>
     );
}
 
export default Navbar;