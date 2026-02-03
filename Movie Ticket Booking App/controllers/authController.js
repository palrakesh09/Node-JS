const User = require('../models/User');
const bcrypt = require('bcryptjs');
exports.register = async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 10);
    await User.create({ ...req.body, password: hash });
    res.redirect('/login');
};
exports.login = async (req, res) => {
    const u = await User.findOne({ email: req.body.email });
    if (!u) return res.redirect('/login');
    const ok = await bcrypt.compare(req.body.password, u.password);
    if (!ok) return res.redirect('/login');
    req.session.user = u;
    u.role === 'admin' ? res.redirect('/admin') : res.redirect('/');
};
exports.logout = (req, res) => { req.session.destroy(() => res.redirect('/login')); };