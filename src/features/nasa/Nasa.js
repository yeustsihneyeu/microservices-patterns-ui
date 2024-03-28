import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import {addEvent} from "./NasaSlice";
import {useEffect} from "react";
import {getAllEvents} from "./NasaRepository";

export const Nasa = () => {
    const events = useSelector((state) => state.event.events);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllEvents());
    }, [dispatch]);

    return (
        <div>
            <div>
                {
                    !!events && events.map(el => <h1 key={el.name}>{el.name}</h1>)
                }
            </div>
            <div>
                <Button
                    variant="text"
                    onClick={() => dispatch(addEvent())}
                >
                    Text
                </Button>
            </div>
        </div>
    );
}