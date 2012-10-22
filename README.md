filepicker-node
===============

A Node.js Filepicker Library

Installation
-------------

``` bash
$ npm install filepicker-node
```

#### Instantiation

``` javascript
var Filepicker = require('filepicker-node');
var filepicker = new Filepicker('YOUR_API_KEY');
```

#### Methods

1. `store`
	* Stores a file into filepicker and passes the url in the response

	``` javascript
	filepicker.store("test", {persist:true}, function(err, url) {
		console.log(url);
	});
	```

2. `read`
	* Reads a file from filepicker and passes the contents in the callback
        * For now uses utf8

	``` javascript
        filepicker.read(url, {}, function(err,data){
          console.log(data);
        });
	```
