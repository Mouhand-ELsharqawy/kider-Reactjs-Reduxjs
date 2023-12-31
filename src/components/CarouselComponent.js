import { Link } from "react-router-dom";
import src1 from '../assets/img/carousel-1.jpg'

const Carousel = () => {
    return ( 
        <div className= "container-fluid p-0 mb-5">
            <div className= "owl-carousel header-carousel position-relative">
                <div className= "owl-carousel-item position-relative">
                    <img className= "img-fluid" src={ src1 } alt="img" />
                    <div className= "position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, .2)' }}>
                        <div className= "container">
                            <div className= "row justify-content-start">
                                <div className= "col-10 col-lg-8">
                                    <h1 className= "display-2 text-white animated slideInDown mb-4">The Best Kindergarten School For Your Child</h1>
                                    <p className= "fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <Link to="#" className= "btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</Link>
                                    <Link to="#" className= "btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default Carousel;