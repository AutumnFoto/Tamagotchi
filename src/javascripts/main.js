import '../styles/main.scss';
import eatQuad from './components/eatQuad';
import playQuad from './components/playQuad';

const init = () => {
  eatQuad.eatQuad();
  playQuad.playQuad();
  $('#app').html('<h1>HELLO! You are up and running!</h1>');
  console.warn('YOU ARE UP AND RUNNING!');
};

init();
