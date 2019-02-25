//Users api routes here
const router = require('express').Router();
const usersController = require('../../controllers/usersController')

//Responds to /api/users
router.route('/')
    .put(usersController.find)
    .post(usersController.create);

    // Matches with "/api/users/:id"
router
.route('/:id')
.get(usersController.findById)
.put(usersController.update)
.delete(usersController.remove);

module.exports = router;