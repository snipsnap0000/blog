import * as React from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';

const s = require('./Topbar.css');

const Topbar = () => (
  <ContentContainer className={s.topbar}>
    <h1>Blog</h1>
  </ContentContainer>
);

export default Topbar;
