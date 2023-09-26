import src1 from '../../assets/img/classes-1.jpg'
import src3 from '../../assets/img/classes-2.jpg'
import src4 from '../../assets/img/classes-3.jpg'
import src5 from '../../assets/img/classes-4.jpg'
import src6 from '../../assets/img/classes-5.jpg'
import src7 from '../../assets/img/classes-6.jpg'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteClass, getOneClass } from "../../redux/classesSlice";

const SingleClass = () => {
    const { isLoading,classes } = useSelector(state => state.classes)
    const dispatch = useDispatch()
    const { id } = useParams();

    const src = [src1,src3,src4,src5,src6,src7]

    useEffect(() => {
        dispatch(getOneClass(id))
    },[dispatch])
    return ( 
        <div className= "container-xxl py-5">
            <div className= "container">
                <div className= "text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h1 className= "mb-3">School Classes</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className= "row g-4">

                    { isLoading && <div> loading......</div> }
                    
                    
                        <div className= "col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className= "classes-item">
                            <div className= "bg-light rounded-circle w-75 mx-auto p-3">
                                <img className= "img-fluid rounded-circle" src={ src[Math.floor(Math.random() * 6)] } alt="img" />
                            </div>
                            <div className= "bg-light rounded p-4 pt-5 mt-n5">
                                <Link className= "d-block text-center h3 mt-3 mb-4" to="">  { classes.title } </Link>
                                <div className= "d-flex align-items-center justify-content-between mb-4">
                                   { classes.body }
                                </div>
                                <Link to={"/editclass/"+classes.id} >
                                            <button type="button" class="btn btn-primary">
                                                Edit
                                            </button>
                                </Link>
                            <button type="button" class="btn btn-danger"
                            onClick={() => dispatch(deleteClass(classes.id))}>
                                Delete                
                            </button>
                            </div>
                        </div>
                    </div>
             
                </div>
            </div>
        </div>
     );
}
 
export default SingleClass;