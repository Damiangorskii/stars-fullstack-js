const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.user_sign_in = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      email: req.body.email,
      password: hashedPassword,
    });

    const result = await user.save();
    res.status(200).json({
      message: 'New user added successfully',
      info: result,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.user_log_in = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user)
        return res.status(401).json({ wiadomosc: 'Authoprization failure' });
      bcrypt.compare(req.body.password, user.password).then(result => {
        if (!result)
          return res.status(401).json({ wiadomosc: 'Authorization failure' });
        const token = jwt.sign({ email: user.email }, process.env.JWT_KEY, {
          expiresIn: '1h',
        });
        return res.status(200).json({ wiadomosc: token });
      });
    })
    .catch(err => {
      return res.status(500).json(err);
    });
};
