import * as React from 'react';

const s = require('./PageView.css');

const PageView = ({ icon, title, link }) => (
  <div>
    <div>{icon}</div>
    <div>{title}</div>
  </div>
);

export default PageView;
