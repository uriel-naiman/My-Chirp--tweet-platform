import { Link } from 'react-router-dom';

function NavBar(props) {
    return(
        <div className="d-flex w-75 pt-2 mx-auto align-items-center"
            style={{backgroundColor: "#343A40", height: '65px'}}>
            <Link className="ms-5" to="/"
                style={{color: "white", textDecoration: "none"}}>Home</Link>
            <Link className="ms-5" to="/profile"
                style={{color: "white", textDecoration: "none"}}>Profile</Link>
        </div>
    );
}

export default NavBar;