import React from 'react';

import './styles.css';

import likeSvg from './assets/like.svg';


export default function Album({ likes, name, description, className }) {
  return (
    <div className={`album ${className || ''}`}>
      <div className='album__head'>
        <div className='album__likes'>
          <div className='album__icon' dangerouslySetInnerHTML={{ __html: likeSvg}} />
          <div className='album__likes-count'>{likes}</div>
        </div>
        <h3 className='album__name'>{name}</h3>
      </div>
      <div className='album__description'>
        {description}
      </div>
    </div>
  )
}