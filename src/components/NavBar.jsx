import React from 'react';
import NavButtonsLeft from './NavButtonsLeft';
import NavSearch from './NavSearch';
import NavTweet from './NavTweet';

function NavBar(){
    return (
        <div>
            <NavButtonsLeft/>
            <NavSearch/>
            <NavTweet/>
        </div>
    );
}

export default NavBar;
