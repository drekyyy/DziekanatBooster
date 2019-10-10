const mongoose = require('mongoose');
// const student = mongoose.model('Student');


exports.something = async (req, res, next) => {
    next();
};
exports.login = async (req, res) => {
    res.render('login.pug', {
        mesycz: 'DziekanatBooster - Good Luck 💛',
    });

};