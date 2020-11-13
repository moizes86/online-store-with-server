import React from 'react';
import './button.styles.scss';

import {withRouter} from 'react-router-dom';

const Button = ({text, url, history}) => (
    <button className='my-button cta' onClick={()=> history.push(url)}>
    <span>{text}</span>
    <svg width="13px" height="10px" viewBox="0 0 13 10">
      <path d="M1,5 L11,5"></path>
      <polyline points="8 1 12 5 8 9"></polyline>
    </svg>
  </button>
);

export default withRouter(Button);