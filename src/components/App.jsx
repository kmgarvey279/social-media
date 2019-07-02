import React from 'react';
import Info from './Info';
import HappeningList from './HappeningList';
import UserInfo from './UserInfo';
import NavBar from './NavBar';
import FriendSuggestionList from './FriendSuggestionList';

function App(){
    return (
        <div>
            <NavBar/>
            <UserInfo/>
            <Info/>
            <HappeningList/>
            <FriendSuggestionList/>
        </div>
    );
}

export default App;
