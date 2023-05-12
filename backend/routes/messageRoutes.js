const express = require("express");
const { sendMessage, allMessages } = require("../controllers/messageControllers");
const { protect } = require("../middlewares/authMiddleware");
const messageRoutes = express.Router();

messageRoutes.route("/:chatId").get(protect, allMessages);
messageRoutes.route("/").post(protect, sendMessage);

module.exports = messageRoutes;
