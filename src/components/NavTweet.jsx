import React from 'react';

function NavTweet(props){
    return (
        <div>
            <form>
                <input type="search" name="tweet-search" value="Tweet" readOnly />
            </form>
        </div>
    );
}

export default NavTweet;
