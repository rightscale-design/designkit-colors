var csso = require('csso');
var fs = require('fs');

var inputFile = "./dist/designkit-colors.css";
var input = fs.readFileSync(inputFile, 'utf8');
var output = csso.minify(input);
var outputFile = "./dist/designkit-colors.min.css";

// Minify css
fs.writeFile(outputFile, output.css, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("Success!");
});
