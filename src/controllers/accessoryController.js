const router = require("express").Router();
const accessoryManager = require("../managers/accessoryManager");
const { extractErrorMessages } = require("../utils/errorHelpers");

router.get("/create", (req, res) => {
  res.render("accessory/create");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl } = req.body;
  try {
    await accessoryManager.create({ name, description, imageUrl });
    res.redirect("/");
  } catch (err) {
    const errorMessages = extractErrorMessages(err);
    res.status(404).render("accessory/create", { errorMessages });
  }
});

module.exports = router;
