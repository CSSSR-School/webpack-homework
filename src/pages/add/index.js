import React from 'react';

import Title from '../../components/Title';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';


import './styles.css';

export default class Add extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: ''
    };

    this.onFieldChange = this.onFieldChange.bind(this);
  }

  render() {
    const { name, description } = this.state;

    return (
      <section className='add'>
        <Title>Add album</Title>
        <form className='add__form'>
          <Input
            className='add__name'
            label='Album name'
            name='name'
            value={name}
            onChange={this.onFieldChange}
          />
          <Textarea
            className='add__description'
            label='Album description'
            name='description'
            value={description}
            onChange={this.onFieldChange}
          />
          <button type='button' className='add__button'>
            Add
          </button>
        </form>
      </section>
    );
  }

  onFieldChange(name, value) {
    this.setState({
      [name]: value
    });
  }
}