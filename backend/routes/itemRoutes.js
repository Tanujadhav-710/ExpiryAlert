const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

router.post("/", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

router.delete("/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted ok" });
});
module.exports = router;