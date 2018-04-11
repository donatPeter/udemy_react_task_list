import React from 'react';

const validationComponent = (props) => {

  const minLength = 5;
  const outputString = props.length >= minLength ? 'Text long enough' : 'Text too short';

  return (
    <div>
      <p>{outputString}</p>
    </div>
  )
}

export default validationComponent;