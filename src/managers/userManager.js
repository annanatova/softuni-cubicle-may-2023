const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const User = require('../models/User');

// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
const SECRET = 'bbf908f59c60c3604a605341e54139fd24ca6477ddb7d43e873b2ec18846c40b';

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
    
    const payload = {
        _id: user._id,
        username: user.username,
    }
    const token = await jwt.sign(payload, SECRET, { expiresIn: '2d'});

    return token;
}