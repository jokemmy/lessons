
import aspect from '@mdx-deck/themes/aspect'
import condensed from '@mdx-deck/themes/condensed'
import syntaxHighlighterPrism from '@mdx-deck/themes/syntax-highlighter-prism'
import { slides as Lessons_1_2 } from '1.Beginner/1.2.mdx'
import { theme } from './themes'

export const themes = [
  syntaxHighlighterPrism,
  aspect,
  theme
];

export const slides = [
  ...Lessons_1_2
]
