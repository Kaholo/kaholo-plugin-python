# kaholo-plugin-python
Python plugin for Kaholo. Run Python scripts from the cli in the kaholo agent.

## How To Use
After installing the plugin on the Kaholo server make sure you have python installed on ypur agent. If the cli command to execute python in your agent computer is different than "python", you can specify it in the settings.

## Settings:
1. Run Python CLI Command (String) **Optional** - The cli commnad to execute python with. The default is "py".

## Method: Run Script
Run a python script from the specified path through the cli.

#### Parameters:
1. Path (String) **Required** - The path of the python script file to run. 
2. Flags (String) **Optional** - Any extra flags to provide to python when executong the script.
