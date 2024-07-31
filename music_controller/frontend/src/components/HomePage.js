import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateRoomPage from './CreateRoomPage';
import RoomJoinPage from './RoomJoinPage';
import Room from './Room';

export default function HomePage() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={() => <p>This is the home page</p>} />
                <Route path="/join" component={RoomJoinPage} />
                <Route path="/create" component={CreateRoomPage} />
                <Route path="/room/:roomCode" component={Room} />
            </Switch>
        </Router>
    );
}
