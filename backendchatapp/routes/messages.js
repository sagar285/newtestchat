
const { sendMessage, myMessages, sendaudioMessage } = require("../controllers/messages");
const verifyToken = require("../middleware/auth");
const router = require("express").Router()
const multer =require("multer")
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


router.post("/sendmessage",verifyToken,upload.fields([{ name: 'image', maxCount: 1 }]),sendMessage);
router.post("/sendaudiomessage",verifyToken,upload.fields([{ name: 'audio', maxCount: 1 }]),sendaudioMessage);
router.post("/mymessages",verifyToken,myMessages);

module.exports =router 