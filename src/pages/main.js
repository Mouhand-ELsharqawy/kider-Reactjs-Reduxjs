import { Link } from 'react-router-dom';
// import './App.css';
import usr from '../assets/img/user.jpg'
import abt1 from '../assets/img/about-1.jpg'
import abt2 from '../assets/img/about-2.jpg'
import abt3 from '../assets/img/about-3.jpg'
import cls1 from '../assets/img/classes-1.jpg'
import cls2 from '../assets/img/classes-2.jpg'
import cls3 from '../assets/img/classes-3.jpg'
import cls4 from '../assets/img/classes-4.jpg'
import cls5 from '../assets/img/classes-5.jpg'
import cls6 from '../assets/img/classes-6.jpg'

const Index = () => {
    return ( 
        <div>
            <div className= "container-xxl py-5">
            <div className= "container">
                <div className= "row g-5 align-items-center">
                    <div className= "col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className= "mb-4">Learn More About Our Work And Our Cultural Activities</h1>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p className= "mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.</p>
                        <div className= "row g-4 align-items-center">
                            <div className= "col-sm-6">
                                <Link className= "btn btn-primary rounded-pill py-3 px-5" to="#">Read More</Link>
                            </div>
                            <div className= "col-sm-6">
                                <div className= "d-flex align-items-center">
                                    <img className= "rounded-circle flex-shrink-0" src= { usr } alt="img" style= {{ width: '45px', height: '45px'  }} />
                                    <div className= "ms-3">
                                        <h6 className= "text-primary mb-1">Jhon Doe</h6>
                                        <small>CEO & Founder</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= "col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                        <div className= "row">
                            <div className= "col-12 text-center">
                                <img className= "img-fluid w-75 rounded-circle bg-light p-3" src={ abt1 } alt="img" />
                            </div>
                            <div className= "col-6 text-start" style={{ marginTop: '-150px' }}>
                                <img className= "img-fluid w-100 rounded-circle bg-light p-3" src={ abt2 } alt="img" />
                            </div>
                            <div className= "col-6 text-end" style={{ marginTop: '-150px'  }}>
                                <img className= "img-fluid w-100 rounded-circle bg-light p-3" src={ abt3 } alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div className= "container-xxl py-5">
            <div className= "container">
                <div className= "text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h1 className= "mb-3">School Classes</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className= "row g-4">
                    <div className= "col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className= "classes-item">
                            <div className= "bg-light rounded-circle w-75 mx-auto p-3">
                                <img className= "img-fluid rounded-circle" src={ cls1 } alt="img" />
                            </div>
                            <div className= "bg-light rounded p-4 pt-5 mt-n5">
                                <Link className= "d-block text-center h3 mt-3 mb-4" to="#">Art & Drawing</Link>
                                <div className= "d-flex align-items-center justify-content-between mb-4">
                                    <div className= "d-flex align-items-center">
                                        <img className= "rounded-circle flex-shrink-0" src={ usr } alt="img" style={{ width: '45px', height: '45px' }} />
                                        <div className= "ms-3">
                                            <h6 className= "text-primary mb-1">Jhon Doe</h6>
                                            <small>Teacher</small>
                                        </div>
                                    </div>
                                    <span className= "bg-primary text-white rounded-pill py-2 px-3" to="#">$99</span>
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
                    <div className= "col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className= "classes-item">
                            <div className= "bg-light rounded-circle w-75 mx-auto p-3">
                                <img className= "img-fluid rounded-circle" src={ cls2 } alt="img" />
                            </div>
                            <div className= "bg-light rounded p-4 pt-5 mt-n5">
                                <Link className= "d-block text-center h3 mt-3 mb-4" to="#">Color Management</Link>
                                <div className= "d-flex align-items-center justify-content-between mb-4">
                                    <div className= "d-flex align-items-center">
                                        <img className= "rounded-circle flex-shrink-0" src={ usr } alt="img" style={{ width: '45px', height: '45px' }} />
                                        <div className= "ms-3">
                                            <h6 className= "text-primary mb-1">Jhon Doe</h6>
                                            <small>Teacher</small>
                                        </div>
                                    </div>
                                    <span className= "bg-primary text-white rounded-pill py-2 px-3" to="#">$99</span>
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
                    <div className= "col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className= "classes-item">
                            <div className= "bg-light rounded-circle w-75 mx-auto p-3">
                                <img className= "img-fluid rounded-circle" src={ cls3 } alt="img" />
                            </div>
                            <div className= "bg-light rounded p-4 pt-5 mt-n5">
                                <Link className= "d-block text-center h3 mt-3 mb-4" to="#">Athletic & Dance</Link>
                                <div className= "d-flex align-items-center justify-content-between mb-4">
                                    <div className= "d-flex align-items-center">
                                        <img className= "rounded-circle flex-shrink-0" src= { usr } alt="img" style= {{ width: '45px', height: '45px' }} />
                                        <div className= "ms-3">
                                            <h6 className= "text-primary mb-1">Jhon Doe</h6>
                                            <small>Teacher</small>
                                        </div>
                                    </div>
                                    <span className= "bg-primary text-white rounded-pill py-2 px-3" to="#">$99</span>
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
                    <div className= "col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className= "classes-item">
                            <div className= "bg-light rounded-circle w-75 mx-auto p-3">
                                <img className= "img-fluid rounded-circle" src={ cls4 } alt="img" />
                            </div>
                            <div className= "bg-light rounded p-4 pt-5 mt-n5">
                                <Link className= "d-block text-center h3 mt-3 mb-4" to="#">Language & Speaking</Link>
                                <div className= "d-flex align-items-center justify-content-between mb-4">
                                    <div className= "d-flex align-items-center">
                                        <img className= "rounded-circle flex-shrink-0" src={ usr } alt="img" style={{ width: '45px', height: '45px' }} />
                                        <div className= "ms-3">
                                            <h6 className= "text-primary mb-1">Jhon Doe</h6>
                                            <small>Teacher</small>
                                        </div>
                                    </div>
                                    <span className= "bg-primary text-white rounded-pill py-2 px-3" to="#">$99</span>
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
                    <div className= "col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className= "classes-item">
                            <div className= "bg-light rounded-circle w-75 mx-auto p-3">
                                <img className= "img-fluid rounded-circle" src={ cls5 } alt="img"/>
                            </div>
                            <div className= "bg-light rounded p-4 pt-5 mt-n5">
                                <Link className= "d-block text-center h3 mt-3 mb-4" to="#">Religion & History</Link>
                                <div className= "d-flex align-items-center justify-content-between mb-4">
                                    <div className= "d-flex align-items-center">
                                        <img className= "rounded-circle flex-shrink-0" src={ usr } alt="img" style= {{ width: '45px', height: '45px' }} />
                                        <div className= "ms-3">
                                            <h6 className= "text-primary mb-1">Jhon Doe</h6>
                                            <small>Teacher</small>
                                        </div>
                                    </div>
                                    <span className= "bg-primary text-white rounded-pill py-2 px-3" to="#">$99</span>
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
                    <div className= "col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className= "classes-item">
                            <div className= "bg-light rounded-circle w-75 mx-auto p-3">
                                <img className= "img-fluid rounded-circle" src={ cls6 } alt="img" />
                            </div>
                            <div className= "bg-light rounded p-4 pt-5 mt-n5">
                                <Link className= "d-block text-center h3 mt-3 mb-4" to="#">General Knowledge</Link>
                                <div className= "d-flex align-items-center justify-content-between mb-4">
                                    <div className= "d-flex align-items-center">
                                        <img className= "rounded-circle flex-shrink-0" src={ usr } alt="img" style={{ width: '45px', height: '45px' }} />
                                        <div className= "ms-3">
                                            <h6 className= "text-primary mb-1">Jhon Doe</h6>
                                            <small>Teacher</small>
                                        </div>
                                    </div>
                                    <span className= "bg-primary text-white rounded-pill py-2 px-3" to="#">$99</span>
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
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Index;