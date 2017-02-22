const { parse } = require('url')
const { send } = require('micro')
const writeGood = require('write-good')
const nodehun = require('nodehun')
const spellcheck = require('nodehun-sentences')
const fs = require('fs')
const affbuf = fs.readFileSync('./dictionaries/en_US.aff')
const dictbuf = fs.readFileSync('./dictionaries/en_US.dic')
const dict = new nodehun(affbuf, dictbuf)

module.exports = (req, res) => {
  const { query: { text } } = parse(req.url, true)
  if (!text) return send(res, 401, { message: 'Please supply a text to be linted.' })
  const suggestions = writeGood(text)
  spellcheck(dict, text, (err, typos) => {
    if (err) {
      send(res, 200, {text, suggestions})
    }
    send(res, 200, {text, suggestions, typos})
  })
}
