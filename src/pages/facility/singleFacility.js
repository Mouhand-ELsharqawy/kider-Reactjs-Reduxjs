import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteFacility, getOneFacility } from "../../redux/facilitySlice";

const SingleFacility = () => {
    const { isLoading, facilities } = useSelector(state => state.facility);
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {

        dispatch(getOneFacility(id));
    }, [dispatch])
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
                    
                        <div className= "col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className= "facility-item">
                            <div className= "facility-icon bg-primary">
                                <span className= "bg-primary"></span>
                                <i className= "fa fa-bus-alt fa-3x text-primary"></i>
                                <span className= "bg-primary"></span>
                            </div>
                            <div className= "facility-text bg-primary">
                                <h3 className= "text-primary mb-3"> { facilities.title } </h3>
                                <p className= "mb-0"> { facilities.body } </p>
                            </div>
                        </div>
                    </div>
                    <Link to={"/editfacility/"+facilities.id}>
                        <button type="button" class="btn btn-primary"> 
                            Edit 
                        </button>
                    </Link>
                    <button type="button" class="btn btn-danger"
                    onClick={() => dispatch(deleteFacility(facilities.id))}>
                        Delete                
                    </button>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default SingleFacility;