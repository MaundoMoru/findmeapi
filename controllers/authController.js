// require("dotenv").config();
const User = require('../models/user')
const client = require('twilio')("ACc06e4db2de6878f7e2f17b1df420d789", "0e9df67e2363284dec079c3592eab882");


const sendOtp = (req, res) => {
  const {countryCode,phoneNumber} = req.body;
  
client.verify.v2.services("VA6a8ebeea88d5cb37dd5f35f95ddb35ca")
    .verifications
    .create({to: `${countryCode}${phoneNumber}`, channel: 'sms'})
    .then((verification) => {
      res.send(verification)
    })
    .catch((err)=>{
      console.log(err)
      res.send(err)
    });
  }

const verifyOtp =  (req, res)=>{
  const {otp,countryCode,phoneNumber} = req.body

  console.log({otp,countryCode,phoneNumber})

   client.verify.v2.services("VA6a8ebeea88d5cb37dd5f35f95ddb35ca")
  .verificationChecks
  .create({to: `${countryCode}${phoneNumber}`, code: otp})
  .then((verification_check) =>{
    console.log(verification_check.status)
    res.send(verification_check)
    // save to database
    // const user = new User({
    //   phoneNumber: `${countryCode}${phoneNumber}`,
    //   image: req.body.image,
    //   name: req.body.name,
    //   hired: req.body.hired,
    //   availability: req.body.availability,
    //   category: req.body.category,
    //   payment: req.body.payment,
    //   rating: req.body.rating,
    //   online: req.body.online,
    //  })
    //  user.save()
    //  .then((result)=>{
    //      res.send(result)
    //  }).catch((err)=>{
    //      res.send(err)
    //  })
  })
  .catch((err)=>{
    res.send(err)
  });
}

module.exports = {sendOtp, verifyOtp}