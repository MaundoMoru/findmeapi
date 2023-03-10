const User = require("../models/user");
const fs = require("fs");
const aws = require("aws-sdk");
const { Console } = require("console");

const addUser = async (req, res) => {
  //  var check = User.findOne({where: {phoneNumber: req.body.phoneNumber}})
  if (typeof req.file === "undefined") {
    User.sync({ force: false }).then(function () {
      User.create({
        phoneNumber: req.body.countryCode + req.body.phoneNumber,
        image: "",
        name: req.body.name,
        bio: req.body.bio,
        hired: req.body.hired,
        availability: req.body.availability,
        category: req.body.category,
        payment: req.body.payment,
        rating: req.body.rating,
        online: req.body.online,
      })
        .then((success) => {
          res.send(success);
        })
        .catch((err) => {
          res.send(err);
        });
    });
  } else {
    aws.config.update({
      region: "us-east-1",
      accessKeyId: "AKIA53V7LDH2DRXQQX6X",
      secretAccessKey: "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",
    });

    const s3 = new aws.S3();

    var params = {
      Bucket: "findmefilebucket",
      Key: req.file.originalname,
      Body: fs.createReadStream(req.file.path),
      ContentType: req.file.mimetype,
    };

    const uploadedImage = await s3
      .upload(params, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log("User created to database");
        }
      })
      .promise();

    console.log("This is it " + uploadedImage.Location);

    User.sync({ force: false }).then(function () {
      User.create({
        phoneNumber: req.body.countryCode + req.body.phoneNumber,
        image: uploadedImage.Location,
        name: req.body.name,
        bio: req.body.bio,
        hired: req.body.hired,
        availability: req.body.availability,
        category: req.body.category,
        payment: req.body.payment,
        rating: req.body.rating,
        online: req.body.online,
      })
        .then((success) => {
          fs.unlinkSync(req.file.path);
          res.send(success);
        })
        .catch((err) => {
          res.send(err);
        });
    });
  }
};

const editUser = async (req, res) => {

  // var s3 = new aws.S3({
  //   region: "us-east-1",
  //   accessKeyId: "AKIA53V7LDH2DRXQQX6X",
  //   secretAccessKey: "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",
  // });
  // s3.deleteObject(
  //   {
  //     Bucket: "findmefilebucket",
  //     Key: 'ferry.png',
  //   },
  //   function (err, data) {}
  // );

  User.update({
      name: req.body.name,
      bio: req.body.bio,
      availability: req.body.availability,
      category: req.body.category,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then((success) => {
      User.findOne({ where: { id: req.params.id } }).then((success) => {
        res.send(success);
      });
    })
    .catch((err) => {
      res.send(err);
    });
};



const fetchUsers = (req, res) => {
  User.findAll({
    order: [["id", "ASC"]],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

const deleteUser = (req, res) => {
  const id = req.body.id;
  console.log(id);
  User.findByPk(id)
    .then((success) => {
      return success.destroy();
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  addUser,
  fetchUsers,
  deleteUser,
  editUser,
};
