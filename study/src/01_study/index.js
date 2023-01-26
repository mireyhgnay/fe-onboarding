import "./style.scss";

import Form from './modules/Form';
import Board from './modules/Board';

window.onload = () => { 
  Form.init();
  Board.init();
}