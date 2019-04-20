/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { render } from 'react-dom';

const Pet = props => React.createElement('div', {}, [
  React.createElement('h1', {}, props.name),
  React.createElement('h2', {}, props.animal),
  React.createElement('h2', {}, props.breed),
]);

class App extends React.Component {
  render() {
    return React.createElement('div', {}, [
      React.createElement(
        'h1',
        {
          onClick: this.handleTitleClick,
        },
        'Adopt Me!',
      ),
      React.createElement(Pet, {
        name: 'Luna',
        animal: 'dog',
        breed: 'Havaneses',
      }),
      React.createElement(Pet, {
        name: 'Pepper',
        animal: 'bird',
        breed: 'Cocktiel',
      }),
      React.createElement(Pet, {
        name: 'Doink',
        animal: 'cat',
        breed: 'Mixed',
      }),
    ]);
  }
}

render(React.createElement(App), document.getElementById('root'));
