const router = require("express").Router();
const userRoutes = require("./users");
const commentRoutes = require('./comments');
const eventRoutes = require('./events');
const tagRoutes = require('./tags');

// Note routes
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use('/events', eventRoutes);
router.use('/tags', tagRoutes);
module.exports = router;