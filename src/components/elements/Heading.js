import { Heading as HeadingBase } from 'rebass'
import { responsiveStyle } from 'styled-system'

const lineHeight = responsiveStyle({
  prop: 'lineHeight',
  cssProperty: 'lineHeight',
  key: 'lineHeights'
})

const Heading = HeadingBase.extend`
  ${lineHeight};
  max-width: ${props => props.maxWidth};
`

HeadingBase.defaultProps = {
  fontWeight: 'bold',
  blacklist: [...Object.keys(Heading.propTypes), 'maxWidth', 'lineHeight']
}

export default Heading
