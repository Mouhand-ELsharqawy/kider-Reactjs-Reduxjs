import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js";
import NavBar from './components/NavBarComponent';
import Carousel from './components/CarouselComponent';
import Footer from './components/FooterComponent'
import About from './pages/AboutPage';
import Appointment from './pages/Appointment';
import Call from './pages/call';
import Classes from './pages/classes';
import Contact from './pages/contact';
import Facility from './pages/facility';
import Team from './pages/team';
import Testmonial from './pages/Testmonial';
import NotFound from './pages/404';
import Index from './pages/main';
import EditClass from './pages/classes/updateClass';
import EditFacility from './pages/facility/updateFacility';
import EditTeacher from './pages/team/updateTeacher';
import AddingClass from './pages/classes/addClass';
import AddFacility from './pages/facility/addFacility';
import AddingTeacher from './pages/team/addTeacher';
import SingleClass from './pages/classes/singleClass';
import SingleTeacher from './pages/team/singleTeatcher';
import SingleFacility from './pages/facility/singleFacility';
import AllAppointment from './pages/appointment/allAppointment';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <NavBar />
        <Carousel />
            <Routes>
                <Route
                path="/"
                element= { <Index /> }/>
                <Route
                path='/about'
                element= { <About /> } />
                <Route
                path='/appointment'
                element= { <Appointment /> } />
                <Route
                path='/call'
                element= { <Call /> } />
                <Route
                path='/classes'
                element= { <Classes /> } />
                <Route 
                path='/contact'
                element= { <Contact /> } />
                <Route
                path='/facility'
                element= { <Facility /> } />
                <Route
                path='/team'
                element= { <Team /> } />
                <Route
                path='/testimonial'
                element = { <Testmonial /> } />
                <Route
                path='/*'
                element= { <NotFound /> } />
                <Route
                path='/editclass/:id'
                element= { <EditClass /> } />
                <Route
                path='/editfacility/:id'
                element= { <EditFacility /> } />
                <Route
                path='/editteacher/:id'
                element= { <EditTeacher /> } />
                <Route
                path='/addclass'
                element= { <AddingClass /> } /> 
                <Route
                path='/addfacility'
                element= { <AddFacility /> } />
                <Route
                path='/addteacher'
                element= { <AddingTeacher /> } />
                <Route
                path='/singleclass/:id'
                element= { <SingleClass /> } />
                <Route
                path='/singleteacher/:id'
                element= { <SingleTeacher /> } />
                <Route
                path='/singlefacility/:id'
                element= { <SingleFacility /> } />
                <Route
                path='/allappointment'
                element= { <AllAppointment /> } />
            </Routes>
        <Footer />
    </BrowserRouter>
    
    </div>
  );
}

export default App;
