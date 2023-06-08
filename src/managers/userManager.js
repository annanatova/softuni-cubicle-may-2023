const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.register = (userData) => User.create(userData);
exports.login = async (username, password) => {
    const user = await User.findOne({ username });
    if(!user) {
        throw new Error('Cannot find user or password!');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid) {
        throw new Error('Cannot find user or password!');
    }
    
    return user;
}