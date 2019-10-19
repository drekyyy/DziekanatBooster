
const {Auth} = require('../firebase/index')

exports.form = async (req, res, next) => {
   res.render('form.pug', {
       msg: 'Sign Up to tremendous dziekanat booster'
   })
};

exports.home = async (req, res) => {
    res.render('home.pug', {
        mesycz: 'DziekanatBooster - Good Luck 💛 HOMEPAGE',
    });
};

exports.register = async (req, res) => {
    try {
        const auth = new Auth(req.body)
        await auth.register()
        res.render('success.pug', {
            msg: `${req.body.email} has been registered`
        })
    } catch (e) {
        return e
    }
}