import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';

function Room() {
    const { roomCode } = useParams();
    const [votesToSkip, setVotesToSkip] = useState(2);
    const [guestCanPause, setGuestCanPause] = useState(false);
    const [isHost, setIsHost] = useState(false);
    const history = useHistory();

    useEffect(() => {
        console.log('Room component rendered');
        console.log('Room Code:', roomCode);
        getRoomDetails();
    }, [roomCode]);

    const getRoomDetails = () => {
        fetch('/api/get-room?code=' + roomCode)
            .then((response) => response.json())
            .then((data) => {
                setVotesToSkip(data.votes_to_skip);
                setGuestCanPause(data.guest_can_pause);
                setIsHost(data.is_host);
            });
    };

    const leaveButtonPressed = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('/api/leave-room', requestOptions).then((_response) => {
            history.push('/');
        });
    };

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align='center'>
                <Typography variant='h4' component='h4'>Code: {roomCode}</Typography>
            </Grid>

            <Grid item xs={12} align='center'>
                <Typography variant='h6' component='h6'>Votes: {votesToSkip}</Typography>
            </Grid>

            <Grid item xs={12} align='center'>
                <Typography variant='h6' component='h6'>Guest Can Pause: {guestCanPause.toString()}</Typography>
            </Grid>

            <Grid item xs={12} align='center'>
                <Typography variant='h6' component='h6'>Is Host: {isHost.toString()}</Typography>
            </Grid>

            <Grid item xs={12} align='center'>
                <Button color='secondary' variant='contained' onClick={leaveButtonPressed}>Leave Room</Button>
            </Grid>
        </Grid>
    );
}

export default Room;
