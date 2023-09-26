import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div>
             <nav className= "navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <NavLink to="/" className= "navbar-brand">
                <h1 className= "m-0 text-primary"><i className= "fa fa-book-reader me-3"></i>Kider</h1>
            </NavLink>
            <button type="button" className= "navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className= "navbar-toggler-icon"></span>
            </button>
            <div className= "collapse navbar-collapse" id="navbarCollapse">
                <div className= "navbar-nav mx-auto">
                    <NavLink to="/" className= "nav-item nav-link">Home</NavLink>
                    <NavLink to="/about" className= "nav-item nav-link">About Us</NavLink>
                    <NavLink to="/classes" className= "nav-item nav-link">Classes</NavLink>
                    <div className= "nav-item dropdown">
                        <Link to="#" className= "nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                        <div className= "dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <NavLink to="/facility" className= "dropdown-item">School Facilities</NavLink>
                            <NavLink to="/team" className= "dropdown-item">Popular Teachers</NavLink>
                            <NavLink to="/call" className= "dropdown-item">Become A Teachers</NavLink>
                            <NavLink to="/appointment" className= "dropdown-item">Make Appointment</NavLink>
                            <NavLink to="/testimonial" className= "dropdown-item">Testimonial</NavLink>
                        </div>
                    </div>
                    <NavLink to="/contact" className= "nav-item nav-link">Contact Us</NavLink>
                </div>
                <NavLink to="#" className= "btn btn-primary rounded-pill px-3 d-none d-lg-block">Join Us<i className= "fa fa-arrow-right ms-3"></i></NavLink>
            </div>
        </nav>
        </div>
     );
}
 
export default NavBar;