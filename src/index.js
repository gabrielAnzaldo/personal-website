import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'react js'], ' ');
  element.classList.add('hello');


  return element;
};

document.body.appendChild(component());
