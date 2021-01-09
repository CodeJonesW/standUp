import React from 'react';

function StandUp(props) {
    return (
        <ul id="standUp">
            <li> Yesterday: {props.yesterday}</li>
            <li> Today: {props.today}</li>
            <li> bBlocker: {props.blocker}</li>
        </ul>
    );
  }
export default StandUp;
