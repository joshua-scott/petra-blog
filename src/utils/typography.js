import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

const fontFamily = ['Raleway', 'sans-serif']

const colors = {
  black: '#3f3637',
  white: '#fffcfc',
  green: '#08937a',
  blue: '#086375',
  blueAlt: '#0079a5',
  red: '#db5461',
  salmon: '#d36c61',
  peach: '#ffd9ce'
}

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    h1: {
      fontFamily: fontFamily.join(','),
    },
    a: {
      color: colors.blueAlt
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography({
  ...Wordpress2016,
  headerFontFamily: fontFamily,
  headerWeight: 800,
  bodyFontFamily: fontFamily,
  bodyColor: colors.black,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
export { colors }
