import { useDispatch } from 'react-redux';
import src from '../assets/img/appointment.jpg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addAppointment } from '../redux/appointmentSlice';

const Appointment = () => {

    const dispatch = useDispatch();
    const history = useNavigate();

    const [gurdianname,setGurdianname] = useState('');
    const [gurdianemail,setGurdianemail] = useState('');
    const [childname,setChildname] = useState('');
    const [childage,setChildage] = useState('');
    const [message,setMessage] = useState('');

    const handleSubmit =(e) => {
        e.preventDefault();

        const data = {
            gurdianname: gurdianname,
            gurdianemail: gurdianemail,
            childname: childname,
            childage: childage,
            message: message
        }

        dispatch(addAppointment(data));
        history('/');
    }

    return ( 
        <div>

        <div className= "container-xxl py-5">
            <div className= "container">
                <div className= "bg-light rounded">
                    <div className= "row g-0">
                        <div className= "col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className= "h-100 d-flex flex-column justify-content-center p-5">
                                <h1 className= "mb-4">Make Appointment</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className= "row g-3">
                                        <div className= "col-sm-6">
                                            <div className= "form-floating">
                                                <input type="text" 
                                                className= "form-control border-0" 
                                                id="gname" 
                                                placeholder="Gurdian Name"
                                                value={gurdianname}
                                                onChange={(e) => setGurdianname(e.target.value)} />
                                                <label for="gname">Gurdian Name</label>
                                            </div>
                                        </div>
                                        <div className= "col-sm-6">
                                            <div className= "form-floating">
                                                <input 
                                                type="email" 
                                                className= "form-control border-0" 
                                                id="gmail" 
                                                placeholder="Gurdian Email"
                                                value={gurdianemail}
                                                onChange={(e) => setGurdianemail(e.target.value)} />
                                                <label for="gmail">Gurdian Email</label>
                                            </div>
                                        </div>
                                        <div className= "col-sm-6">
                                            <div className= "form-floating">
                                                <input type="text" 
                                                className= "form-control border-0"
                                                 id="cname" 
                                                 placeholder="Child Name"
                                                 value={childname}
                                                 onChange={(e) => setChildname(e.target.value)} />
                                                <label for="cname">Child Name</label>
                                            </div>
                                        </div>
                                        <div className= "col-sm-6">
                                            <div className= "form-floating">
                                                <input type="text" 
                                                className= "form-control border-0" 
                                                id="cage" 
                                                placeholder="Child Age"
                                                value={childage}
                                                onChange={(e) => setChildage(e.target.value)} />
                                                <label for="cage">Child Age</label>
                                            </div>
                                        </div>
                                        <div className= "col-12">
                                            <div className= "form-floating">
                                                <textarea 
                                                className= "form-control border-0" 
                                                placeholder="Leave a message here" 
                                                id="message" 
                                                style={{ height: '100px' }}
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div className= "col-12">
                                            <button className= "btn btn-primary w-100 py-3" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className= "col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: '400px'  }}>
                            <div className= "position-relative h-100">
                                <img className= "position-absolute w-100 h-100 rounded" src={ src } alt="img" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Appointment;