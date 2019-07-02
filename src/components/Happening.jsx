import React from 'React';
import PropTypes from 'prop-types';

function Happening(props){
    return (
        <div>
            <h4><strong>{props.name}</strong></h4>
            <h4>{props.content}</h4>
            <hr/>
            <h4>{props.footer}</h4>
        </div>
    );
}

Happening.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
    footer: PropTypes.string
};

export default Happening;
