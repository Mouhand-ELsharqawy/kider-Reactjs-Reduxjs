import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFacility } from "../../redux/facilitySlice";
import src from '../../assets/img/appointment.jpg'

const AddFacility = () => {
    const [type,setType] = useState('');
    const [desc,setDesc] = useState('');

    const dispatch = useDispatch();
    const history = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            type: type,
            desc: desc
        }
        dispatch(addFacility(data));
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
                                <h1 className= "mb-4">  Add Facility </h1>
                                <form onSubmit={handleSubmit}>
                                    <div className= "row g-3">
                                        <div className= "col-sm-6">
                                            <div className= "form-floating">
                                                <input type="text" 
                                                className= "form-control border-0" 
                                                id="gname" 
                                                placeholder="Facility Type"
                                                value={type}
                                                onChange={(e) => setType(e.target.value)} />
                                                <label for="gname">Facility Type</label>
                                            </div>
                                        </div>
                                        <div className= "col-12">
                                            <div className= "form-floating">
                                                <textarea 
                                                className= "form-control border-0" 
                                                placeholder="add your description here" 
                                                id="message" 
                                                style={{ height: '100px' }}
                                                value={desc}
                                                onChange={(e) => setDesc(e.target.value)}
                                                ></textarea>
                                                <label for="message"> Description </label>
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
 
export default AddFacility;