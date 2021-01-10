import React from 'react';

function StandUp(props) {
    return (
        <ul id="standUp">
            <li> Yesterday: {props.yesterday}</li>
            <li> Today: {props.today}</li>
            <li> Blocker: {props.blocker}</li>
            <button id={props.standUpId} data-standupid={props.standUpId} onClick={(e) => props.updateStandUp(e)}   className="myStandUpButton"> <span aria-labelledby="jsx-a11y/aria-proptypes" role="img" alt="emoji "> ✅</span> </button>
            <button id={props.standUpId} onClick={(e) => props.deleteStandUp(e)} className="myStandUpButton"> <span aria-labelledby="jsx-a11y/aria-proptypes" role="img" alt="emoji ">❌</span> </button>
        </ul>
    );
  }
export default StandUp;
