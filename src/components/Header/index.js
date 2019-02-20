import React from 'react';
import { NavLink as Link } from "react-router-dom";

import Content from '../Content'

import logoSvg from './assets/logo.svg';
import albumsSvg from './assets/albums.svg';
import tagsSvg from './assets/tags.svg';
import addSvg from './assets/add.svg';

import './styles.css';

export default function Header() {
  return (
    <header className='header'>
      <Content>
        <nav className='header__nav'>
          <div className='header__section'>
            <Link to='/' className='header__link header__link_logo'>
              <span className='header__icon' dangerouslySetInnerHTML={{ __html: logoSvg }} />
              FakeGramm
            </Link>
            <Link to='/' className='header__link' activeClassName='header__link_active'>
              <span className='header__icon' dangerouslySetInnerHTML={{ __html: albumsSvg }} />
              Albums
            </Link>
            <Link to='/tags' className='header__link' activeClassName='header__link_active'>
              <span className='header__icon' dangerouslySetInnerHTML={{ __html: tagsSvg }} />
              Tags
            </Link>
            <Link to='/add' className='header__link' activeClassName='header__link_active'>
              <span className='header__icon' dangerouslySetInnerHTML={{ __html: addSvg }} />
              Add
            </Link>
          </div>
        </nav>
      </Content>
    </header>
  )
}