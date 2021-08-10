import _ from 'lodash';
import './style.css';
import Logo from './pokeLogo.png';

const newElem = (elem) => document.createElement(elem);
const newDiv = () => document.createElement('div');
const grab = (elem) => document.getElementById(elem);

const populate = () => {
  // logo
  const logoDiv = grab('logo-div');
  const logo = new Image();
  logo.id = 'logoImg';
  logo.src = Logo;

  logoDiv.append(logo);

  // nav-list
  const navLi = grab('nav-list');
  navLi.classList.add('list-style');

  const li1 = newElem('li');
  li1.innerText = 'Pokemon';
  li1.classList.add('nav-list-txt');

  const li2 = newElem('li');
  li2.innerText = 'Comments';
  li2.classList.add('nav-list-txt');

  navLi.append(li1, li2);

  // footer

  const foot = grab('foot-anchor');
  foot.classList.add('footer');

  const footLi = newElem('ul');
  footLi.classList.add('flex', 'list-style', 'footerText');

  const fLi1 = newElem('li');
  const footI = newElem('i');
  footI.classList.add('far', 'fa-copyright');

  fLi1.append(footI);

  const fLi2 = newElem('li');
  fLi2.classList.add('m-left-1');
  const footerText = newElem('p');
  footerText.innerText = 'Created by Stephan and Alexander';
  footerText.classList.add('footerText');
  fLi2.append(footerText);

  footLi.append(fLi1, fLi2);
  foot.append(footLi);
};

document.addEventListener('DOMContentLoaded', populate);