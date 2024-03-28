import * as React from 'react';
import { Link } from "react-router-dom";

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {styled} from "@mui/material/styles";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: unset;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const items = [
    {
        title: 'Dashboard',
        to: '/',
        icon: <DashboardIcon/>
    },
    {
        title: 'Event Sourcing',
        to: 'events',
        icon: <EventAvailableIcon/>
    },
    {
        title: 'NASA',
        to: '/nasa',
        icon: <StarBorderIcon/>
    },
]

export const mainListItems = (
    <React.Fragment>
        {
            items.map(it => {
                return (
                    <StyledLink key={it.to} to={it.to}>
                        <ListItemButton>
                            <ListItemIcon>
                                {it.icon}
                            </ListItemIcon>
                            <ListItemText primary={it.title}/>
                        </ListItemButton>
                    </StyledLink>
                );
            })
        }
    </React.Fragment>
);
