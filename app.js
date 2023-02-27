const urlParser = require('./urlparser')

console.log(urlParser('/:version/api/:collection/:id', '/6/api/listings/3?sort=desc&limit=10'));