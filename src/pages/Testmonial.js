import { useDispatch, useSelector } from 'react-redux'
import src1 from '../assets/img/testimonial-1.jpg'
import src2 from '../assets/img/testimonial-2.jpg'
import src3 from '../assets/img/testimonial-3.jpg'
import { useEffect } from 'react'
import { getTestimonial } from '../redux/testimonialSlice'

const Testmonial = () => {
    const { isLoading, testimonials } = useSelector(state => state.testimonials)
    const dispatch = useDispatch();
    const src = [src1,src2,src3];
    useEffect(() => {
        dispatch(getTestimonial());
    },[dispatch]) 
    return ( 
        <div>

        <div className= "container-xxl py-5">
            <div className= "container">
                <div className= "text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h1 className= "mb-3">Our Clients Say!</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className= "owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    {  isLoading && <div> loading... </div> }
                    { testimonials && testimonials.length> 0 ? testimonials.map((test) => (
                        <div className= "testimonial-item bg-light rounded p-5" key={test.id}>
                        <p className= "fs-5"> { test.body } </p>
                        <div className= "d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
                            <img className= "img-fluid flex-shrink-0 rounded-circle" alt="img"  src={ src[Math.floor(Math.random() * 3)] } style={{  width: '90px', height: '90px' }} />
                            <div className= "ps-3">
                                <h3 className= "mb-1"> { test.title } </h3>
                                <span>Profession</span>
                            </div>
                            <i className= "fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                        </div>
                    </div>
                    )): "Oooops there is no data" }
                    
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Testmonial;