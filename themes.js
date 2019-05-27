
import { Fragment } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { MDXProvider } from '@mdx-js/react'
import { condensed } from '@mdx-deck/themes'


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

export const theme = {
  Provider,
  colors: {
    text: '#fff',
    background: 'black',
  }
}
