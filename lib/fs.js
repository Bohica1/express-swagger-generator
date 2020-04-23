// Dependencies.
let fs = require('fs');
const { promisify } = require('util');

module.exports = {
	writeFile: promisify(fs.writeFile),
	readFile: promisify(fs.readFile),
	exists: promisify(fs.exists),
	unlink: promisify(fs.unlink)
};
