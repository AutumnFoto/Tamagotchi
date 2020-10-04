import '../styles/main.scss';
import eatQuad from './components/eatQuad';
import playQuad from './components/playQuad';
import fightQuad from './components/fightQuad';
import sleepQuad from './components/sleepQuad';
import displayQuad from './components/displayQuad';

const init = () => {
  eatQuad.eatQuad();
  playQuad.playQuad();
  fightQuad.fightQuad();
  sleepQuad.sleepQuad();
  displayQuad.displayQuad();
};

init();
