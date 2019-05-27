
import { Fragment } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { MDXProvider } from '@mdx-js/react'
import { condensed, aspect, syntaxHighlighterPrism } from '@mdx-deck/themes'
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';


const DefaultProvider = props => <Fragment>{props.children}</Fragment>
const Provider = props => {
  const theme = typeof condensed === 'function' ? condensed({}) : condensed
  const Root = theme.Provider || DefaultProvider
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={theme.components}>
        <Root>{props.children}</Root>
      </MDXProvider>
    </ThemeProvider>
  )
}

export const themes = [{
    Provider,
    colors: {
      text: '#f3f3f3',
      background: 'black',
    },
    prism: {
      style: xonokai
    }
  },
  syntaxHighlighterPrism,
  aspect
];
