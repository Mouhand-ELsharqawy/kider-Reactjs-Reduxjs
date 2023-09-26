import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getfacilities } from "../redux/facilitySlice";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Facility = () => {
    const { isLoading, facilities } = useSelector(state => state.facility);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getfacilities());
    },[dispatch]);
    return ( 
        <div>

        <div className= "container-xxl py-5">
            <div className= "container">
                <div className= "text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maWidth: '600px' }}>
                    <h1 className= "mb-3">School Facilities</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className= "row g-4">
                    { isLoading && <div> loading.... </div> }
                    {  facilities && facilities.length> 0? facilities.map((fac) => (
                        <div className= "col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" key={fac.id}>
                        <div className= "facility-item">
                            <div className= "facility-icon bg-primary">
                                <span className= "bg-primary"></span>
                                <i className= "fa fa-bus-alt fa-3x text-primary"></i>
                                <span className= "bg-primary"></span>
                            </div>
                            <div className= "facility-text bg-primary">
                                {/* <Link to={"/onefacility/"+fac.id}> */}
                                <h3 className= "text-primary mb-3"> { fac.title } </h3>
                                {/* </Link> */}
                                <p className= "mb-0"> { fac.body } </p>
                            </div>
                            <Link to={"/singlefacility/"+fac.id} >
                                            <button type="button" class="btn btn-primary">
                                                go
                                            </button>
                                        </Link>
                        </div>
                    </div>
                    )): "Oooops there is no data yet" }
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Facility;