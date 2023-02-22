require("dotenv").config();
const User = require('../models/user')
const client = require('twilio')("ACea03bcb64e2b4a51e72d848546a4845b", "19e8fc5162b06c511a3329e267292510");


const sendOtp = (req, res) => {
  const {countryCode,phoneNumber} = req.body;
  
client.verify.v2.services("VA29326688d04c9231c8fc814da2eb5a64")
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

   client.verify.v2.services("VA29326688d04c9231c8fc814da2eb5a64")
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