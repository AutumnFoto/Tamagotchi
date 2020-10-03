import '../styles/main.scss';
import eatQuad from './components/eatQuad';

const init = () => {
  eatQuad.eatQuad();
  $('#app').html('<h1>HELLO! You are up and running!</h1>');
  console.log('YOU ARE UP AND RUNNING!');
};

init();
