// build.js
var _ = require('lodash')
var fs = require('fs')
var parseColors = require('./lib/parse-colors')

var css = fs.readFileSync('./css/designkit-colors.css', 'utf8')
// Read the template string
var template = fs.readFileSync('template.html', 'utf8')
// Create a lodash template function
var tpl = _.template(template)
var colors = parseColors(css)

// Render the template function to an HTML string
var html = tpl({ colors: colors })

// Write an HTML file to disk
fs.writeFileSync('index.html', html)
