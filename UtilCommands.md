# install
# by default node´s installation is local
npm install <Module Name>
npm install express
var express = require('express');

# installation global
npm install express -g

# package.json
present in the root directory of any Node "application/module"

# attributes of package.json
name − name of the package
version − version of the package
description − description of the package
homepage − homepage of the package
author − author of the package
contributors − name of the contributors to the package
dependencies − list of dependencies. NPM automatically installs all the dependencies mentioned here in the node_module folder of the package.
repository − repository type and URL of the package
main − entry point of the package
keywords − keywords

# uninstall module
npm uninstall express

# updating a module
npm update express

# search a module
npm search express

# create a module
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sane defaults.

See 'npm help json' for definitive documentation on these fields
and exactly what they do.

Use 'npm install <pkg> --save' afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (webmaster)

You will need to provide all the required information about your module. You can take help from the above-mentioned package.json file to understand the meanings of various information demanded. Once package.json is generated, use the following command to register yourself with NPM repository site using a valid email address.

$ npm adduser
Username: mcmohd
Password:
Email: (this IS public) mcmohd@gmail.com
It is time now to publish your module −

# publish a module
$ npm publish
If everything is fine with your module, then it will be published in the repository and will be accessible to install using NPM like any other Node.js module.
