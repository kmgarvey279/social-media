import React from 'react';
import PropTypes from 'prop-types';

function UserProfile(props){
    return (
        <div>
        <style jsx>{`
            h3 {
              position: relative;
              bottom: 20px;
              left: 60px;
            }
          `}</style>
            <h3>{props.name}</h3>
        </div>
    );
}

UserProfile.propTypes = {
    name: PropTypes.string.isRequired
};

export default UserProfile;
