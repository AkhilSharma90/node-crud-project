const router = require("express").Router();

router.post("/",(req, res) => {
    res.send('API IS WORKING NOW, YAYY!!');
  });

module.exports = router;

