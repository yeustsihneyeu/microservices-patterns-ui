import {createSlice} from "@reduxjs/toolkit";

export const NasaSlice = createSlice({
    name: 'nasa',
    initialState: {
        events: [{name: 'andrei'}]
    },
    reducers: {
        addEvent: (state) => {
            state.events.push({name: 'test'});
        },
        setEvents: (state, action) => {
            state.events = action.payload;
        }
    },
})

export const {
    addEvent,
    setEvents } = NasaSlice.actions;
export default NasaSlice.reducer;