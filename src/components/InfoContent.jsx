import React from 'react';
import PropTypes from 'prop-types';

function InfoContent(props){
    return (
        <div>
            <p>{props.content}</p>
            <hr/>
        </div>
    );
}

InfoContent.propTypes = {
    content: PropTypes.string.isRequired
};

export default InfoContent;
