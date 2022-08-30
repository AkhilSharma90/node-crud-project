const router = require("express").Router();

router.post("/",(req,res) =>{
    res.send("APIs ARE WORKING! YAYY!")
})

module.exports = router;