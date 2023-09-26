import { Link } from "react-router-dom";
import src1 from '../assets/img/classes-1.jpg'
import src2 from '../assets/img/user.jpg'
import src3 from '../assets/img/classes-2.jpg'
import src4 from '../assets/img/classes-3.jpg'
import src5 from '../assets/img/classes-4.jpg'
import src6 from '../assets/img/classes-5.jpg'
import src7 from '../assets/img/classes-6.jpg'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getclasses } from "../redux/classesSlice";


const Classes = () => {

    const { isLoading, classes }  = useSelector(state => state.classes);
    const dispatch = useDispatch();
    const src = [src1,src3,src4,src5,src6,src7];
    useEffect(()=>{
        dispatch(getclasses());
    },[dispatch])
    return ( 
        <div>        
        <div className= "container-xxl py-5">
            <div className= "container">
                <div className= "text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h1 className= "mb-3">School Classes</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className= "row g-4">

                    { isLoading && <div> loading......</div> }
                    
                    {  classes && classes.length>0 ? classes.map((clas) => (
                        <div className= "col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s"  key={clas.id}>
                        <div className= "classes-item">
                            <div className= "bg-light rounded-circle w-75 mx-auto p-3">
                                <img className= "img-fluid rounded-circle" src={ src[Math.floor(Math.random() * 6)] } alt="img" />
                            </div>
                            <div className= "bg-light rounded p-4 pt-5 mt-n5">
                                <Link className= "d-block text-center h3 mt-3 mb-4" to="">  { clas.title } </Link>
                                <div className= "d-flex align-items-center justify-content-between mb-4">
                                    <div className= "d-flex align-items-center">
                                        <img className= "rounded-circle flex-shrink-0" src={ src2 } alt="img" style={{ width: '45px', height: '45px' }} />
                                        <div className= "ms-3">
                                            <h6 className= "text-primary mb-1">Jhon Doe</h6>
                                            <small>Teacher</small>
                                        </div>
                                    </div>
                                    <span className= "bg-primary text-white rounded-pill py-2 px-3" to="">$99</span>
                                    <span className= "bg-primary text-white rounded-pill py-2 px-3" to="">
                                        <Link to={"/singleclass/"+clas.id} >
                                            <button type="button" class="btn btn-primary">
                                                go
                                            </button>
                                        </Link>
                                    </span>
                                </div>
                                <div className= "row g-1">
                                    <div className= "col-4">
                                        <div className= "border-top border-3 border-primary pt-2">
                                            <h6 className= "text-primary mb-1">Age:</h6>
                                            <small>3-5 Years</small>
                                        </div>
                                    </div>
                                    <div className= "col-4">
                                        <div className= "border-top border-3 border-success pt-2">
                                            <h6 className= "text-success mb-1">Time:</h6>
                                            <small>9-10 AM</small>
                                        </div>
                                    </div>
                                    <div className= "col-4">
                                        <div className= "border-top border-3 border-warning pt-2">
                                            <h6 className= "text-warning mb-1">Capacity:</h6>
                                            <small>30 Kids</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) ): "Oooops there is no data" }
                    
                    
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Classes;