import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Room() {
    const { roomCode } = useParams();
    const [votesToSkip, setVotesToSkip] = useState(2);
    const [guestCanPause, setGuestCanPause] = useState(false);
    const [isHost, setIsHost] = useState(false);

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

    return (
        <div>
            <h3>Room Code: {roomCode}</h3>
            <p>Votes to Skip: {votesToSkip}</p>
            <p>Guest Can Pause: {guestCanPause.toString()}</p>
            <p>Is Host: {isHost.toString()}</p>
        </div>
    );
}

export default Room;
