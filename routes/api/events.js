//Event api routes here
const router = require('express').Router();
const eventsController = require('../../controllers/eventsController');

//Responds to /api/events
router.route('/')
    .get(eventsController.findAll)
    .post(eventsController.create);

    // Matches with "/api/events/:id"
router.route('/:id')
.get(eventsController.findById)
.put(eventsController.update)
.delete(eventsController.remove);

module.exports = router;