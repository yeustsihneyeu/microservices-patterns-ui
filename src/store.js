import { configureStore } from '@reduxjs/toolkit'
import EventReducer from "./features/events/EventSlice";
import NasaReducer from "./features/nasa/NasaSlice";

export default configureStore({
    reducer: {
        event: EventReducer,
        nasa: NasaReducer
    },
})