import React from 'react';

function StandUp(props) {
    return (
        <ul id="standUp">
            <li> yesterday: ${props.yesterday}</li>
            <li> today: ${props.today}</li>
            <li> blocker: ${props.blocker}</li>
        </ul>
    );
  }
export default StandUp;
