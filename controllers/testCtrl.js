let Users = require("../models/user");
module.exports.controller = (app)=> {

    /**
     *  Sing up page route
     */
    app.get('/test/:id', (req, res)=> {
        res.send(Users.create(req.params.id));
    });

};