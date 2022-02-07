const path = require("path");
const fs = require("fs");


/*Main Controller */

const mainController = {
    home: (req,res) => {
        res.render("home");
        //res.sendFile(path.resolve(__dirname, '../views/home.ejs'));
   }

};

module.exports = mainController;
