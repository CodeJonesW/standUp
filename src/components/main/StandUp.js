import React from 'react';

function StandUp(props) {
    return (
        <div>
            <ul id="standUp">
                <li> Yesterday: {props.yesterday}</li>
                <li> Today: {props.today}</li>
                <li> Blocker: {props.blocker}</li>
                <button onClick={props.deleteStandUp} className="myDeleteButton"> <span aria-labelledby="jsx-a11y/aria-proptypes" role="img" alt="emoji ">❌</span> </button>
            </ul>
        </div>

    );
  }
export default StandUp;
