import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAppointment, getAppointment } from "../../redux/appointmentSlice";

const AllAppointment = () => {
    const { isLoading, appoints } = useSelector(state => state.appointments)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAppointment())
    },[dispatch])
    return ( 
        <div className= "container-xxl py-5">
            <div className= "container">
                <div className= "text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h1 className= "mb-3">Our appointments</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className= "owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    {  isLoading && <div> loading... </div> }
                        <div className= "testimonial-item bg-light rounded p-5">
                        <p className= "fs-5"> { appoints.gurdianemail } </p>
                        <div className= "d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
                            <div className= "ps-3">
                                <h3 className= "mb-1"> { appoints.gurdianname } </h3>
                                <span>  { appoints.childname }  </span>
                            </div>
                            <i className= "fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                        </div>
                        
                        <button type="button" 
                        class="btn btn-danger"
                        onClick={() => dispatch(deleteAppointment(appoints.id))} >
                            Delete
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default AllAppointment;