import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllEvents} from "./EventRepository";
import DataTable from "../../components/DataTable";
import EDialog from "../../components/Dialog";
import {Button, Grid} from "@mui/material";
import EventForm from "./EventForm";

const columns = [
    { field: 'id', headerName: 'ID', width: 350 },
    { field: 'name', headerName: 'Name', width: 150 },
];

export const Event = () => {
    const events = useSelector((state) => state.event.events);
    const dispatch = useDispatch();
    const [openForm, setOpenForm] = useState(false);

    useEffect(() => {
        dispatch(getAllEvents());
    }, [dispatch]);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button
                        onClick={() => setOpenForm(true)}
                        variant="outlined">Add event</Button>
                </Grid>
                <Grid item xs={12}>
                    <DataTable
                        columns={columns}
                        rows={events}
                    />
                </Grid>
            </Grid>
            <EDialog
                open={openForm}
                setOpen={(val) => setOpenForm(val)}
                submitId={"event-form"}
                content={<EventForm />}
            />
        </div>
    );
}