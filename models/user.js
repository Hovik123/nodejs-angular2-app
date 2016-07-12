let mongose = require("mongoose");
module.exports.Users = ()=> {
    return {
        create: (id)=> {
            return id + 1;
        }
    }
};