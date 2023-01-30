const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');
const verifyIsAdmin = require('../middlewares/verifyIsAdmin');
const { route } = require('./auth.route');

router.get("/",verifyToken,  userController.getUser);
router.get("/users", verifyToken, verifyIsAdmin, userController.getUsers);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post("/wishlist", verifyToken, userController.updateUserWishlist);
router.post("/password",userController.passwordEmail);
router.post("/update",userController.updateUser);


module.exports = router;