let router = require('express').Router();
let usersController = require('../controller/usersController');
// Contact routes
router.route('/')
    .get(usersController.index)
    .post(usersController.new)
// router.route('/:user_id')
//     .get(usersController.view)
//     .patch(usersController.update)
//     .put(usersController.update)
//     .delete(usersController.delete);

module.exports = router;

