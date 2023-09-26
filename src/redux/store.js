import { configureStore } from "@reduxjs/toolkit";
import appointments from "./appointmentSlice";
import calls from "./callSlice";
import classes from "./classesSlice";
import contact from "./contactSlice";
import facility from "./facilitySlice";
import testimonials from "./testimonialSlice";

const store = configureStore({
    reducer:{
        appointments,
        calls,
        classes,
        contact,
        facility,
        testimonials
    }
});

export default store;