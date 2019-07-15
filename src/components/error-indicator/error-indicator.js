import React from 'react';

import './error-indicator.css';
import icon from './robot-msg-error.png';

const ErrorIndicator = () => {

 
  return (
    <div className=''>
      <img src={icon} alt='error message' />
      <p className='ml-5'>sorry, I'm so apologise</p>
    </div>
  )
  
};

export default ErrorIndicator;