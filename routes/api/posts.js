const express = require("express");
const router = express.Router();

//@route GET api/posts/test
//@DESC   Tests post route
//@access   Public
router.get("/test", (req, res) => res.json({ msg: "posts are working" }));

module.exports = router;
