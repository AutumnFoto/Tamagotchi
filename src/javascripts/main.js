import '../styles/main.scss';
import eatQuad from './components/eatQuad';
import playQuad from './components/playQuad';
import fightQuad from './components/fightQuad';

const init = () => {
  eatQuad.eatQuad();
  playQuad.playQuad();
  fightQuad.fightQuad();

  $('#app').html('<h1>HELLO! You are up and running!</h1>');
  console.warn('YOU ARE UP AND RUNNING!');
};

init();
