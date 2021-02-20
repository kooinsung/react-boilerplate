const debug = process.env.NODE_ENV !== 'production'
const REPO = 'react-boilerplate'

module.exports = {
  assetPrefix: !debug ? `/${REPO}/` : '',
}
