import React from "react"

import * as Yup from "yup"
import {
    Grid,
    TextField,
} from "@mui/material";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {saveEvent} from "./EventRepository";


const EventForm = () => {
    const {
        register,
        handleSubmit,
    } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(saveEvent(data));
    }

    return (
        <Grid container justify="center" spacing={1} sx={{mt: 1}}>
            <Grid item md={12}>
                <form id="event-form" onSubmit={handleSubmit(onSubmit)}>
                    <Grid item container spacing={1}>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                name="name"
                                {...register("name")}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default EventForm
