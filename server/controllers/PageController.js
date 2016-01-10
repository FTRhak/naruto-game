module.exports = function PageController() {
    this.actionMethods = [
        {
            action: "index",
            url: "/",
            method: "get"
        },
        {
            action: "user",
            url: "/user",
            method: "get"
        }
    ];
    this.index = function (req, res) {
        //
        db.query('SELECT * from user', function (err, rows, fields) {
            res.render('index', {data: rows});
        });
        
    };
    

    this.user = function (req, res) {
        db.query('SELECT * from User', function (err, rows, fields) {
            res.json({user: rows[0]});
        });
    };
};