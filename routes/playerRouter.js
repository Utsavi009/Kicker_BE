const Player = require("../models/Player");

const express = require("express");
const playerRouter = express.Router();
playerRouter.use(express.urlencoded({ extended: true }));

playerRouter.get("/players", (req, res) => {
  Player.find()
    .then((player) => res.json(player))
    .catch((err) => res.json(err));
});

playerRouter.get("/players/:id", (req, res) => {
  Player.findById(req.params.id)
    .then((player) => res.json(player))
    .catch((err) => res.json(err));
});

playerRouter.post("/players", (req, res) => {
  Player.create(req.body)
    .then((player) => res.json(player))
    .catch((err) => res.json(err));
});

playerRouter.put("/players/:id", async (req, res) => {
  const { id } = req.params;
  /* let player = {};
  await Player.findOne({ _id: id })
    .exec()
    .then((res) => (player = res));
  player.score++;
  Player.findOneAndUpdate({ _id: id }, player, { new: true })
    .then((player) => res.json(player))
    .catch((err) => res.json(err)); */
  Player.updateOne(
    { _id: id },
    {
      $set: {
        name: req.body.name,
        location: req.body.location,
        score: req.body.score,
      },
    }
  )
    .then((player) => res.json(player))
    .catch((err) => res.json(err));
});

playerRouter.delete("/players/:id", (req, res) => {
  Player.deleteOne({ _id: req.params.id })
    .then(() => res.json("Player has been deleted"))
    .catch((err) => res.json(err));
});

module.exports = playerRouter;
