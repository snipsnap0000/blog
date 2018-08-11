import * as React from 'react';
import './ContentContainer.css';
import ClassContainer from '../ClassContainer/ClassContainer';

const s = require('./ContentContainer.css');

const ContentContainer = (props) => (
  <ClassContainer {...props} injectedClassName={s.contentContainer} />
);

export default ContentContainer;
