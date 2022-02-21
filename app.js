const childProcess = require('child_process');

async function runScript(action, settings){
	const path = (action.params.PATH || "").trim();
	if (!path){
		throw "Script Path was not provided!";
	}
	const flags = (action.params.FLAGS || "").trim();
	const cmd = (settings.pythonCmd || "python").trim(); // default command is py
	const args = [path, flags];
	return new Promise((resolve, reject) => {
		childProcess.execFile(cmd, args, function(error, stdout, stderr){
		   if (error){
			   return reject(error);
		   }
		   if (stderr){
			   console.log(stderr);
		   }
		   return resolve(stdout);
		});
	});
}

module.exports = {
    RUN_SCRIPT: runScript,
};