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
      accessKeyId: "AKIA53V7LDH2MWUSHFRZ",
      secretAccessKey: "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",
    });

    const s3 = new aws.S3();

    var params = {
      Bucket: "findmefilesbucket",
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
  const user = await User.findOne({ where: { id: req.params.id } });
  // var splitUrl = user.image.split('/');
  // console.log(splitUrl)
  // let lastElement = await splitUrl[splitUrl.length - 1];
  // console.log('File is '+lastElement);

  // aws.config.update({
  //   // region: "us-east-1",
  //   accessKeyId: "AKIA53V7LDH2E3R3HBXW",
  //   secretAccessKey: "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",
  // });

  // const s3 = new aws.S3();

  // await s3
  //   .deleteObject({
  //       Bucket: "findmefilesbucket",
  //       Key:'ferry.png',
  //     },
  //     function (err, data) {}
  //   )
  //   .promise();


  if (typeof req.file === "undefined") {
    User.update(
      {
        image: user.image,
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
  }else{
    aws.config.update({
      region: "us-east-1",
      accessKeyId: "AKIA53V7LDH2MWUSHFRZ",
      secretAccessKey: "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",
    });

    const s3 = new aws.S3();

    var params = {
      Bucket: "findmefilesbucket",
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
      User.update(
        {
          image: uploadedImage.Location,
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
          fs.unlinkSync(req.file.path);
          User.findOne({ where: { id: req.params.id } }).then((success) => {
            res.send(success);
          });
        })
        .catch((err) => {
          res.send(err);
        });
    });
  }
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
