//Comments api routes here
const router = require('express').Router();
const commentsController = require('../../controllers/commentsController');

//Responds to /api/comments
router.route('/')
    .get(commentsController.findAll)
    .post(commentsController.create);

    // Matches with "/api/comments/:id"
router.route('/:id')
.get(commentsController.findById)
.delete(commentsController.remove);

module.exports = router;