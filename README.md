# notysh
Node Typescript Shell

This is a project used to write a typescript file that you can use as standalone or in your projects.
You can use simple js, or simple ts or oop ts in your script.
For example bash scripts are great, but for example it's not easy to manipulate strings or JSON files just using bash.
Notysh allows you to use the power of js/ts in your bash scripts. 
At least, this is the main idea behind notysh.
Please notice that it's in early state.

# Features
- notysh gives you all common instruments to a simple nodejs project with support to typescript, tests, coverage ecc
- notysh parses cmd args for you and provide them to you as objects
- you can use it in your bash scripts

# Whren you should not use notysh
If you are highly skilled with bash scripting, 
and you have to perform simple operations, copying / moving / creating files, notysh is overkill.


# When you should use notysh
- If you are writing complex bash scripts, and you have to manipulate files content (parsing, generating files from a template, replacing strings, ...)
- If you have to easly and quickly read JSON files (such as a configuration, the output of other scripts, ...)
- You need the power of a powerful language in your bash scripts
- If you need to perform complex operations

# How to use
You can us notysh as standalone script or use it in your projects.

# standalone
- clone this repository
- change project name in package.json
- create your script inside the project with your favorite editor
- test, if you need it, but it's strongly raccomanded
- build
- use built js file like : node my-js-script.js -n param0 -b -tyl
