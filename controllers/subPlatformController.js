const SubPlatform = require('../models/subModel');
const User = require('../models/userModel');
const sendEmail = require('../email');

exports.createSubPlatform = async (req, res, next) => {
  try {
    const newSubPlatform = await SubPlatform.create(req.body);

    // const user = await User.find();

    // const message =
    //   'New article has publiced on our website for more info visite on website : www.https:/127.0.0.1:5000/api/vi/plateform/{website name}';

    // await sendEmail({
    //   email: user.email,
    //   subject: 'New atricle!!',
    //   message,
    // });

    res.status(201).json({
      status: 'success',
      data: {
        Platform: newSubPlatform,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.sendMail = async (req, res, next) => {
  try {
    const user = await User.find({ email: req.body.email });

    const message =
      'New article has publiced on our website for more info visite on website : www.https:/127.0.0.1:5000/api/vi/plateform/{website name}';

    await sendEmail({
      email: user.email,
      subject: 'New atricle!!',
      message,
    });

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
  }
  next();
};

exports.getAllSubPlatform = async (req, res, next) => {
  try {
    const subPlatform = await SubPlatform.find();

    res.status(200).json({
      status: 'success',
      results: subPlatform.length,
      data: {
        subPlatform,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
