import React from 'react';

import Title from '../../components/Title';
import Tag from '../../components/Tag';


import './styles.css';

const tags = [
  'me',
  'nophotoshop',
  'animals',
  'dog',
  'friends',
  'dream',
  'best',
  'life',
  'women',
  'bestmomentsoflife',
  'workinghard',
];

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Tags() {
  return (
    <section className='tags'>
      <Title>Tags</Title>
      <div className='tags__list'>
        {tags.map(tag => (
          <Tag
            key={tag}
            className='tags__item'
            name={tag}
            label={`#${capitalize(tag)}`}
          />
        ))}
      </div>
    </section>
  )
}