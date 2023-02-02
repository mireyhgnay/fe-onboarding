import "./style.scss";

import Form from './modules/Form';
import Drag from "./modules/Drag";

window.onload = () => { 
  Form.init();
  Form.create();
  Drag.init();
}