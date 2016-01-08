module.exports = function PageController() {
    this.actionMethods = [
        {
            action: "index",
            url: "/",
            method: "get"
        }
    ];
    this.index = function (req, res) {
        //
        db.query('SELECT * from user', function (err, rows, fields) {
            if (!err)
                console.log('The solution is: ', rows);
            else
                console.log('Error while performing Query.');
            res.render('index', {data: rows});
        });
        
    };
    

    this.user = function () {
        db.query('SELECT * from User', function (err, rows, fields) {
            if (!err)
                console.log('The solution is: ', rows);
            else
                console.log('Error while performing Query.');
        });
    };
};