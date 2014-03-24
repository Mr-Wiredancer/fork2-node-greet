#!/usr/bin/env node

var greet = require( "../index.js" )
    , parseArgs = require('minimist');

var argv = parseArgs( process.argv.slice(2) );

if ( argv['_'].length > 0 ){
    console.log( greet( argv['_'][0], "drunk" in argv ));
}else{
    console.log( "不要坑我啦，至少给个名字嘛(抠鼻)" );   
}
