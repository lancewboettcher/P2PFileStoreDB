
var files = [];

module.exports.addFile = function(filename, size, blocks, host) {

	var fileExists = false;

	for (var i = 0; i < files.length; i++) {
		if (files[i].filename == filename) {
			// File already exists in network. Add host 
			fileExists = true;

			files[i].hosts.push(host);

			return files[i];
		}
	}

	if (!fileExists) {
		var file = {};
		file.filename = filename;
		file.size = size;
		file.blocks = blocks;

	    var hosts = [];
	    hosts.push(host);

	    file.hosts = hosts;

	    files.push(file);

	    console.log(file);

	    return file;
	}
};

module.exports.listFiles = function() {

	return files;
};

module.exports.getFile = function(filename) {

	for (var i = 0; i < files.length; i++) {
		if (files[i].filename == filename) {
			
			return files[i];
		}
	}
};

module.exports.removeFile = function(filename, host) {

	for (var i = 0; i < files.length; i++) {
		if (files[i].filename == filename) {
			if (files[i].hosts.length > 1) {
				for (var j = 0; j < files[i].hosts.length; j++) {

					//Remove that host from host list

					if (files[i].hosts[j] == host) {
						files[i].hosts.splice(j, 1);
					}
				}
			}
			else {
				files.splice(i,1);
			}
		}
	}

	console.log(files);
};

module.exports.removeAllFiles = function() {

	files = [];
};