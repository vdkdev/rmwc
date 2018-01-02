process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');
const { exec } = require('child_process');

const processAlFiles = files => {
	files.forEach(f => {
		const out = f.replace('./src/', './');
		const dir = path.dirname(out);
		console.log('Babel:', f, '-> ', out);

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}

		const cmd = `babel ${f} -o ${out}`;
		exec(cmd);
	});
};

glob('./src/**/!(*.story.js|*.spec.js)', {}, function (er, files) {
	files = files.concat('./src/index.js');
	console.log(files);
	processAlFiles(files);
});
