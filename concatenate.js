
const fs = require('fs-extra');
const concat = require('concat');

(async function build(){
  
    const files = [
        './dist/web-component-app/runtime.js',
        './dist/web-component-app/polyfills.js',
        './dist/web-component-app/main.js',
    ]
    await fs.ensureDir('elements');
    await concat(files, 'elements/search-movie.js');
    // await fs.copyFile('./dist/ng-web-component/styles.css','elements/styles.css');
})();