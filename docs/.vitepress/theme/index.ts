import DefaultTheme from 'vitepress/theme'
import ExcitedUI from '../../../src/entry'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ExcitedUI)
  },
}