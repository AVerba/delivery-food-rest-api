const express = require("express");
const ctrl = require(`../../controllers/auth`);
const {ctrlWrapper} = require(`../../helpers`);

const {auth, validation} = require(`../../middlewares`);
const {schemas} = require('../../models/user');

const router = express.Router();

// sign up
router.post("/register", validation(schemas.register), ctrlWrapper(ctrl.register));

// sign in
router.post("/login", validation(schemas.login), ctrlWrapper(ctrl.login));

// log out
router.get("/logout", auth, ctrlWrapper(ctrl.logout));

// google authorization
router.get("/google", ctrlWrapper(ctrl.googleAuth));

router.get("/google-redirect", ctrlWrapper(ctrl.googleRedirect));

// current
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));


module.exports = router;
