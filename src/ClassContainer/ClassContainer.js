import * as React from 'react';
import classNames from 'classnames';

const ClassContainer = ({ className, injectedClassName, ...rest }) => (
  <div {...rest} className={classNames(className, injectedClassName)} />
);

export default ClassContainer;
