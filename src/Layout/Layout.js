import * as React from 'react';
import './Layout.css';

const s = require('./Layout.css');

const Layout = ({ topbar, sidebar, footer, content }) => (
  <div className={s.container}>
    {topbar}
    <div className={s.middle}>
      {sidebar}
      {content}
    </div>
    {footer}
  </div>
);

export default Layout;
