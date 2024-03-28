import axios from "axios";
import {setEvents} from "./EventSlice";


export const getAllEvents = () => async (dispatch) => {
    axios
        .get('http://localhost:8080/events/actions')
        .then(({ data }) => {
            dispatch(setEvents(data))
        });
};

export const saveEvent = (data) => async (dispatch) => {
    axios
        .post('http://localhost:8080/events/actions', data)
        .catch((err) => console.log(err))
}