import React from 'react';
import PropTypes from 'prop-types';

function FriendSuggestion(props){
    return (
        <div>
            <h4><strong>{props.name}</strong></h4>
            <button type="button">Button</button>
        </div>
    );
}

FriendSuggestion.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default FriendSuggestion;
