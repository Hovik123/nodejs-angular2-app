/**
 * Module dependencies.
 */

let express = require('express');
let routes = require('./routes');
let http = require('http');
let path = require('path');
let fs = require('fs');

var app = module.exports = express.createServer();

// Configuration

app.configure(()=> {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session({secret: 'your secret here'}));
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
    // dynamically include routes (Controller)
    fs.readdirSync('./controllers').forEach((file)=> {
        if (file.substr(-3) == '.js') {
            let route = require('./controllers/' + file);
            route.controller(app);
        }
    });
});

app.configure('development', ()=> {
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.configure('production', ()=> {
    app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.listen(3000, ()=> {
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
