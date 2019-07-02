import React from 'react';
import UserProfile from './UserProfile';
import UserOptions from './UserOptions';
import UserBlock from './UserBlock';

function UserInfo(){
    return (
        <div>
          <style jsx>{`
            div {
              border: solid lightgray 2px;
            }
          `}</style>
            <UserBlock/>
          <div id="user-box">
            <UserProfile
                name="Kevin Garvey"/>
            <UserOptions/>
          </div>
      </div>
    );
}

export default UserInfo;
