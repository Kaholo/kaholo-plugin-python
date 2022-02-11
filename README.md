# kaholo-plugin-python
Python plugin for Kaholo. This plugin allows you to run Python scripts from the CLI in the Kaholo Agent.

## How To Use
After installing the plugin on the Kaholo server, make sure you have Python installed on your agent. If the CLI command to execute Python in your agent computer is different than ```python```, you can specify it in the Settings.

## Settings:
1. Run Python CLI Command (String) **Optional** - The CLI commnad to execute Python with. The default value is ```py```.

## Method: Run Script
Run a Python script from the specified path through the CLI.

#### Parameters:
1. Path (String) **Required** - The path of the Python script file to run. 
2. Flags (String) **Optional** - Any extra flags to provide to Python when executing the script.
