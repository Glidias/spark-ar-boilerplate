const fs = require("fs");
const path = require('path')

const pathToRW = path.resolve(__dirname, 'scripts/tsconfig.json');
if (fs.existsSync(pathToRW)) {
	let json = fs.readFileSync(pathToRW, {encoding:'utf8'});
	json = JSON.parse(json);
	if (json['include']) {
		delete json['include'];
		json = JSON.stringify(json);
		fs.writeFileSync(pathToRW, json, {encoding:'utf8'});
	}
}