const { parse } = require('url')
const { send } = require('micro')
const writeGood = require('write-good')

module.exports = (req, res) => {
  const { query: { text } } = parse(req.url, true)
  if (!text) return send(res, 401, { message: 'Please supply a text to be linted.' })
  const suggestions = writeGood(text)
  send(res, 200, {text, suggestions})
}
