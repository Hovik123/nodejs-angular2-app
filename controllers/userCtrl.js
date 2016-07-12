let Users = require("../models/user");
module.exports.controller = (app)=> {

    /**
     *  Sing up page route
     */
    app.get('/signup', (req, res)=> {
        Users.create().then((data)=> {
        }).reject((err)=> {
                console.log(err);
                res.render('users/signup')
            }
        );
        // any logic goes here
    });

    /**
     * Login page route
     */
    app.get('/login', (req, res)=> {
        // any logic goes here
        res.render('index', {title: "hello login"})
    });

};