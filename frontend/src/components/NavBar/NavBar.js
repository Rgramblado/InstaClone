import './NavBar.css'
import {Link} from 'react-router-dom'
import { Add, FavoriteBorder, Home, PermIdentity, Search } from '@material-ui/icons'

const NavBar = () => {
    return(
    <footer className="navbar">
        <div>
            <Link to="/">
                <Home style={{ fontSize: 30, fill: 'black' }}/>
            </Link>
        </div>  
        <div>
            <Link to="/search">
                <Search style={{ fontSize: 30, fill: 'black'}}/>
            </Link>
        </div>  
        <div>
            <Link to="/upload">
                <Add style={{ fontSize: 30, fill: 'black' }}/>
            </Link>
        </div>  
        <div>
            <Link to="/activity">
                <FavoriteBorder style={{ fontSize: 30, fill: 'black' }}/>
            </Link>
        </div>  
        <div>
            <Link to="/profile">
                <PermIdentity style={{ fontSize: 30, fill: 'black' }}/>
            </Link>    
        </div>  
    </footer>
    )
}

export default NavBar