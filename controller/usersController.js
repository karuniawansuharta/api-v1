// Import users model
let User = require('../models/usersModel');

// Handle index actions
exports.index = function (req, res) {
    User.find({}, function(err, User) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: User
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    let user = new User();
    user.name = req.body.name ? req.body.name : user.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.level = req.body.level;
    user.address1 = req.body.address1;
    user.address2 = req.body.address2;
    user.token = req.body.token;
    user.gender = req.body.gender;
    user.phone = req.body.phone;
// save the contact and check for errors
    user.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New users created!',
            data: user
        });
    });
};

// exports.view = function (req, res) {
//     User.findById (req.params.user_id, function (err, user) {
//         if (err)
//         res.json({
//             status: "error",
//             message: err,
//         });
//         res.json({
//             message: 'User details loading..',
//             data: user
//         });
//     });
// };
// exports.update = function (req, res) {
//     User.findById(req.params.user_id, function (err, user) {
//         if (err)
//             res.send(err);
//             user.nama = req.body.nama ? req.body.nama : user.nama;
//             user.gender = req.body.gender;
//             user.email = req.body.email;
//             user.alamat = req.body.alamat;
//             user.phone = req.body.phone;
//             user.password = req.body.password;
            
//     // save the contact and check for errors
//     user.save(function (err) {
//             if (err)
//                 res.json(err);
//             res.json({
//                 message: 'Contact Info updated',
//                 data: user
//             });
//         });
//     });
// };
// // Handle delete contact
// exports.delete = function (req, res) {
//     User.remove({
//         _id: req.params.user_id
//     }, function (err, user) {
//         if (err)
//             res.send(err);
// res.json({
//             status: "success",
//             message: 'Contact deleted'
//         });
//     });
// };