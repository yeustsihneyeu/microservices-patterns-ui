import {createSlice} from "@reduxjs/toolkit";

export const EventSlice = createSlice({
    name: 'event',
    initialState: {
        events: []
    },
    reducers: {
        setEvents: (state, action) => {
            state.events = action.payload;
        }
    },
})

export const {
    setEvents } = EventSlice.actions;
export default EventSlice.reducer;