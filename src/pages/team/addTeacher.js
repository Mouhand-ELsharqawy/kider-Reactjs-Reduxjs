import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCall } from "../../redux/callSlice";
import src from '../../assets/img/appointment.jpg'


const AddingTeacher = () => {
    const [firstname,setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [age,setAge] = useState('')
    const [prof,setProf] = useState('')
    const [id,setID] = useState('')
    const [exper,setExper] = useState('')


    const dispatch = useDispatch();
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            firstname: firstname,
            lastname: lastname,
            age: age,
            prof: prof,
            id:id,
            exper: exper
        }
        dispatch(addCall(data));
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
                                <h1 className= "mb-4"> Add Teacher </h1>
                                <form onSubmit={handleSubmit}>
                                    <div className= "row g-3">
                                        <div className= "col-sm-6">
                                            <div className= "form-floating">
                                                <input type="text" 
                                                className= "form-control border-0" 
                                                id="gname" 
                                                placeholder="Teacher FirstName"
                                                value={firstname}
                                                onChange={(e) => setFirstName(e.target.validationMessage)}
                                               />
                                                <label for="gname">Teacher FirstName</label>
                                            </div>
                                        </div>
                                        <div className= "col-sm-6">
                                            <div className= "form-floating">
                                                <input type="text" 
                                                className= "form-control border-0" 
                                                id="gname" 
                                                placeholder="Teacher LastName"
                                                value={lastname}
                                                onChange={(e) => setLastName(e.target.value)}
                                               />
                                                <label for="gname">Teacher LastName</label>
                                            </div>
                                        </div>
                                        <div className= "col-sm-6">
                                            <div className= "form-floating">
                                                <input 
                                                type="text" 
                                                className= "form-control border-0" 
                                                id="gmail"
                                                max="3" 
                                                placeholder="Teacher Age"
                                                value={age}
                                                onChange={(e) => setAge(e.target.value)}
                                                 />
                                                <label for="gmail">Teacher Age</label>
                                            </div>
                                        </div>
                                        <div className= "col-sm-6">
                                            <div className= "form-floating">
                                                <input type="text" 
                                                className= "form-control border-0"
                                                 id="cname" 
                                                 placeholder="Teacher ID"
                                                 value={id}
                                                 onChange={(e) => setID(e.target.value)}
                                                 />
                                                <label for="cname">Teacher ID</label>
                                            </div>
                                        </div>
                                        <div className= "col-sm-6">
                                            <div className= "form-floating">
                                                <input type="text" 
                                                className= "form-control border-0" 
                                                id="cage" 
                                                placeholder="Experience"
                                                value={exper}
                                                onChange={(e) => setExper(e.target.value)}
                                                 />
                                                <label for="cage">Experience</label>
                                            </div>
                                        </div>
                                        <div className= "col-sm-6">
                                            <div className= "form-floating">
                                                <input type="text" 
                                                className= "form-control border-0" 
                                                placeholder="Profession"
                                                value={prof}
                                                onChange={(e) =>setProf(e.target.value)}
                                                 />
                                                <label for="cage"> Profession </label>
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
 
export default AddingTeacher;