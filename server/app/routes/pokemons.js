const { Router } = require("express");
const PokemonModel = require("../models/pokemon");
const verifyToken = require("../middlewares/verifyToken");

const router = Router();

router.get("/api/pokemons", verifyToken, async (req, res) => {
  const pokemons = await PokemonModel.find({ userId: req.userId });

  return res.status(200).json({
    data: pokemons,
    success: true,
    status: 200,
    error: null,
  });
});

router.post("/api/pokemon/catch", verifyToken, async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Missing name" });

  const pokemon = new PokemonModel({
    name,
    userId: req.userId,
  });

  try {
    const savedPokemon = await pokemon.save();

    return res.status(201).json({
      data: savedPokemon,
      success: true,
      status: 200,
      error: null,
    });
  } catch (error) {
    return res.status(500).json({ error, message: "Internal server error" });
  }
});

router.delete("/api/pokemon/release/:name", verifyToken, async (req, res) => {
  const { name } = req.params;
  if (!name) return res.status(400).json({ error: "Missing name" });

  try {
    const pokemon = await PokemonModel.findOneAndDelete({
      name: name,
      userId: req.userId,
    });

    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    res.status(202).json({
      data: pokemon,
      success: true,
      status: 200,
      error: null,
    });
  } catch (error) {
    return res.status(500).json({ error, message: "Internal server error" });
  }
});

module.exports = router;
