var exec = require('child_process').exec;
var q = require('q');

function runScript(action){
	var deferred = q.defer();
	var execString = action.method.actionString;
	for (var i =0; i< action.method.params.length;i++){
		var param = action.method.params[i].name;
		if (action.params.hasOwnProperty(param)) {
			execString = execString.replace(param, action.params[param]);
		}
		else{
			execString = execString.replace(param, '');
		}
	}
	exec(execString,
		 function(error, stdout, stderr){
			if(error){
				return deferred.reject(stderr);
			}
			return deferred.resolve(stdout);
		 }
	);
	return deferred.promise;
}

module.exports = {
    RUN_SCRIPT: runScript,
};