import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCall, getOneCall } from "../../redux/callSlice";
import { Link, useParams } from "react-router-dom";
import src1 from '../../assets/img/team-1.jpg'
import src2 from '../../assets/img/team-2.jpg'
import src3 from '../../assets/img/team-3.jpg'

const SingleTeacher = () => {
    const { isLoading, calls } = useSelector(state => state.calls)
    const dispatch = useDispatch()
    const { id } = useParams()
    const src = [src1,src2,src3]

    useEffect(()=>{
        dispatch(getOneCall(id))
    },[dispatch])
    return ( 
        <div>

        <div className= "container-xxl py-5">
            <div className= "container">
                <div className= "text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h1 className= "mb-3">Popular Teachers</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                        eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className= "row g-4">
                    { isLoading && <div> loading.... </div> }
                        <div className= "col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                        <div className= "team-item position-relative">
                            <img className= "img-fluid rounded-circle w-75" src={ src[Math.floor(Math.random() * 3)] } alt="img" />
                            <div className= "team-text">
                                <h3> { calls.name } </h3>
                                <p>  { calls.name ? calls.company.name :'' } </p>
                                
                                <div className= "d-flex align-items-center">
                                    <Link className= "btn btn-square btn-primary mx-1" to=""><i className= "fab fa-facebook-f"></i></Link>
                                    <Link className= "btn btn-square btn-primary  mx-1" to=""><i className= "fab fa-twitter"></i></Link>
                                    <Link className= "btn btn-square btn-primary  mx-1" to=""><i className= "fab fa-instagram"></i></Link>
                                </div>
                                <Link to={"/editteacher/"+calls.id} >
                                            <button type="button" class="btn btn-primary">
                                                Edit
                                            </button>
                                </Link>
                                <button type="button" class="btn btn-danger"
                                onClick={() => dispatch(deleteCall(calls.id))}>
                                    Delete                
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default SingleTeacher;