import React from 'react';
import FriendSuggestion from './FriendSuggestion';

var masterFriendSuggestionList = [
    {
        name: 'Lorem ipsum',
        image: "./user-default",
    },
    {
        name: 'Lorem ipsum',
        image: "./user-default",
    },
    {
        name: 'Lorem ipsum',
        image: "./user-default",
    }
];

function FriendSuggestionList(){
    return (
        <div>
            <h4><strong>Lorem ipsum</strong></h4>
            {masterFriendSuggestionList.map((friendSuggestion, index) =>
                <FriendSuggestion name={friendSuggestion.name}
                    image={friendSuggestion.image}
                    key={index}/>
            )}
        </div>
    );
}

export default FriendSuggestionList;
