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

var functions = {
    RUN_SCRIPT: runScript,
};

function main(argv) {
	if (argv.length < 3) {
		console.log('{err: "not enough parameters"}');
		// Invalid Argument
		// Either an unknown option was specified, or an option requiring a value was provided without a value.
		process.exit(9);
	}
	var action = JSON.parse(argv[2]);
	functions[action.method.name](action).then(function(res) {
		console.log(res);
		process.exit(0); // Success
	}, function(err) {
		console.log("an error occured", err);
        // Uncaught Fatal Exception
		// There was an uncaught exception, and it was not handled by a domain or an 'uncaughtException' event handler.
		process.exit(1); // Failure
	});
}

main(process.argv);