
import merge from 'lodash.merge'
import { withTheme } from 'emotion-theming'
import { Prism as Highlighter } from 'react-syntax-highlighter'


const getLanguage = className => {
  const match = /language-(\w*)/.exec(className || 'language-javascript')
  let lang = 'javascript'
  if (match.length > 1) {
    lang = match[1]
  }
  return lang
}

const createCode = ( prism ) => function({ theme, children, highLightLines, ...restProps }) {

  const codeString = children.replace( /^\n|\n$/g, '' );
  const themePrism = prism || theme.prism;
  const style = { ...themePrism.style };

  // 设置语言
  restProps.language = !restProps.language
    ? getLanguage( restProps.className )
    : restProps.language;

  restProps.wrapLines = true;
  restProps.lineProps = ( lineNumber ) => {
    const props = {
      style: {
        display: 'block',
        padding: '0 1em'
      }
    };

    if ( typeof highLightLines === 'string' ) {
      const lines = highLightLines.split( ',' ).map( num => parseInt( num )).filter( n => n );
      if ( lines.length && lines.includes( lineNumber )) {
        Object.assign( props.style, {
          backgroundColor: 'rgb(53, 59, 69)'
        });
      }
    }

    return props;
  }

  if ( restProps.fontSize ) {
    [ 'pre[class*="language-"]', 'code[class*="language-"]' ]
      .map(( key ) => [ key, style[key]]).filter( s => s[1] ).forEach(([ key, styleValue ]) => {
        const tagStyle = { ...styleValue };
        const isNum = /^(0|[^0]\d*)(\.\d*)?$/.test( restProps.fontSize );
        tagStyle.fontSize = `${restProps.fontSize}${isNum ? 'px' : ''}`;
        style[key] = tagStyle;
      });
  }

  return <Highlighter {...themePrism} style={style} {...restProps}>{codeString}</Highlighter>;
}

export const Prism = theme => merge( theme, {
  components: {
    pre: props => props.children,
    code: createCode( theme.prism )
  },
});

export const Code = withTheme( createCode());
