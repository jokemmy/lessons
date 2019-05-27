
import React, { Fragment, useContext } from 'react';
import { Prism } from 'react-syntax-highlighter'
import { withTheme } from 'emotion-theming'


export default withTheme(({ theme, children, ...props }) => {
  const code = children.replace( /^\n|\n$/, '' );
  return <Prism {...theme.prism} {...props}>{code}</Prism>;
})
