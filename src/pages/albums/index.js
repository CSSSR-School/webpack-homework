import React from 'react';

import Title from '../../components/Title';
import Album from '../../components/Album';

import data from './data';

import './styles.css';


export default function Albums() {
  return (
    <section className='albums'>
      <Title>Albums</Title>
      <div className='albums__list'>
        {data.map(item => (
          <Album
            key={item.name}
            likes={item.likes}
            name={item.name}
            description={item.description}
            className='albums__item'
          />
        ))}
      </div>
    </section>
  )
}