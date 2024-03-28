import axios from "axios";
import {setEvents} from "./NasaSlice";

const EVENTS_PATH = process.env.BASE_URL + '/events'


export const getAllEvents = () => async (dispatch) => {
    axios
        .get('http://localhost:8080/nasa/actions')
        .then(({ data }) => {
            dispatch(setEvents(data))
        });
}