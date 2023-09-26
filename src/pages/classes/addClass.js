import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addClasses } from "../../redux/classesSlice";
import src from '../../assets/img/appointment.jpg'


const AddingClass = () => {
    const [starttime,setStartTime] = useState('')
    const [endtime,setEndTime] = useState('')
    const [lesson,setLesson] = useState('')
    const [teachername,setTeacherName] = useState('')
    const [students,setStudents] = useState('')

    const dispatch = useDispatch()
    const history = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = {
            starttime:starttime,
            endtime:endtime,
            lesson:lesson,
            teachername:teachername,
            students:students
        }

        dispatch(addClasses(data));
        history('/')
    }
    return ( 
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
                                                placeholder="Start Time"
                                                value={starttime}
                                                onChange={(e) => setStartTime(e.target.value)} />
                                                <label for="gname">Start Time</label>
                                            </div>
                                        </div>
                                        <div className= "col-sm-6">
                                            <div className= "form-floating">
                                                <input type="text" 
                                                className= "form-control border-0" 
                                                id="gname" 
                                                placeholder="End Time"
                                                value={endtime}
                                                onChange={(e) => setEndTime(e.target.value)} />
                                                <label for="gname">End Time</label>
                                            </div>
                                        </div>
                                        <div className= "col-sm-6">
                                            <div className= "form-floating">
                                                <input type="text" 
                                                className= "form-control border-0" 
                                                id="gname" 
                                                placeholder="Lesson"
                                                value={lesson}
                                                onChange={(e) => setLesson(e.target.value)} />
                                                <label for="gname">Lesson</label>
                                            </div>
                                        </div>
                                        <div className= "col-sm-6">
                                            <div className= "form-floating">
                                                <input type="text" 
                                                className= "form-control border-0" 
                                                id="gname" 
                                                placeholder="Teacher Name"
                                                value={teachername}
                                                onChange={(e) => setTeacherName(e.target.value)} />
                                                <label for="gname">Teacher Name</label>
                                            </div>
                                        </div>
                                        <div className= "col-sm-6">
                                            <div className= "form-floating">
                                                <input type="text" 
                                                className= "form-control border-0" 
                                                id="gname" 
                                                placeholder="Students Count"
                                                value={students}
                                                onChange={(e) => setStudents(e.target.value)} />
                                                <label for="gname">Students Count</label>
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
     );
}
 
export default AddingClass;