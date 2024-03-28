import axios from "axios";
import {setEvents} from "./EventSlice";

const EVENTS_PATH = process.env.BASE_URL + '/events'


export const getAllEvents = () => async (dispatch) => {
    axios
        .get('http://localhost:8080/events/actions')
        .then(({ data }) => {
            dispatch(setEvents(data))
        });
}