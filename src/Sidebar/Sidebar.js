import * as React from 'react';
import {translate} from 'react-i18next';

const s = require('./Sidebar.css');

const Sidebar = ({ t }) => (
  <div className={s.sidebar}>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
);

export default translate()(Sidebar);
