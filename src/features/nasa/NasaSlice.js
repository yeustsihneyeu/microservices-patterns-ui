import {createSlice} from "@reduxjs/toolkit";

export const EventSlice = createSlice({
    name: 'event',
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
    setEvents } = EventSlice.actions;
export default EventSlice.reducer;