var API_KEY = '';

var Filepicker = require('../index');
var filepicker = new Filepicker(API_KEY);

filepicker.store('test', {persist:true}, function(err,url){
  console.log(url);
  filepicker.read(url, {}, function(err,txt){
    console.log(txt);
  });
});
