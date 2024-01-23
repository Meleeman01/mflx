const sass = require('sass');
const fs = require('fs');

const result = sass.compile('scss/mflx.scss');
console.log(typeof result.css);



fs.writeFile("./css/mflx.css", result.css, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 