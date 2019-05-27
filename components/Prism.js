
import React, { Fragment, useContext } from 'react';
import { Prism } from 'react-syntax-highlighter'
import { withTheme } from 'emotion-theming'


export default withTheme(({ theme, children, highLightLines, ...restProps }) => {
  const code = children.replace( /^\n|\n$/g, '' );
  if ( Array.isArray( highLightLines )) {
    restProps.wrapLines = true;
    restProps.lineProps = ( lineNumber ) => {
      const props = {
        style: {
          padding: '0 1em'
        }
      };
      if ( highLightLines.includes( lineNumber )) {
        Object.assign( props.style, {
          display: 'block',
          backgroundColor: 'rgb(53, 59, 69)'
        });
      }
      return props;
    }
  }

  const bgStyleKeys = Object.keys( theme.prism.style ).filter(( key ) => {
    return /\[class\*="language-"\]/.test( key );
  });
  bgStyleKeys.forEach(( key ) => {
    const value = theme.prism.style[key];
    if ( value && value.background !== 'none' ) {
      value.background = 'rgb(40, 44, 52)';
    }
    if ( value && value.padding ) {
      value.padding = '1em 0';
    }
  });
  return <Prism {...theme.prism} {...restProps}>{code}</Prism>;
})
